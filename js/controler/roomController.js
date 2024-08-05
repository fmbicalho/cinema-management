import roomService from '../service/roomService.js';
import roomView from '../view/roomView.js';

export async function init() {
    try {
        const rooms = await roomService.getRooms();
        roomView.render(rooms);
    } catch (error) {
        console.error('Error initializing rooms:', error);
    }
}

export default { init };
