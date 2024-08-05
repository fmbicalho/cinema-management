import suppliersService from '../service/suppliersService.js';
import suppliersView from '../view/suppliersView.js';

export async function init() {
    const suppliers = await suppliersService.getSuppliers();
    suppliersView.render(suppliers);
}

export default { init };