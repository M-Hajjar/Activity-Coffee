// idea generator section (section 1)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('learnMoreButton').addEventListener('click', function() {
        let type = document.getElementById('typeInput').value;
        let participants = document.getElementById('participantsInput').value;

        let url = 'https://corsproxy.io/?https://bored-api.appbrewery.com/';

        if (type === 'random' || participants === '') {
            url += 'random';
        } else {
            url += `filter?type=${type}&participants=${participants}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const activity = Array.isArray(data) ? (data.length > 0 ? data[0].activity : 'No activity found for the given parameters.') : data.activity;
                document.getElementById('apiData').innerText = activity;
            })
            .catch(error => console.error('Error:', error));
    });
});

// coffee section (section 2)
document.addEventListener('DOMContentLoaded', function() {
    const getCoffeeImageButton = document.getElementById('getCoffeeImageButton');
    const coffeeImage = document.getElementById('coffeeImage');
    const coffeeRecipe = document.getElementById('coffeeRecipe');

    getCoffeeImageButton.addEventListener('click', function() {
        fetch('https://api.sampleapis.com/coffee/hot')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Select a random coffee recipe from the fetched data
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomCoffee = data[randomIndex];

                // Update the image and recipe details
                coffeeImage.src = randomCoffee.image;
                coffeeRecipe.textContent = `${randomCoffee.title}: ${randomCoffee.description}`;
            })
            .catch(error => {
                console.error('Error fetching the coffee recipe:', error);
                coffeeRecipe.textContent = 'Failed to fetch coffee recipe. Please try again later.';
            });
    });
});


// Email feedback section (section 3)
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form data
        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let message = document.getElementById("messageInput").value;

        // Send the email using EmailJS
        emailjs.send("service_bwfg7zs", "template_6knvsjy", {
            from_name: name,
            reply_to: email,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            // Display success message
            let successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

            // Hide success message after 3 seconds
            setTimeout(function() {
                successMessage.style.display = "none";
            }, 3000);

            // Reset the form after submission
            document.getElementById("feedbackForm").reset();
        }, function(error) {
            console.error('FAILED...', error);
        });
    });

