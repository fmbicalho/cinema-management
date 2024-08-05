function render(onClick) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements

    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-section';
    welcomeSection.style = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-image: url('pics/background.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        position: relative;
    `;

    const welcomeText = document.createElement('h1');
    welcomeText.innerText = 'Welcome to Cinema Management';
    welcomeText.style = `
        font-size: 3rem;
        margin-bottom: 20px;
    `;

    const tagline = document.createElement('p');
    tagline.innerText = 'Making the hard work an easy movie';
    tagline.style = `
        font-size: 1.5rem;
        margin-bottom: 40px;
        font-style: italic;
    `;

    const button = document.createElement('button');
    button.className = `btn btn-danger`;
    button.type = `button`;
    button.innerText = `Login`;
    button.style = `
        font-size: 1.25rem;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    `;

    welcomeSection.appendChild(welcomeText);
    welcomeSection.appendChild(tagline);
    welcomeSection.appendChild(button);

    button.addEventListener('click', async e => {
        e.preventDefault();
        alert('Redirecting to login page...');
    });

    container.appendChild(welcomeSection);
}

export default { render };
