const products = [
    {
        id: 1,
        name: "Meygan",
        collectionName: "Bratz Original Fashion Doll",
        price: 23.99,
    },
    {
        id: 2,
        name: "Nevra",
        collectionName: "Bratz Original Fashion Doll",
        price: 20.99,
    },
    {
        id: 3,
        name: "Kumi",
        collectionName: "Bratz Original Fashion Doll",
        price: 20.99,
    },
    {
        id: 4,
        name: "Kiana",
        collectionName: "Bratz Original Fashion Doll",
        price: 17.99,
    },
    {
        id: 5,
        name: "Yasmin",
        collectionName: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: 48.00,
    },
    {
        id: 6,
        name: "Sasha",
        collectionName: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: 24.99,
    },
    {
        id: 7,
        name: "Cloe",
        collectionName: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: null,
    },
    {
        id: 8,
        name: "Jade",
        collectionName: "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: 44.84,
    },
]

export default products

export function getProductById(id) {
    return products.find(product => product.id == id)
}