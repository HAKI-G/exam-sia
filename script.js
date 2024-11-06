async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        const jokeElement = document.getElementById('joke');
        
        // Check the joke type (single or two-part joke)
        if (data.type === 'single') {
            jokeElement.textContent = data.joke;
        } else {
            jokeElement.innerHTML = `${data.setup} <br> ${data.delivery}`;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}