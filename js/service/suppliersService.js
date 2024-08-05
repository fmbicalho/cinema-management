const suppliers = [
    { id: 1, name: 'Popcorn', description: 'Delicious popcorn available in various flavors.', value: 10.0 },
    { id: 2, name: 'Drinks', description: 'Wide selection of soft drinks and beverages.', value: 15.0 },
    { id: 3, name: 'Snacks', description: 'A variety of snacks to enjoy during the movie.', value: 20.0 },
    { id: 4, name: 'Nachos', description: 'A very mexican nachos, better than Doritos! (And cheaper tho...).', value: 10.0 },
];

async function getSuppliers() {
    return suppliers;
}

export default { getSuppliers };