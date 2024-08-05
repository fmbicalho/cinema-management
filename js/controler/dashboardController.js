import dashboardView from '../view/dashboardView.js';
import dashService from '../service/dashService.js';

export async function init() {
    const boards = await dashService.getBoards();
    dashboardView.render(boards);
}
