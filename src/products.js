const products = [
    {
        id: 1,
        name: "Bratz Original Fashion Doll Meygan",
        price: 23.99,
    },
    {
        id: 2,
        name: "Bratz Original Fashion Doll Nevra",
        price: 20.99,
    },
    {
        id: 3,
        name: "Bratz Original Fashion Doll Kumi",
        price: 20.99,
    },
    {
        id: 4,
        name: "Bratz Original Fashion Doll Kiana",
        price: 17.99,
    },
    {
        id: 5,
        name: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll Yasmin",
        price: 48.00,
    },
    {
        id: 6,
        name: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll Sasha",
        price: 24.99,
    },
    {
        id: 7,
        name: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll Cloe",
        price: null,
    },
    {
        id: 8,
        name: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll Jade",
        price: 44.84,
    },
]

export default products

export function getProductById(id) {
    return products.find(product => product.id == id)
}