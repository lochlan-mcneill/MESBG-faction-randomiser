evil = [ //18 Evil Factions
    "Angmar",
    "Azog's Hunters",
    "Azog's Legion",
    "Barad Dur",
    "Corsairs of Umbar",
    "Dark Denizens of Mirkwood",
    "Dark Powers of Dol Guldur",
    "Desolator of the North",
    "The Easterlings",
    "Far Harad",
    "Goblin-Town",
    "Isengard",
    "Mordor",
    "Moria",
    "The Serpent Horde",
    "Sharkey's Rogues",
    "The Trolls",
    "Variags of Khand"
]

good = [ //26 Good Factions
    "Army of Laketown",
    "Army of Thror",
    "Arnor",
    "The Dead of Dunharrow",
    "Erebor Reclaimed",
    "Fangorn",
    "The Fellowship",
    "The Fiefdoms",
    "Garrison of Dale",
    "Halls of Thranduil",
    "The Iron Hills",
    "The Kingdom of Khazad-Dum",
    "The Kingdom of Moria",
    "Lothlorien",
    "Minas Tirith",
    "The Misty Mountains",
    "Numenor",
    "Radagast's Alliance",
    "The Rangers",
    "Rivendell",
    "Rohan",
    "The Shire",
    "Survivors of Lake-town",
    "Thorin's Company",
    "The White Council",
    "Wildmen of Druadan"
]
any = []
any = good.concat(evil) //Any is good + evil, an array of 44 armies.

let randomGood = document.getElementById('good')
let randomAny = document.getElementById('any')
let randomEvil = document.getElementById('evil')
let output = document.getElementById('current-faction')


randomGood.addEventListener('click', () => {
rGood = good[1 + Math.floor(Math.random() * (good.length))]
    output.innerHTML = rGood
console.log("Good: " + rGood)
})

randomAny.addEventListener('click', () => {
rAny = any[1 + Math.floor(Math.random() * (any.length))]
    output.innerHTML = rAny
console.log("Any: " + rAny)
})

randomEvil.addEventListener('click', () => {
rEvil = evil[1 + Math.floor(Math.random() * (evil.length))]
    output.innerHTML = rEvil
console.log("Evil: " + rEvil)
})