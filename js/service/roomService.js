import filmService from './filmService.js';

const rooms = [
    { id: 1, name: 'IMAX', seats: 68 },
    { id: 2, name: 'Standard', seats: 68 },
    { id: 3, name: 'VIP', seats: 68 },
    { id: 4, name: '3D', seats: 68 },
    { id: 5, name: 'VIP', seats: 68 },
    { id: 6, name: 'Standard', seats: 68 },
    { id: 7, name: 'Standard', seats: 68 },
    { id: 8, name: 'IMAX', seats: 68 },
];

async function getRooms() {
    const films = await filmService.getFilms();

    const roomsWithFilms = rooms.map(room => {
        const film = films[Math.floor(Math.random() * films.length)];
        return {
            ...room,
            currentFilm: film
        };
    });

    return roomsWithFilms;
}

function incrementSeat(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) room.seats += 1;
}

function decrementSeat(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) room.seats -= 1;
}

export default { getRooms, incrementSeat, decrementSeat };
