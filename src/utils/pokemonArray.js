const pokemons = [
    {
        num: 1,
        name: "Bulbasaur",
        url: "../../resources/images/pokemon/bulbasaur.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 2,
        name: "Ivysaur",
        url: "../../resources/images/pokemon/ivysaur.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 3,
        name: "Venusaur",
        url: "../../resources/images/pokemon/ivysaur.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 4,
        name: "Charmander",
        url: "../../resources/images/pokemon/charmander.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 5,
        name: "Charmeleon",
        url: "../../resources/images/pokemon/charmeleon.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 6,
        name: "Charizard",
        url: "../../resources/images/pokemon/charizard.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 7,
        name: "Squirtle",
        url: "../../resources/images/pokemon/squirtle.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 8,
        name: "Wartortle",
        url: "../../resources/images/pokemon/wartortle.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 9,
        name: "Blastoise",
        url: "../../resources/images/pokemon/blastoise.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 10,
        name: "Caterpie",
        url: "../../resources/images/pokemon/caterpie.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 11,
        name: "Metapod",
        url: "../../resources/images/pokemon/metapod.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 12,
        name: "Butterfree",
        url: "../../resources/images/pokemon/butterfree.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 13,
        name: "Weedle",
        url: "../../resources/images/pokemon/weedle.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 14,
        name: "Kakuna",
        url: "../../resources/images/pokemon/kakuna.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 15,
        name: "Beedrill",
        url: "../../resources/images/pokemon/beedrill.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 16,
        name: "Pidgey",
        url: "../../resources/images/pokemon/pidgey.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 17,
        name: "Pidgeotto",
        url: "../../resources/images/pokemon/pidgeotto.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 18,
        name: "Pidgeot",
        url: "../../resources/images/pokemon/pidgeot.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 19,
        name: "Rattata",
        url: "../../resources/images/pokemon/rattata.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 20,
        name: "Raticate",
        url: "../../resources/images/pokemon/raticate.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 21,
        name: "Spearow",
        url: "../../resources/images/pokemon/spearow.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 22,
        name: "Fearow",
        url: "../../resources/images/pokemon/fearow.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 23,
        name: "Ekans",
        url: "../../resources/images/pokemon/ekans.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 24,
        name: "Arbok",
        url: "../../resources/images/pokemon/arbok.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 25,
        name: "Pikachu",
        url: "../../resources/images/pokemon/pikachu.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 26,
        name: "Raichu",
        url: "../../resources/images/pokemon/raichu.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 27,
        name: "Sandshrew",
        url: "../../resources/images/pokemon/sandshrew.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 28,
        name: "Sandslash",
        url: "../../resources/images/pokemon/sandslash.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: "29 & 32",
        name: "Nidoran",
        url: "../../resources/images/pokemon/nidoran.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 30,
        name: "Nidorina",
        url: "../../resources/images/pokemon/nidorina.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 31,
        name: "Nidoqueen",
        url: "../../resources/images/pokemon/nidoqueen.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 33,
        name: "Nidorino",
        url: "../../resources/images/pokemon/nidorino.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 34,
        name: "Nidoking",
        url: "../../resources/images/pokemon/nidoking.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 35,
        name: "Clefairy",
        url: "../../resources/images/pokemon/clefairy.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 36,
        name: "Clefable",
        url: "../../resources/images/pokemon/clefable.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 37,
        name: "Vulpix",
        url: "../../resources/images/pokemon/vulpix.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 38,
        name: "Ninetales",
        url: "../../resources/images/pokemon/ninetales.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 39,
        name: "Jigglypuff",
        url: "../../resources/images/pokemon/jigglypuff.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 40,
        name: "Wigglytuff",
        url: "../../resources/images/pokemon/wigglytuff.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 41,
        name: "Zubat",
        url: "../../resources/images/pokemon/zubat.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 42,
        name: "Golbat",
        url: "../../resources/images/pokemon/golbat.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 43,
        name: "Oddish",
        url: "../../resources/images/pokemon/oddish.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 44,
        name: "Gloom",
        url: "../../resources/images/pokemon/gloom.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 45,
        name: "Vileplume",
        url: "../../resources/images/pokemon/vileplume.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 46,
        name: "Paras",
        url: "../../resources/images/pokemon/paras.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 47,
        name: "Parasect",
        url: "../../resources/images/pokemon/parasect.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 48,
        name: "Venonat",
        url: "../../resources/images/pokemon/venonat.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 49,
        name: "Venomoth",
        url: "../../resources/images/pokemon/venomoth.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    },
    {
        num: 50,
        name: "Diglett",
        url: "../../resources/images/pokemon/diglett.png",
        catched: false,
        isDisplayed: false,
        isSelected: false
    }
];

export default pokemons;