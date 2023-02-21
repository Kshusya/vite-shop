const products = [
    {
        id: 1,
        name: "Meygan",
        brand: "Bratz",
        collectionName: "Original Fashion Doll",
        price: 2399,
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
        price: 2099,
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
        price: 2099,
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
        price: 1799,
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
        price: 4800,
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Yasmin's personal style.",
            "SUPER STYLIN’ FASHIONS: Yasmin includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 6,
        name: "Sasha",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: 2499,
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Sasha's personal style.",
            "SUPER STYLIN’ FASHIONS: Sasha includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 7,
        name: "Cloe",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: null,
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Cloe's personal style.",
            "SUPER STYLIN’ FASHIONS: Cloe includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 8,
        name: "Jade",
        brand: "Bratz",
        collectionName: "20 Yearz Special Anniversary Edition Original Fashion Doll",
        price: 4484,
        description: [
            "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Jade's personal style.",
            "SUPER STYLIN’ FASHIONS: Jade includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 9,
        name: "Sasha",
        brand: "Bratz",
        collectionName: "Girls Nite Out 21st Birthday Edition Fashion Doll",
        price: 3699,
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
        price: 3699,
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
        price: 3697,
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
        price: 3699,
        description: [
            "21ST BIRTHDAY EDITION: In celebration of Bratz turning 21 yearz old, collect these special Bratz Girls Nite Out fashion dolls featuring a 21st Birthday Edition motif!",
            "GNO GLAM: Each doll has real eyelashes and body glitter.",
            "ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off Jade's personal style.",
            "SUPER STYLIN’ FASHIONS: Jade includes 2 outfits for tons of mix ‘n’ match possibilities!",
            "INCLUDES: 1 Bratz Girls Nite Out 21st Birthday Edition Fashion Doll, 2 outfits, 2 pairs of shoes, accessories, hair brush, and holographic poster."
        ],
    },
    {
        id: 14,
        name: "Draculaura",
        brand: "Monster High",
        collectionName: "Posable Fashion Doll with Accessories and Pet",
        price: 1999,
        description: [
            "School is back in session, and the Monster High ghouls are strutting the hallways in scream-tastic style!",
            "Draculaura doll wears a fang-tastic fashion featuring heart-print shorts and a vampy corset blouse with sheer sleeves and ruffled details.",
            "Gore-geous details include a heart-shaped backpack, sheer stockings, freaky-fab platform shoes, batty sunglasses and a headband in her pink and black hair.",
            "Take Draculaura doll's look to the next level with a scary-chic cape and fab-boo-lous accessories, like a backpack, smartphone, snacks and SPF 500 sunblock.",
            "Inspire spooktacular storytelling with her creepy-cute pet bat, Count Fabulous!"
        ],
    },
    {
        id: 15,
        name: "Frankie Stein",
        brand: "Monster High",
        collectionName: "Posable Fashion Doll with Accessories and Pet",
        price: 1999,
        description: [
            "School is back in session, and the Monster High ghouls are strutting the hallways in scream-tastic style!",
            "Frankie Stein doll wears an electrifying fashion featuring a plaid skirt, lightning bolt-printed blouse and a scary-chic vest.",
            "Gore-geous details include chunky platform sneakers, a chain belt and lightning bolt-detailed sunglasses, earrings and hair clips.",
            "Take Frankie Stein doll's look to the next level with a voltageous varsity jacket and freaky-fab accessories, like a lightning bolt-shaped backpack, insta-camera, pizza snack and smartphone.",
            "Inspire spooktacular storytelling with their creepy-cute pet, Watzie!"
        ],
    },
    {
        id: 16,
        name: "Cleo De Nile",
        brand: "Monster High",
        collectionName: "Posable Fashion Doll with Accessories and Pet",
        price: 1900,
        description: [
            "School is back in session, and the Monster High ghouls are strutting the hallways in scream-tastic style!",
            "Cleo De Nile doll wears a royally cool fashion featuring a blue and golden dress with mummy wrap-inspired sleeves and a scary-chic chain belt.",
            "Gore-geous details include killer knee-high boots, a creepy-cool collar necklace, matching earrings and glam sunglasses.",
            "Take Cleo De Nile doll's look to the next level with a freaky-fabulous fringe jacket and freaky-fab accessories, like a scarab beetle-studded pyramid backpack, burrito snack, beverage, smartphone and makeup compact.",
            "Inspire spooktacular storytelling with her creepy-cute pet pup, Tut!"
        ],
    },
    {
        id: 17,
        name: "Clawdeen Wolf",
        brand: "Monster High",
        collectionName: "Posable Fashion Doll with Accessories and Pet",
        price: 1900,
        description: [
            "School is back in session, and the Monster High ghouls are strutting the hallways in scream-tastic style!",
            "Clawdeen Wolf doll wears a clawsome fashion featuring an animal-print jumper and boo-tiful long-sleeve top.",
            "Gore-geous details include killer sneakers and a chain belt, glasses and jewelry with a glam, golden finish.",
            "Take Clawdeen Wolf doll's look to the next level with a fierce, faux-fur vest and scary-chic accessories, like a purse, comb, moon-shaped ice cream sandwich, snack and smartphone.",
            "Inspire spooktacular storytelling with her creepy-cute pet, Crescent!"
        ],
    },
    {
        id: 18,
        name: "Lagoona Blue",
        brand: "Monster High",
        collectionName: "Posable Fashion Doll with Accessories and Pet",
        price: 2399,
        description: [
            "School is back in session, and the Monster High ghouls are strutting the hallways in scream-tastic style!",
            "Lagoona Blue doll wears a fin-tastic fashion featuring a hot-pink hoodie with mesh sleeves and a trendy, tie-dye bike shorts romper.",
            "Gore-geous details include a sea monster-inspired waist bag, sunglasses and freaky-fab platform sandals, while her calves feature blue shading and delicate fins!",
            "Take her look to the next level with a 'metallic', fish scale-detailed swimsuit and to-die-for accessories, like a seashell backpack, snacks and a smartphone.",
            "Inspire spooktacular storytelling with her creepy-cute pet, Neptuna!"
        ],
    },
]

export default products

export function getProductById(id) {
    return products.find(product => product.id == id)
}