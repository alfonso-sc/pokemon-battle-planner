# Objective

As a team, design and build an SPA that helps the user plan which pokemon to use in a battle.

# Requirements

* User should be able to specify their top 6 pokemon.  This will include an API search to find the relevant pokemon record, but also include some details specific to the user, such as their pokemon's level and their 4 trained moves.
* User should be able to do the same as above, but for the opponent's pokemon.  Opponent's pokemon don't need to have any moves selected.
* The app should automatically calculate the best pokemon to match up against each of the opponent's pokemon, taking into account each pokemon's moves and how much damage they could do against the opponent.
* The app should use responsive design, and should be comfortable to use on mobile and pcs alike.
* The app should generally adhere to [wireframe](https://wireframe.cc/EQmGVj).  Be prepared to explain and justify any major deviations.
* As a group, come up with an additional feature, or enhancement to an existing feature.  This will need to be pitched to instructors and implemented in timeframe
* Use a kanban board to track tasks and progress.

# Specifications

* User data does not need to be persisted. It is okay if a page refresh resets the user's entered data.
* A Pokemon's move damage should be calculated according to the [Generation I formula](https://bulbapedia.bulbagarden.net/wiki/Damage#Generation_I)
	* Since this is for estimating rather than simulating, assume no criticals, and the random number to be the average of the random range.
	* Attack and defense are calculated based on the pokemon's relevant base stats. They start with a value of 5 at level 1, and increase by 2% of the base stat for each level after.
	* For simplicity, ignore any per-move exceptions.