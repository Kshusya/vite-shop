const products = [
    {
        id: 1,
        name: "Meygan",
        brand: "Bratz",
        collectionName: "Original Fashion Doll",
        price: 23.99,
        description: [
            "FAN FAVE RERELEASE: A near exact replica of the first-ever Meygan doll from the 2002 \"Xpress It!\" collection!",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Meygan's personal style.",
            "SUPER STYLIN’ FASHIONS: Meygan includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 2,
        name: "Nevra",
        brand: "Bratz",
        collectionName: "Original Fashion Doll",
        price: 20.99,
        description: [
            "FAN FAVE RERELEASE: A near exact replica of the first-ever Nevra doll from the 2003 \"Formal Funk\" collection!",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Nevra's personal style.",
            "SUPER STYLIN’ FASHIONS: Nevra includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 3,
        name: "Kumi",
        brand: "Bratz",
        collectionName: "Original Fashion Doll",
        price: 20.99,
        description: [
            "FAN FAVE RERELEASE: A near exact replica of the chic Kumi doll from the 2005 \"Ooh La La\" collection!",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Kumi's personal style.",
            "SUPER STYLIN’ FASHIONS: Kumi includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 4,
        name: "Kiana",
        brand: "Bratz",
        collectionName: "Original Fashion Doll",
        price: 17.99,
        description: [
            "FAN FAVE RERELEASE: A near exact replica of the first-ever Kiana doll from the 2005 \"Wild Wild West\" collection!",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Kiana's personal style.",
            "SUPER STYLIN’ FASHIONS: Kiana includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 5,
        name: "Yasmin",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Yasmin's personal style.",
            "SUPER STYLIN’ FASHIONS: Yasmin includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
        price: 48.00,
    },
    {
        id: 6,
        name: "Sasha",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Sasha's personal style.",
            "SUPER STYLIN’ FASHIONS: Sasha includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
        price: 24.99,
    },
    {
        id: 7,
        name: "Cloe",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Cloe's personal style.",
            "SUPER STYLIN’ FASHIONS: Cloe includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
        price: null,
    },
    {
        id: 8,
        name: "Jade",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Jade's personal style.",
            "SUPER STYLIN’ FASHIONS: Jade includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
        price: 44.84,
    },
    {
        id: 9,
        name: "Sasha",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: 36.99,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Sasha's personal style.",
            "SUPER STYLIN’ FASHIONS: Sasha includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 10,
        name: "Dana",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: null,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Dana's personal style.",
            "SUPER STYLIN’ FASHIONS: Dana includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 11,
        name: "Cloe",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: 36.99,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Cloe's personal style.",
            "SUPER STYLIN’ FASHIONS: Cloe includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 12,
        name: "Yasmin",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: 36.97,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Yasmin's personal style.",
            "SUPER STYLIN’ FASHIONS: Yasmin includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 13,
        name: "Jade",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: 36.99,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Jade's personal style.",
            "SUPER STYLIN’ FASHIONS: Jade includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
]

export default products

export function getProductById(id) {
    return products.find(product => product.id == id)
}