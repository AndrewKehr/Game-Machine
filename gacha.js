// Prize pools
const commonItems = [
    { name: "Flannel Shirt", rarity: "Common", stats: "Defense: 12, Slots: 1, Quality: 3" },
    { name: "Leather Jacket", rarity: "Common", stats: "Defense: 13, Slots: 2, Quality: 3" },
    { name: "Some Nerd's Chain Armor", rarity: "Common", stats: "Defense: 14, Slots: 3, Quality: 5, Special: Reduce combat speed by 5" },
    { name: "Hunting Bow", rarity: "Common", stats: "Damage: d6, Slots: 2, Hands: 2, Quality: 3" },
    { name: "Trashcan Lid", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Trashcan Lid", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Trashcan Lid", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Metal Collander", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Metal Collander", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Heavy Stick", rarity: "Common", stats: "Damage: d6 blunt, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Heavy Stick", rarity: "Common", stats: "Damage: d6 blunt, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Weeb Katana", rarity: "Common", stats: "Damage: d8 slashing, Slots: 2, Hands: 1, Quality: 3" },
    { name: "Construction Maul", rarity: "Common", stats: "Damage: d10 blunt, Slots: 3, Hands: 2, Quality: 3" },
    { name: "Backpack", rarity: "Common", stats: "-3 slots" },
    { name: "Torch", rarity: "Common", stats: "Provides light" },
    { name: "Torch", rarity: "Common", stats: "Provides light" },
    { name: "Torch", rarity: "Common", stats: "Provides light" },
    { name: "Torch", rarity: "Common", stats: "Provides light" },
    { name: "Regenerating Clothing", rarity: "Common", stats: "Not armor, but it heals itself each night if not fully destroyed, Quality: 3" },
    { name: "Crossbow", rarity: "Common", stats: "Damage: d8, Slots: 3, Hands: 2, Quality: 3" },
    { name: "Sling", rarity: "Common", stats: "Damage: d4, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Sling", rarity: "Common", stats: "Damage: d4, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Sling", rarity: "Common", stats: "Damage: d4, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Laborer Token", rarity: "Common", stats: "A laborer will follow you for 1 day, holding up to 6 slots of items" },
    { name: "Goblin Tattoo", rarity: "Common", stats: "Goblins do not treat you as an enemy immediately.  Elves hate you." },
    { name: "Elf Tattoo", rarity: "Common", stats: "Elves do not treat you as an enemy immediately.  Fairies hate you." },
    { name: "Fairie Tattoo", rarity: "Common", stats: "Fairies do not treat you as an enemy immediately.  Goblins hate you." },
    { name: "Undead Tattoo", rarity: "Common", stats: "Undead do not immediately attack.  They will still attack, but you have a few rounds." },
    { name: "Red Poker chip", rarity: "Uncommon", stats: "It's a red coin for the loot machine.  Put it in and see what happens." },
    { name: "Hot slice of your favorite pizza", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "Cheddar Bay Biscuit", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "Buffalo sized buffalo chicken wing", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "A taco.  I don't know why it's pink", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "A Krispy Kreme Glazer", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "A chicken shawarma sandwich", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "Half of a ribeye, on a fork", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "A single stick of Three-Course Dinner Chewing Gum, which tastes like tomato soup, roast beef and baked potato, and blueberry pie and ice cream.", rarity: "Common", stats: "Feeds you for an entire day!" },
    { name: "Leftovers from someone's fridge.  It doesn't look great at all.", rarity: "Common", stats: "Feeds you for an entire day!" }
];

const uncommonItems = [
    { name: "Thieves Knife", rarity: "Uncommon", stats: "Damage: d6 piercing, Slots: 1, Hands: 1, Quality: 3.  +1 to Dex" },
    { name: "Swole", rarity: "Uncommon", stats: "Damage: d8 blunt, Slots: 2, Hands: 1, Quality: 3.  +1 to Str" },
    { name: "Tough Love", rarity: "Uncommon", stats: "Damage: d6 blunt, Slots: 1, Hands: 1, Quality: 3.  +1 to Con" },
    { name: "Dweeb Knife", rarity: "Uncommon", stats: "Damage: d6 piercing, Slots: 1, Hands: 1, Quality: 3.  +1 to Int" },
    { name: "Brain Blender", rarity: "Uncommon", stats: "Damage: d6 piercing, Slots: 1, Hands: 1, Quality: 3.  +1 to Wis" },
    { name: "Sparkley Dagger", rarity: "Uncommon", stats: "Damage: d6 piercing, Slots: 1, Hands: 1, Quality: 3.  +1 to Cha" },
    { name: "Fireman's Axe", rarity: "Uncommon", stats: "Damage: d10 slashing, Slots: 3, Hands: 2, Quality: 3, Set enemy on fire, dealing an additional 1d4 damage next round" },
    { name: "Very Sharp Shovel", rarity: "Uncommon", stats: "Damage: d8 slashing, Slots: 2, Hands: 1, Quality: 3, Advantage on damage rolls with this weapon" },
    { name: "Carhart Jacket", rarity: "Uncommon", stats: "Defense: 12, Slots: 1, Quality: 3, Elemental damage to you is reduced by 2" },
    { name: "Harry Dresden's duster", rarity: "Uncommon", stats: "Defense: 13, Slots: 2, Quality: 3, +2 to stat defense against spells" },
    { name: "Real Chain Mail", rarity: "Uncommon", stats: "Defense: 14, Slots: 3, Quality: 3, Physical damage to you is reduced by 2" },
    { name: "Police Vest of Hardening", rarity: "Uncommon", stats: "Defense: 15, Slots: 4, Quality: 3, Negate one attack that hits you at the cost of 1 quality" },
    { name: "Full Speed Bomb Disposal Suit", rarity: "Uncommon", stats: "Defense: 16, Slots: 5, Quality: 10, Reduce combat speed by 15. Negate speed penalty for 1 round at the cost of 1 quality" },
    { name: "Aether Wrist Rocket", rarity: "Uncommon", stats: "Damage: d6, Slots: 2, Hands: 2, Quality: 3, Does not consume ammo" },
    { name: "Alchemist Token", rarity: "Uncommon", stats: "Gain a single alchemist henchman to create up to 5 potions. You will need to supply ingredients." },
    { name: "Hunger Cry Knife", rarity: "Uncommon", stats: "Damage: d6 slashing, Slots: 1, Hands: 1, Quality: 3, Special: Gain 50% more ingredients when using this knife" },
    { name: "a Pair of Facebreakers", rarity: "Uncommon", stats: "Damage: d8 blunt, Slots: 1, Hands: 1, Quality: 3, Special: Unarmed attacks only" },
    { name: "Golf Bag", rarity: "Uncommon", stats: "-4 slots" },
    { name: "Riot Shield", rarity: "Uncommon", stats: "Defense: +1, Slots: 1, Quality: 2" },
    { name: "Kevlar Helmet", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 2" },
    { name: "Riot Shield", rarity: "Uncommon", stats: "Defense: +1, Slots: 1, Quality: 2" },
    { name: "Kevlar Helmet", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 2" },
    { name: "Booze", rarity: "Uncommon", stats: "Drink to heal d4 hp. Reduce wisdom by 1 until next rest" },
    { name: "Spellbook of Cure", rarity: "Uncommon", stats: "Heal one target for wis(d4) hp at melee range" },
    { name: "Spellbook of Elemental Bolt", rarity: "Uncommon", stats: "Deal int(d6) damage to a target within 30 ft" },
    { name: "Spellbook of Cure", rarity: "Uncommon", stats: "Heal one target for wis(d4) hp at melee range" },
    { name: "Spellbook of Elemental Bolt", rarity: "Uncommon", stats: "Deal int(d6) damage to a target within 30 ft" },
    { name: "Spellbook of Fate", rarity: "Uncommon", stats: "A target within 30 ft gains advantage on their next d20 roll" },
    { name: "Spellbook of Snare", rarity: "Uncommon", stats: "Reduce the speed of a single target to 10 ft for int rounds" },
    { name: "Spellbook of Counterspell", rarity: "Uncommon", stats: "Make an int roll vs caster of a spell int defense. If you win, their spell is canceled" },
    { name: "Spellbook of Gate", rarity: "Uncommon", stats: "You teleport to the nearest safe zone" },
    { name: "Spellbook of Gate", rarity: "Uncommon", stats: "You teleport to the nearest safe zone" },
    { name: "Spellbook of Haste", rarity: "Uncommon", stats: "A single target within 40 ft gains an extra attack for int rounds" },
    { name: "Spellbook of Arcane Eye", rarity: "Uncommon", stats: "Create a fast-moving magical eye that hovers around at your command for int rounds. You share agro." },
    { name: "Spellbook of Feign Death", rarity: "Uncommon", stats: "Fall to the ground unmoving. All NPCs will treat you as if you were dead" },
    { name: "Spellbook of Feign Death", rarity: "Uncommon", stats: "Fall to the ground unmoving. All NPCs will treat you as if you were dead" },
    { name: "Blue Poker chip", rarity: "Rare", stats: "It's a blue coin for the loot machine.  Put it in and see what happens." }

];

const rareItems = [
    { name: "Lizard-Skin Catsuit", rarity: "Rare", stats: "Defense: 12, Slots: 1, Quality: 5, Special: Regenerate 1 hp per round" },
    { name: "Gravity Bow", rarity: "Rare", stats: "Damage: d8, Slots: 2, Hands: 2, Quality: 4" },
    { name: "Archmage Bathrobe", rarity: "Rare", stats: "Not armor. Special: Can use spellbooks one additional time" },
    { name: "Fanny Pack of Hauling", rarity: "Rare", stats: "-5 slots" },
    { name: "Dark Blue and black shemagh", rarity: "Rare", stats: "Intimidation can be used with str instead of cha" },
    { name: "Long, flowing, black headband", rarity: "Rare", stats: "Advantage on sneaking skills" },
    { name: "Thick-skull Helmet", rarity: "Rare", stats: "+1 armor, Slots: 1, Quality: 5" },
    { name: "Pointy hat", rarity: "Rare", stats: "Advantage of spellcasting rolls targetting enemies" },
    { name: "Yusuf's Glasses", rarity: "Rare", stats: "Advantage on physical ranged attacks within 30 ft." },
    { name: "Royal Crown", rarity: "Rare", stats: "Non-aggressive NPCs will treat you as royalty." },
    { name: "Knockout Hammer", rarity: "Rare", stats: "Damage: d6, Slots: 2, Hands: 1, Quality: 3, Special: If max damage is rolled, knock the enemy out for Strength rounds" },
    { name: "Cleaving Doppelhander", rarity: "Rare", stats: "Damage: d10, Slots: 3, Hands: 2, Quality: 3, Special: d2 chance to roll damage a second time and add them together" },
    { name: "Stupid Plate Carrier", rarity: "Rare", stats: "Defense: 15, Slots: 4, Quality: 7, Special: Enemies within 30 ft have -2 Intelligence" },
    { name: "Spellbook of Succor", rarity: "Rare", stats: "Teleport yourself and all allies within 30 ft to the nearest safe zone" },
    { name: "Spellbook of Cripple", rarity: "Rare", stats: "Decrease a target's strength and dexterity by 3 for Intelligence rounds" },
    { name: "Spellbook of Word of Restoration", rarity: "Rare", stats: "Heal all allies within 30 ft wis(d6) hp and cure all ailments" },
    { name: "Spellbook of Lifetap", rarity: "Rare", stats: "Deal int damage to a target within 30 ft.  Heal self for con(d4) hp" },
    { name: "Spellbook of Panic", rarity: "Rare", stats: "One enemy within 30 ft is stricken with fear and will run at full speed away from you for int rounds" },
    { name: "Spellbook of Frenzy", rarity: "Rare", stats: "One target within 30 ft gains +2 to str, dex, con and -2 to armor bonus" },
    { name: "Spellbook of Incite", rarity: "Rare", stats: "Force one enemy within 30 ft to attack you for int rounds.  You may not retreat from this enemy else the effect is broken." },
    { name: "Spellbook of Elemental Blast", rarity: "Rare", stats: "Deal int(d6) damage to a target and all other targets within IntDefense feet of the target." },
];

const specialItems = [
    { name: "Cleric Class Guide", rarity: "Special", stats: "Permanent +2 to wis.  Can cast 'Ressurection' once ever, restoring a slain party member to full life.  You can only ever have 1 class."},
    { name: "Assassin Class Guide", rarity: "Special", stats: "Permanent +2 to dex.  If you kill an enemy using a melee sneak attack stealth is not broken.  You can only ever have 1 class."},
    { name: "Glass Cannon Class Guide", rarity: "Special", stats: "Permanent +2 to int.  Your spells use 'int*1.5' instead of 'int'.  You can only ever have 1 class."},
    { name: "Tank Class Guide", rarity: "Special", stats: "Permanent +2 to con.  You may immediately attack any enemy that misses you once per round  You can only ever have 1 class."},
    { name: "Berserker Class Guide", rarity: "Special", stats: "Permanent +2 to str.  Your melee attacks add your str bonus to damage  You can only ever have 1 class."},
    { name: "Beguiler Class Guide", rarity: "Special", stats: "Permanent +2 to cha.  You can use your charismatic wiles on hostile enemies  You can only ever have 1 class."},
    { name: "Race change Scroll", rarity: "Special", stats: "Talk to the referee after the game.  Do not mention out loud that you won this."},
    { name: "Beastlord Class Guide", rarity: "Special", stats: "If you do not have a pet.  Gain a pet immediately.  All of it's stats are equal to your HD.  It deals your HD damage per round and fights with you."},
];

function pullGacha(tokenType) {
    let selectedGroup;
    let message = ""; // Initialize message variable
    const groupChance = Math.random();

    if (tokenType === 'common') {
        // Common Coin: 90% Common, 9% Uncommon, 1% Rare
        if (groupChance < 0.9) {
            selectedGroup = commonItems;
            message = "Common coin, common item.  These things all suck.";
        } else if (groupChance < 0.99) {
            selectedGroup = uncommonItems;
            message = "Hot damn, your common coin gave you uncommon loot!";
        } else {
            selectedGroup = rareItems;
            message = "God Damn!  Your common coin upgraded to RARE loot!";
        }
    } else if (tokenType === 'uncommon') {
        // Uncommon Coin: 0% Common, 90% Uncommon, 10% Rare
        if (groupChance < 0.9) {
            selectedGroup = uncommonItems;
            message = "We put the uncommon item in the uncommon hole.";
        } else {
            selectedGroup = rareItems;
            message = "WOAH!  We put the RARE ITEM in the uncommon hole.";
        }
    } else if (tokenType === 'rare') {
        // Rare Coin: 100% Rare
        selectedGroup = rareItems;
        message = "Rare coins always give rare items.  Aren't you lucky?";
    } else if (tokenType === 'special') {
        // Special Coin: 100% Special
        selectedGroup = specialItems;
        message = "Psst.  Don't tell anyone what you got.  They'll want to take it from you.  These are super secret special items.";
    }

    // Randomly select an item from the chosen group
    const selectedItem = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];

    // Display the result
    document.getElementById("result").innerHTML = 
        `${message}<br>A small plastic egg falls into the chute at the bottom of the machine.  You open it and find: <strong>${selectedItem.name}</strong> (${selectedItem.rarity})<br>
        Stats: <strong>${selectedItem.stats}</strong>`;
}
