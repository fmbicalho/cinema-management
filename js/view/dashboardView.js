function render(boards) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Removes the previous elements

    const list = document.createElement('div');
    list.style = `
        display: flex; 
        flex-wrap: wrap; 
        margin-top: 2%; 
        gap: 55px; 
        justify-content: center;
    `;
    list.className = `text-center`;

    const paths = ["/rooms","rooms-href","/films","films-href",
                    "/finances","finances-href","/suppliers", "suppliers-href"];
    let index = 0
    boards.forEach(({ title, picture, leftDiv, rightDiv, path }) => {
        const item = document.createElement('div');
        item.className = `col card text-white mb-3`;
        item.style = `
            flex: 1 1 calc(34% - 15px); 
            max-width: calc(45% - 15px); 
            background-color: rgb(38, 38, 38);
            transition: transform 0.3s, box-shadow 0.3s;
        `;
        item.innerHTML = `
        <a href=${paths[index]} id=${paths[index+1]}>
            <div class="card-header">${title}</div>
            <div class="card-body" href="">
                <img src="${picture}" id="cardImage" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
                <div class="card-footer">
                    <h5 class='first'>${leftDiv}</h5>
                    <h5 class='second'>${rightDiv}</h5>
                </div>
            </div>`;
        list.appendChild(item);
        index+=2;

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
