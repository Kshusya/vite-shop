const products = [
    {
        id: 1,
        name: "Bratz doll Meygan",
        price: 23.99,
    },
    {
        id: 2,
        name: "Bratz doll Nevra",
        price: 20.99,
    },
    {
        id: 3,
        name: "Bratz doll Kumi",
        price: 20.99,
    },
    {
        id: 4,
        name: "Bratz doll Kiana",
        price: 17.99,
    },
    {
        id: 5,
        name: "Bratz doll Yasmin",
        price: 48.00,
    },
    {
        id: 6,
        name: "Bratz doll Sasha",
        price: 24.99,
    },
]

export default products

export function getProductById(id) {
    return products.find(product => product.id == id)
}