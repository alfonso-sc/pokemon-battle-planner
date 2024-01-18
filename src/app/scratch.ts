/* 
To run locally:
npm install -g ts-node    
ts-node src/app/scratch.ts
*/

// https://steele-pokedex.azurewebsites.net/api/Pokemon/bulbasaur (with level added)
let pokemon = {
    "level": 10,
    "id": 1,
    "pokemonName": "bulbasaur",
    "baseExperience": 64,
    "weight": 6.9,
    "height": 0.7,
    "baseAttack": 49,
    "baseDefense": 49,
    "baseSpecialAttack": 65,
    "baseSpecialDefense": 65,
    "flavorText": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
    "genus": "Seed",
    "evolutionLevel": 16,
    "evolvesInto": "ivysaur",
    "evolutionTrigger": "Level up",
    "abilities": [
        {
            "id": 34,
            "abilityName": "Chlorophyll",
            "effect": "Doubles [Speed]{mechanic:speed} during [strong sunlight]{mechanic:strong-sunlight}.",
            "flavorText": "Raises SPEED in sunshine."
        },
        {
            "id": 65,
            "abilityName": "Overgrow",
            "effect": "Strengthens []{type:grass} moves to inflict 1.5× damage at 1/3 max [HP]{mechanic:hp} or less.",
            "flavorText": "Ups GRASS moves in a pinch."
        }
    ],
    "moves": [
        {
            "id": 13,
            "moveName": "razor-wind",
            "power": 80,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "1st turn: Prepare\n2nd turn: Attack",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 14,
            "moveName": "swords-dance",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "A dance that in­\ncreases ATTACK.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 15,
            "moveName": "cut",
            "power": 50,
            "powerPoints": 30,
            "accuracy": 95,
            "flavorText": "Cuts using claws,\nscythes, etc.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 20,
            "moveName": "bind",
            "power": 15,
            "powerPoints": 20,
            "accuracy": 85,
            "flavorText": "Binds the target\nfor 2-5 turns.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 22,
            "moveName": "vine-whip",
            "power": 45,
            "powerPoints": 25,
            "accuracy": 100,
            "flavorText": "Whips the foe with\nslender vines.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 29,
            "moveName": "headbutt",
            "power": 70,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\nmake foe flinch.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 33,
            "moveName": "tackle",
            "power": 50,
            "powerPoints": 35,
            "accuracy": 100,
            "flavorText": "A full-body charge\nattack.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 34,
            "moveName": "body-slam",
            "power": 85,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 36,
            "moveName": "take-down",
            "power": 90,
            "powerPoints": 20,
            "accuracy": 85,
            "flavorText": "A tackle that also\nhurts the user.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 38,
            "moveName": "double-edge",
            "power": 120,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A tackle that also\nhurts the user.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 45,
            "moveName": "growl",
            "power": null,
            "powerPoints": 40,
            "accuracy": 100,
            "flavorText": "Reduces the foe's\nATTACK.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 70,
            "moveName": "strength",
            "power": 80,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A powerful physi­\ncal attack.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 72,
            "moveName": "mega-drain",
            "power": 40,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "Steals 1/2 of the\ndamage inflicted.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 73,
            "moveName": "leech-seed",
            "power": null,
            "powerPoints": 10,
            "accuracy": 90,
            "flavorText": "Steals HP from the\nfoe on every turn.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 74,
            "moveName": "growth",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Raises the SPCL.\nATK rating.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 75,
            "moveName": "razor-leaf",
            "power": 55,
            "powerPoints": 25,
            "accuracy": 95,
            "flavorText": "Has a high criti­\ncal hit ratio.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 76,
            "moveName": "solar-beam",
            "power": 120,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "1st turn: Prepare\n2nd turn: Attack",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 77,
            "moveName": "poison-powder",
            "power": null,
            "powerPoints": 35,
            "accuracy": 75,
            "flavorText": "A move that may\npoison the foe.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 79,
            "moveName": "sleep-powder",
            "power": null,
            "powerPoints": 15,
            "accuracy": 75,
            "flavorText": "May cause the foe\nto fall asleep.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 80,
            "moveName": "petal-dance",
            "power": 120,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "Works 2-3 turns\nand confuses user.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 81,
            "moveName": "string-shot",
            "power": null,
            "powerPoints": 40,
            "accuracy": 95,
            "flavorText": "A move that lowers\nthe foe's SPEED.",
            "effect": "",
            "moveType": {
                "id": 7,
                "typeName": "Bug"
            }
        },
        {
            "id": 92,
            "moveName": "toxic",
            "power": null,
            "powerPoints": 10,
            "accuracy": 90,
            "flavorText": "A poison move with\nincreasing damage.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 99,
            "moveName": "rage",
            "power": 20,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Raises ATTACK if\nthe user is hit.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 102,
            "moveName": "mimic",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Copies a move used\nby the foe.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 104,
            "moveName": "double-team",
            "power": null,
            "powerPoints": 15,
            "accuracy": null,
            "flavorText": "Heightens evasive­\nness.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 111,
            "moveName": "defense-curl",
            "power": null,
            "powerPoints": 40,
            "accuracy": null,
            "flavorText": "Heightens the\nuser's DEFENSE.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 113,
            "moveName": "light-screen",
            "power": null,
            "powerPoints": 30,
            "accuracy": null,
            "flavorText": "Ups SPCL.DEF with\na wall of light.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 115,
            "moveName": "reflect",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Raises DEFENSE\nwith a barrier.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 117,
            "moveName": "bide",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Waits 2-3 turns &\nhits back double.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 124,
            "moveName": "sludge",
            "power": 65,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack that may\npoison the foe.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 130,
            "moveName": "skull-bash",
            "power": 130,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "1st turn: Prepare\n2nd turn: Attack",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 133,
            "moveName": "amnesia",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Sharply raises the\nuser's SPCL.DEF.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 148,
            "moveName": "flash",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Blinds the foe to\nreduce accuracy.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 156,
            "moveName": "rest",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Sleep for 2 turns\nto fully recover.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 164,
            "moveName": "substitute",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Makes a decoy with\n1/4 user's max HP.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 173,
            "moveName": "snore",
            "power": 50,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack useable\nonly while asleep.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 174,
            "moveName": "curse",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Works differently\nfor ghost-types.",
            "effect": "",
            "moveType": {
                "id": 8,
                "typeName": "Ghost"
            }
        },
        {
            "id": 182,
            "moveName": "protect",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Foils attack that\nturn. It may fail.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 188,
            "moveName": "sludge-bomb",
            "power": 90,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "An attack that may\npoison the foe.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 189,
            "moveName": "mud-slap",
            "power": 20,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "Reduces the foe's\naccuracy.",
            "effect": "",
            "moveType": {
                "id": 5,
                "typeName": "Ground"
            }
        },
        {
            "id": 202,
            "moveName": "giga-drain",
            "power": 75,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "Steals 1/2 of the\ndamage inflicted.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 203,
            "moveName": "endure",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Always leaves at\nleast 1HP.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 204,
            "moveName": "charm",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Sharply lowers the\nfoe's ATTACK.",
            "effect": "",
            "moveType": {
                "id": 18,
                "typeName": "Fairy"
            }
        },
        {
            "id": 207,
            "moveName": "swagger",
            "power": null,
            "powerPoints": 15,
            "accuracy": 90,
            "flavorText": "Causes confusion\nand raises ATTACK.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 210,
            "moveName": "fury-cutter",
            "power": 40,
            "powerPoints": 20,
            "accuracy": 95,
            "flavorText": "The foe is slashed\nwith scythes or\nclaws. Its power\nincreases if it hits\nin succession.",
            "effect": "",
            "moveType": {
                "id": 7,
                "typeName": "Bug"
            }
        },
        {
            "id": 213,
            "moveName": "attract",
            "power": null,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "Makes the opposite\ngender infatuated.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 214,
            "moveName": "sleep-talk",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Randomly attacks\nwhile asleep.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 216,
            "moveName": "return",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack that is\nbased on loyalty.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 218,
            "moveName": "frustration",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack based on\nlack of loyalty.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 219,
            "moveName": "safeguard",
            "power": null,
            "powerPoints": 25,
            "accuracy": null,
            "flavorText": "Prevents all\nstatus problems.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 230,
            "moveName": "sweet-scent",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Reduces the foe's\nevasiveness.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 235,
            "moveName": "synthesis",
            "power": null,
            "powerPoints": 5,
            "accuracy": null,
            "flavorText": "Restores HP\n(varies by time).",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 237,
            "moveName": "hidden-power",
            "power": 60,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The power varies\nwith the POKéMON.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 241,
            "moveName": "sunny-day",
            "power": null,
            "powerPoints": 5,
            "accuracy": null,
            "flavorText": "Boosts fire-type\nmoves for 5 turns.",
            "effect": "",
            "moveType": {
                "id": 10,
                "typeName": "Fire"
            }
        },
        {
            "id": 249,
            "moveName": "rock-smash",
            "power": 40,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\nlower DEFENSE.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 263,
            "moveName": "facade",
            "power": 70,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Boosts ATTACK when burned,\nparalyzed, or poisoned.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 267,
            "moveName": "nature-power",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "The type of attack varies\ndepending on the location.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 275,
            "moveName": "ingrain",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Lays roots that restore HP.\nThe user can’t switch out.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 282,
            "moveName": "knock-off",
            "power": 65,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Knocks down the foe’s held\nitem to prevent its use.",
            "effect": "",
            "moveType": {
                "id": 17,
                "typeName": "Dark"
            }
        },
        {
            "id": 290,
            "moveName": "secret-power",
            "power": 70,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack with effects\nthat vary by location.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 320,
            "moveName": "grass-whistle",
            "power": null,
            "powerPoints": 15,
            "accuracy": 55,
            "flavorText": "Lulls the foe into sleep\nwith a pleasant melody.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 331,
            "moveName": "bullet-seed",
            "power": 25,
            "powerPoints": 30,
            "accuracy": 100,
            "flavorText": "Shoots 2 to 5 seeds in a row\nto strike the foe.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 345,
            "moveName": "magical-leaf",
            "power": 60,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Attacks with a strange leaf\nthat cannot be evaded.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 363,
            "moveName": "natural-gift",
            "power": null,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user draws power\nto attack by using\nits held Berry.\nThe Berry determines\nits type and power.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 388,
            "moveName": "worry-seed",
            "power": null,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "A seed that causes\nworry is planted on\nthe foe. It prevents\nsleep by making its\nability Insomnia.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 402,
            "moveName": "seed-bomb",
            "power": 80,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user slams a\nbarrage of hard-\nshelled seeds\ndown on the foe\nfrom above.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 412,
            "moveName": "energy-ball",
            "power": 90,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "The user draws power\nfrom nature and\nfires it at the foe.\nIt may also lower the\ntarget’s Sp. Def.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 437,
            "moveName": "leaf-storm",
            "power": 130,
            "powerPoints": 5,
            "accuracy": 90,
            "flavorText": "A storm of sharp\nleaves is whipped up.\nThe attack’s recoil\nsharply reduces the\nuser’s Sp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 438,
            "moveName": "power-whip",
            "power": 120,
            "powerPoints": 10,
            "accuracy": 85,
            "flavorText": "The user violently\nwhirls its vines or\ntentacles to harshly\nlash the foe.\n",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 445,
            "moveName": "captivate",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "If it is the opposite\ngender of the user,\nthe foe is charmed\ninto sharply lowering\nits Sp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 447,
            "moveName": "grass-knot",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "The user snares the\nfoe with grass and\ntrips it. The heavier\nthe foe, the greater\nthe damage.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 474,
            "moveName": "venoshock",
            "power": 65,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "The user drenches the target in a special\npoisonous liquid. Its power is doubled\nif the target is poisoned.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 496,
            "moveName": "round",
            "power": 60,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user attacks the target with a song.\nOthers can join in the Round and make\nthe attack do greater damage.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 497,
            "moveName": "echoed-voice",
            "power": 40,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user attacks the target with an\nechoing voice. If this move is used\nevery turn, it does greater damage.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 520,
            "moveName": "grass-pledge",
            "power": 80,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "A column of grass hits opposing Pokémon.\nWhen used with its water equivalent, its\ndamage increases into a vast swamp.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 580,
            "moveName": "grassy-terrain",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "The user turns the ground under everyone’s feet\nto grass for five turns. This restores the HP of\nPokémon on the ground a little every turn.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 590,
            "moveName": "confide",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "The user tells the target a secret, and the target\nloses its ability to concentrate. This lowers\nthe target’s Sp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        }
    ],
    "types": [
        {
            "id": 4,
            "typeName": "Poison"
        },
        {
            "id": 12,
            "typeName": "Grass"
        }
    ],
    "generations": [
        "Generation I",
        "Generation II",
        "Generation III",
        "Generation IV",
        "Generation V",
        "Generation VI"
    ],
    "versions": [
        "red-blue",
        "yellow",
        "gold-silver",
        "crystal",
        "ruby-sapphire",
        "emerald",
        "firered-leafgreen",
        "colosseum",
        "xd",
        "diamond-pearl",
        "platinum",
        "heartgold-soulsilver",
        "black-white",
        "black-2-white-2",
        "x-y",
        "omega-ruby-alpha-sapphire"
    ],
    "images": {
        "gifs": [
            "https://shella935.blob.core.windows.net/pokemon-gifs/bulbasaur.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/bulbasaur-3.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/bulbasaur-2.gif"
        ],
        "high-fidelity": [
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/1.png"
        ],
        "icons": [
            "https://shella935.blob.core.windows.net/pokemon-icons/1.png",
            "https://shella935.blob.core.windows.net/pokemon-icons-old/1.png"
        ],
        "official-artwork": [
            "https://shella935.blob.core.windows.net/pokemon-official-artwork/1.png"
        ],
        "sprites": [
            "https://shella935.blob.core.windows.net/pokemon-sprites-back/1.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites/1.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-shiny/1.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-model/1.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-back-shiny/1.png"
        ]
    }
}

let opponent = {
    "level": 10,
    "id": 25,
    "pokemonName": "pikachu",
    "baseExperience": 112,
    "weight": 6,
    "height": 0.4,
    "baseAttack": 55,
    "baseDefense": 40,
    "baseSpecialAttack": 50,
    "baseSpecialDefense": 50,
    "flavorText": "This Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.",
    "genus": "Mouse",
    "evolutionLevel": null,
    "evolvesInto": "raichu",
    "evolutionTrigger": "Use item",
    "abilities": [
        {
            "id": 9,
            "abilityName": "Static",
            "effect": "Has a 30% chance of [paralyzing]{mechanic:paralysis} attacking Pokémon on contact.",
            "flavorText": "Paralyzes on contact."
        },
        {
            "id": 31,
            "abilityName": "Lightning Rod",
            "effect": "Redirects single-target []{type:electric} moves to this Pokémon where possible.  Absorbs Electric moves, raising [Special Attack]{mechanic:special-attack} one [stage]{mechanic:stat-modifier}.",
            "flavorText": "Draws electrical moves."
        }
    ],
    "moves": [
        {
            "id": 5,
            "moveName": "mega-punch",
            "power": 80,
            "powerPoints": 20,
            "accuracy": 85,
            "flavorText": "A powerful punch\nthrown very hard.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 6,
            "moveName": "pay-day",
            "power": 40,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Throws coins. Gets\nthem back later.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 9,
            "moveName": "thunder-punch",
            "power": 75,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An electric punch.\nIt may paralyze.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 21,
            "moveName": "slam",
            "power": 80,
            "powerPoints": 20,
            "accuracy": 75,
            "flavorText": "Slams the foe with\na tail, vine, etc.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 25,
            "moveName": "mega-kick",
            "power": 120,
            "powerPoints": 5,
            "accuracy": 75,
            "flavorText": "A powerful kicking\nattack.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 29,
            "moveName": "headbutt",
            "power": 70,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\nmake foe flinch.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 34,
            "moveName": "body-slam",
            "power": 85,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 36,
            "moveName": "take-down",
            "power": 90,
            "powerPoints": 20,
            "accuracy": 85,
            "flavorText": "A tackle that also\nhurts the user.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 38,
            "moveName": "double-edge",
            "power": 120,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A tackle that also\nhurts the user.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 39,
            "moveName": "tail-whip",
            "power": null,
            "powerPoints": 30,
            "accuracy": 100,
            "flavorText": "Lowers the foe's\nDEFENSE.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 45,
            "moveName": "growl",
            "power": null,
            "powerPoints": 40,
            "accuracy": 100,
            "flavorText": "Reduces the foe's\nATTACK.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 57,
            "moveName": "surf",
            "power": 90,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A strong water-\ntype attack.",
            "effect": "",
            "moveType": {
                "id": 11,
                "typeName": "Water"
            }
        },
        {
            "id": 66,
            "moveName": "submission",
            "power": 80,
            "powerPoints": 20,
            "accuracy": 80,
            "flavorText": "An attack that al­\nso hurts the user.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 68,
            "moveName": "counter",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Returns a physical\nblow double.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 69,
            "moveName": "seismic-toss",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "The user's level\nequals damage HP.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 70,
            "moveName": "strength",
            "power": 80,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A powerful physi­\ncal attack.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 84,
            "moveName": "thunder-shock",
            "power": 40,
            "powerPoints": 30,
            "accuracy": 100,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 85,
            "moveName": "thunderbolt",
            "power": 90,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 86,
            "moveName": "thunder-wave",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "A move that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 87,
            "moveName": "thunder",
            "power": 110,
            "powerPoints": 10,
            "accuracy": 70,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 91,
            "moveName": "dig",
            "power": 80,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "1st turn: Burrow\n2nd turn: Attack",
            "effect": "",
            "moveType": {
                "id": 5,
                "typeName": "Ground"
            }
        },
        {
            "id": 92,
            "moveName": "toxic",
            "power": null,
            "powerPoints": 10,
            "accuracy": 90,
            "flavorText": "A poison move with\nincreasing damage.",
            "effect": "",
            "moveType": {
                "id": 4,
                "typeName": "Poison"
            }
        },
        {
            "id": 97,
            "moveName": "agility",
            "power": null,
            "powerPoints": 30,
            "accuracy": null,
            "flavorText": "Sharply increases\nthe user's SPEED.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 98,
            "moveName": "quick-attack",
            "power": 40,
            "powerPoints": 30,
            "accuracy": 100,
            "flavorText": "Lets the user get\nin the first hit.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 99,
            "moveName": "rage",
            "power": 20,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Raises ATTACK if\nthe user is hit.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 102,
            "moveName": "mimic",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Copies a move used\nby the foe.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 104,
            "moveName": "double-team",
            "power": null,
            "powerPoints": 15,
            "accuracy": null,
            "flavorText": "Heightens evasive­\nness.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 111,
            "moveName": "defense-curl",
            "power": null,
            "powerPoints": 40,
            "accuracy": null,
            "flavorText": "Heightens the\nuser's DEFENSE.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 113,
            "moveName": "light-screen",
            "power": null,
            "powerPoints": 30,
            "accuracy": null,
            "flavorText": "Ups SPCL.DEF with\na wall of light.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 115,
            "moveName": "reflect",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Raises DEFENSE\nwith a barrier.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 117,
            "moveName": "bide",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Waits 2-3 turns &\nhits back double.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 129,
            "moveName": "swift",
            "power": 60,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "An attack that\nnever misses.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 130,
            "moveName": "skull-bash",
            "power": 130,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "1st turn: Prepare\n2nd turn: Attack",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 148,
            "moveName": "flash",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Blinds the foe to\nreduce accuracy.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 156,
            "moveName": "rest",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Sleep for 2 turns\nto fully recover.",
            "effect": "",
            "moveType": {
                "id": 14,
                "typeName": "Psychic"
            }
        },
        {
            "id": 164,
            "moveName": "substitute",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Makes a decoy with\n1/4 user's max HP.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 173,
            "moveName": "snore",
            "power": 50,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack useable\nonly while asleep.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 174,
            "moveName": "curse",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Works differently\nfor ghost-types.",
            "effect": "",
            "moveType": {
                "id": 8,
                "typeName": "Ghost"
            }
        },
        {
            "id": 182,
            "moveName": "protect",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Foils attack that\nturn. It may fail.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 189,
            "moveName": "mud-slap",
            "power": 20,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "Reduces the foe's\naccuracy.",
            "effect": "",
            "moveType": {
                "id": 5,
                "typeName": "Ground"
            }
        },
        {
            "id": 192,
            "moveName": "zap-cannon",
            "power": 120,
            "powerPoints": 5,
            "accuracy": 50,
            "flavorText": "Powerful and sure to cause\nparalysis, but inaccurate.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 197,
            "moveName": "detect",
            "power": null,
            "powerPoints": 5,
            "accuracy": null,
            "flavorText": "Evades attack that\nturn. It may fail.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 203,
            "moveName": "endure",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Always leaves at\nleast 1HP.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 205,
            "moveName": "rollout",
            "power": 30,
            "powerPoints": 20,
            "accuracy": 90,
            "flavorText": "Attacks 5 turns\nwith rising power.",
            "effect": "",
            "moveType": {
                "id": 6,
                "typeName": "Rock"
            }
        },
        {
            "id": 207,
            "moveName": "swagger",
            "power": null,
            "powerPoints": 15,
            "accuracy": 90,
            "flavorText": "Causes confusion\nand raises ATTACK.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 209,
            "moveName": "spark",
            "power": 65,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack that may\ncause paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 213,
            "moveName": "attract",
            "power": null,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "Makes the opposite\ngender infatuated.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 214,
            "moveName": "sleep-talk",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "Randomly attacks\nwhile asleep.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 216,
            "moveName": "return",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack that is\nbased on loyalty.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 218,
            "moveName": "frustration",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack based on\nlack of loyalty.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 223,
            "moveName": "dynamic-punch",
            "power": 100,
            "powerPoints": 5,
            "accuracy": 50,
            "flavorText": "An attack that\nalways confuses.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 231,
            "moveName": "iron-tail",
            "power": 100,
            "powerPoints": 15,
            "accuracy": 75,
            "flavorText": "An attack that may\nreduce DEFENSE.",
            "effect": "",
            "moveType": {
                "id": 9,
                "typeName": "Steel"
            }
        },
        {
            "id": 237,
            "moveName": "hidden-power",
            "power": 60,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The power varies\nwith the POKéMON.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 240,
            "moveName": "rain-dance",
            "power": null,
            "powerPoints": 5,
            "accuracy": null,
            "flavorText": "Boosts water-type\nmoves for 5 turns.",
            "effect": "",
            "moveType": {
                "id": 11,
                "typeName": "Water"
            }
        },
        {
            "id": 249,
            "moveName": "rock-smash",
            "power": 40,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "An attack that may\nlower DEFENSE.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 263,
            "moveName": "facade",
            "power": 70,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Boosts ATTACK when burned,\nparalyzed, or poisoned.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 264,
            "moveName": "focus-punch",
            "power": 150,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "A powerful loyalty attack.\nThe user flinches if hit.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 270,
            "moveName": "helping-hand",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "Boosts the power of the\nrecipient’s moves.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 280,
            "moveName": "brick-break",
            "power": 75,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "Destroys barriers such as\nREFLECT and causes damage.",
            "effect": "",
            "moveType": {
                "id": 2,
                "typeName": "Fighting"
            }
        },
        {
            "id": 282,
            "moveName": "knock-off",
            "power": 65,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "Knocks down the foe’s held\nitem to prevent its use.",
            "effect": "",
            "moveType": {
                "id": 17,
                "typeName": "Dark"
            }
        },
        {
            "id": 290,
            "moveName": "secret-power",
            "power": 70,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "An attack with effects\nthat vary by location.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 324,
            "moveName": "signal-beam",
            "power": 75,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A strange beam attack that\nmay confuse the foe.",
            "effect": "",
            "moveType": {
                "id": 7,
                "typeName": "Bug"
            }
        },
        {
            "id": 343,
            "moveName": "covet",
            "power": 60,
            "powerPoints": 25,
            "accuracy": 100,
            "flavorText": "Cutely begs to obtain an\nitem held by the foe.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 351,
            "moveName": "shock-wave",
            "power": 60,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "A fast and unavoidable\nelectric attack.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 363,
            "moveName": "natural-gift",
            "power": null,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user draws power\nto attack by using\nits held Berry.\nThe Berry determines\nits type and power.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 364,
            "moveName": "feint",
            "power": 30,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "An attack that hits a\nfoe using Protect or\nDetect. It also lifts\nthe effects of those\nmoves.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 374,
            "moveName": "fling",
            "power": null,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "The user flings its\nheld item at the foe\nto attack. Its power\nand effects depend\non the item.",
            "effect": "",
            "moveType": {
                "id": 17,
                "typeName": "Dark"
            }
        },
        {
            "id": 393,
            "moveName": "magnet-rise",
            "power": null,
            "powerPoints": 10,
            "accuracy": null,
            "flavorText": "The user levitates using electrically\ngenerated magnetism for five turns.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 435,
            "moveName": "discharge",
            "power": 80,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "A flare of electricity\nis loosed to strike\nall Pokémon in battle.\nIt may also cause\nparalysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 445,
            "moveName": "captivate",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "If it is the opposite\ngender of the user,\nthe foe is charmed\ninto sharply lowering\nits Sp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 447,
            "moveName": "grass-knot",
            "power": null,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "The user snares the\nfoe with grass and\ntrips it. The heavier\nthe foe, the greater\nthe damage.",
            "effect": "",
            "moveType": {
                "id": 12,
                "typeName": "Grass"
            }
        },
        {
            "id": 451,
            "moveName": "charge-beam",
            "power": 50,
            "powerPoints": 10,
            "accuracy": 90,
            "flavorText": "The user fires a\nconcentrated bundle\nof electricity. It may\nalso raise the user’s\nSp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 486,
            "moveName": "electro-ball",
            "power": null,
            "powerPoints": 10,
            "accuracy": 100,
            "flavorText": "The user hurls an electric orb\nat the target. The faster the user is\nthan the target, the greater the damage.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 496,
            "moveName": "round",
            "power": 60,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user attacks the target with a song.\nOthers can join in the Round and make\nthe attack do greater damage.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 497,
            "moveName": "echoed-voice",
            "power": 40,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user attacks the target with an\nechoing voice. If this move is used\nevery turn, it does greater damage.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 521,
            "moveName": "volt-switch",
            "power": 70,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "After making its attack, the user\nrushes back to switch places with\na party Pokémon in waiting.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 527,
            "moveName": "electroweb",
            "power": 55,
            "powerPoints": 15,
            "accuracy": 95,
            "flavorText": "The user captures and attacks opposing\nPokémon by using an electric net. It\nreduces the targets’ Speed stat.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 528,
            "moveName": "wild-charge",
            "power": 90,
            "powerPoints": 15,
            "accuracy": 100,
            "flavorText": "The user shrouds itself in electricity\nand smashes into its target.\nIt also damages the user a little.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        },
        {
            "id": 589,
            "moveName": "play-nice",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "The user and the target become friends,\nand the target loses its will to fight.\nThis lowers the target’s Attack stat.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 590,
            "moveName": "confide",
            "power": null,
            "powerPoints": 20,
            "accuracy": null,
            "flavorText": "The user tells the target a secret, and the target\nloses its ability to concentrate. This lowers\nthe target’s Sp. Atk stat.",
            "effect": "",
            "moveType": {
                "id": 1,
                "typeName": "Normal"
            }
        },
        {
            "id": 609,
            "moveName": "nuzzle",
            "power": 20,
            "powerPoints": 20,
            "accuracy": 100,
            "flavorText": "The user attacks by nuzzling its electrified\ncheeks against the target. This also leaves\nthe target with paralysis.",
            "effect": "",
            "moveType": {
                "id": 13,
                "typeName": "Electric"
            }
        }
    ],
    "types": [
        {
            "id": 13,
            "typeName": "Electric"
        }
    ],
    "generations": [
        "Generation I",
        "Generation II",
        "Generation III",
        "Generation IV",
        "Generation V",
        "Generation VI"
    ],
    "versions": [
        "red-blue",
        "yellow",
        "gold-silver",
        "crystal",
        "ruby-sapphire",
        "emerald",
        "firered-leafgreen",
        "colosseum",
        "xd",
        "diamond-pearl",
        "platinum",
        "heartgold-soulsilver",
        "black-white",
        "black-2-white-2",
        "x-y",
        "omega-ruby-alpha-sapphire"
    ],
    "images": {
        "gifs": [
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-2.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-3.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-f.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-4.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-5.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-f-3.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-f-2.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-f-5.gif",
            "https://shella935.blob.core.windows.net/pokemon-gifs/pikachu-f-4.gif"
        ],
        "high-fidelity": [
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25-rock-star.png",
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25-pop-star.png",
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25-libre.png",
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25-phd.png",
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25-belle.png",
            "https://shella935.blob.core.windows.net/pokemon-high-fidelity/25.png"
        ],
        "icons": [
            "https://shella935.blob.core.windows.net/pokemon-icons/25-rock-star.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25-cosplay.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25-pop-star.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25-libre.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25-phd.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25-belle.png",
            "https://shella935.blob.core.windows.net/pokemon-icons/25.png",
            "https://shella935.blob.core.windows.net/pokemon-icons-right/25-popstar.png",
            "https://shella935.blob.core.windows.net/pokemon-icons-right/25-belle.png",
            "https://shella935.blob.core.windows.net/pokemon-icons-old/25.png"
        ],
        "official-artwork": [
            "https://shella935.blob.core.windows.net/pokemon-official-artwork/25.png"
        ],
        "sprites": [
            "https://shella935.blob.core.windows.net/pokemon-sprites/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-back/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-shiny/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-model/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-female/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-shiny-female/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-back-shiny/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-back-female/25.png",
            "https://shella935.blob.core.windows.net/pokemon-sprites-back-shiny-female/25.png"
        ]
    }
}

class Scratch {

    _PHYSICAL_MOVES = [
        "Normal",
        "Fighting",
        "Flying",
        "Ground",
        "Rock",
        "Bug",
        "Ghost",
        "Poison",
        "Steel",
    ];
    _SPECIAL_MOVES = [
        "Water",
        "Grass",
        "Fire",
        "Ice",
        "Electric",
        "Psychic",
        "Dragon",
        "Dark",
    ];


    // move comes from https://steele-pokedex.azurewebsites.net/api/Pokemon/bulbasaur
    getAttack(pokemon: any, move: any): number {
        let base = this._PHYSICAL_MOVES.includes(move.moveType.typeName)
            ? pokemon.baseAttack
            : pokemon.baseSpecialAttack;
        console.log(base);

        let attack = 5 + base * 0.02 * pokemon.level;

        return attack;
    };

    getDefense = this.getAttack;

    getAttackDefenseLimitAdjusted(you: any, opponent: any, move: any) {
        let attack = this.getAttack(you, move);
        let defense = this.getDefense(opponent, move);
        if (attack > 255 || defense > 255) {
            attack = Math.floor(attack / 4)
            defense = Math.floor(defense / 4);
        }
        return { attack, defense }
    }

    getStab(pokemon: any, move: any) {
        const filteredArray = pokemon.types.filter((type: any) => type.id === move.moveType.id);
        return filteredArray.length === 1 ? 1.5 : 1
    }

    getRandom = function (damageNoRandom: any, first = 217, last = 255) {
        let random = 1;
        if (damageNoRandom === 1) {
            return random;
        }

        const lengthRange = (last - first) + 1;
        const sumRange = lengthRange * (first + last) / 2;
        const avgRange = sumRange / lengthRange;

        random = Math.floor(avgRange / 255);
        return random;
    }
}

const scratch = new Scratch();

let attack = scratch.getAttack(
    pokemon,
    pokemon.moves[0]
)

let defense = scratch.getAttack(
    opponent,
    opponent.moves[0]
)

let stab = scratch.getStab(pokemon, pokemon.moves[0])
let stab_with_muliplier = scratch.getStab(pokemon, pokemon.moves[12])

let random_ = scratch.getRandom(9);


console.log(attack);
console.log(defense);
console.log(stab);
console.log(stab_with_muliplier);
console.log(random_);