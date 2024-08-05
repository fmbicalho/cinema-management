import filmService from '../service/filmService.js';

async function render(rooms) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const list = document.createElement('div');
    list.style = `
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 5%;
        justify-content: center;
    `;
    list.className = 'text-center';

    rooms.forEach(({ id, name, seats, currentFilm }) => {
        const item = document.createElement('div');
        item.className = 'card text-white mb-3';
        item.style = `
            width: 40%;
            background-color: rgb(38, 38, 38);
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 15px;
            box-sizing: border-box;
        `;

        item.innerHTML = `
            <div class="movie-info" style="flex: 1; margin-right: 15px;">
                <img src="${currentFilm ? currentFilm.Poster !== 'N/A' ? currentFilm.Poster : 'fallback-image.jpg' : 'fallback-image.jpg'}" 
                     alt="${currentFilm ? currentFilm.Title : 'No Movie'}" 
                     style="width: 100%; height: auto; border-radius: 5px;">
                <h6 style="margin-top: 10px;">Now Playing: ${currentFilm ? currentFilm.Title : 'No Movie'}</h6>
            </div>
            <div class="seat-layout" id="seatLayout-${id}" style="flex: 2;">
                <!-- Seat layout will be generated dynamically -->
            </div>
            <div class="room-info" style="flex: 1; text-align: right;">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Seats: <span id="seatCount-${id}">${seats}</span></p>
            </div>
        `;

        list.appendChild(item);

        const seatLayout = item.querySelector(`#seatLayout-${id}`);
        renderSeats(seatLayout, id, seats);

        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.6)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        });
    });

    container.appendChild(list);
}

function renderSeats(container, roomId) {
    container.innerHTML = '';

    const seatLayout = [
        [1, 1, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ];

    seatLayout.forEach(rowConfig => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'center';

        rowConfig.forEach(seatType => {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.style = `
                width: 30px;
                height: 30px;
                margin: 5px;
                border-radius: 5px;
                cursor: pointer;
                position: relative;
            `;
            
            if (seatType === 1) {
                seat.style.backgroundColor = 'gray';

                seat.addEventListener('click', () => {
                    if (!seat.hasChildNodes()) {
                        const img = document.createElement('img');
                        img.src = 'pics/occupied.png';
                        img.style = `
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                        `;
                        seat.appendChild(img);
                    } else {
                        seat.removeChild(seat.firstChild);
                    }
                    updateSeatCount(roomId);
                });
            } else {
                seat.style.visibility = 'hidden';
            }

            row.appendChild(seat);
        });

        container.appendChild(row);
    });
}

function updateSeatCount(roomId) {
    const seatLayout = document.querySelector(`#seatLayout-${roomId}`);
    const freeSeats = seatLayout.querySelectorAll('.seat:not(:has(img)):not([style*="visibility: hidden"])').length;
    const seatCountElem = document.querySelector(`#seatCount-${roomId}`);
    seatCountElem.textContent = freeSeats;
}

export default { render };
