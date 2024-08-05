function render(films) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const list = document.createElement('div');
    list.style = `
        display: flex; 
        flex-wrap: wrap; 
        gap: 20px; 
        margin-top: 5%;
        margin-left: 3%;
        margin-right: 3%;
        margin-bottom: 5%;
        justify-content: center;
    `;
    list.className = `text-center`;
    console.log(films);

    films.forEach(({ Title, Poster, Year}) => {
        const item = document.createElement('div');
        item.className = `card text-white mb-3`;
        item.style = `
            flex: 1 1 calc(20% - 20px); 
            max-width: calc(20% - 20px); 
            background-color: rgb(38, 38, 38);
            transition: transform 0.3s, box-shadow 0.3s;
        `;
        item.innerHTML = `
            <div class="card-header">Movie is Available</div>
            <div class="card-body">
                <img src="${Poster !== 'N/A' ? Poster : 'fallback-image.jpg'}" id="cardImage" style="width: 100%; height: auto; object-fit: cover; border-radius: 10px;">
                <h5 class="card-title"><strong>${Title}</strong</h5>
                <p class="card-text">
                    <p>Year: ${Year}</p>
                </p>
            </div>`;
        list.appendChild(item);

        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.02)';
            item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.6)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        });
    });

    container.appendChild(list);
}

export default { render };
