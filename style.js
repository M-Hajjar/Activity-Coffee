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





// coffee  section (section 2)
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



// email feedback section (section 3) 
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    console.log("Form submitted");

    // Retrieve form data
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Create the mailto link (demo purposes only)
    let mailtoLink = `mailto:programmingwork@gmail.com?subject=Feedback&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the default mail client with the mailto link
    window.location.href = mailtoLink;

    // Optionally, you can reset the form after submission
    event.target.reset();
});

