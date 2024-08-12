// Prize pools
const commonItems = [
    { name: "Flannel Shirt", rarity: "Common", stats: "Defense: 12, Slots: 1, Quality: 3" },
    { name: "Leather Jacket", rarity: "Common", stats: "Defense: 13, Slots: 2, Quality: 3" },
    { name: "Some Nerd's Chain Armor", rarity: "Common", stats: "Defense: 14, Slots: 3, Quality: 5, Special: Reduce combat speed by 5" },
    { name: "Hunting Bow", rarity: "Common", stats: "Damage: d6, Slots: 2, Hands: 2, Quality: 3" },
    { name: "Trashcan Lid", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Motorcycle Helmet", rarity: "Common", stats: "Defense: +1, Slots: 1, Quality: 1" },
    { name: "Heavy Stick", rarity: "Common", stats: "Damage: d6 blunt, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Weeb Katana", rarity: "Common", stats: "Damage: d8 slashing, Slots: 2, Hands: 1, Quality: 3" },
    { name: "Construction Maul", rarity: "Common", stats: "Damage: d10 blunt, Slots: 3, Hands: 2, Quality: 3" },
    { name: "Backpack", rarity: "Common", stats: "Special: -3 slots" },
    { name: "Torch", rarity: "Common", stats: "Special: Provides light" },
    { name: "Regenerating Clothing", rarity: "Common", stats: "Special: Heals itself each night if not fully destroyed, Quality: 3" },
    { name: "Crossbow", rarity: "Common", stats: "Damage: d8, Slots: 3, Hands: 2, Quality: 3" },
    { name: "Sling", rarity: "Common", stats: "Damage: d4, Slots: 1, Hands: 1, Quality: 3" },
    { name: "Laborer Token", rarity: "Common", stats: "Special: A laborer will follow you for 1 day, holding up to 6 slots of items" }
];

const uncommonItems = [
    { name: "Thieves Knife", rarity: "Uncommon", stats: "Damage: d6 piercing, Slots: 1, Hands: 1, Quality: 3, Bonus: +1 to Dexterity" },
    { name: "Fireman's Axe", rarity: "Uncommon", stats: "Damage: d10 slashing, Slots: 3, Hands: 2, Quality: 3, Special: Freeze enemy in place for 1 round on hit" },
    { name: "Very Sharp Shovel", rarity: "Uncommon", stats: "Damage: d8 slashing, Slots: 2, Hands: 1, Quality: 3, Special: Advantage on damage rolls with this weapon" },
    { name: "Police Vest of Hardening", rarity: "Uncommon", stats: "Defense: 15, Slots: 4, Quality: 10, Special: Negate one attack that hits you at the cost of 1 quality" },
    { name: "Full Speed Bomb Disposal Suit", rarity: "Uncommon", stats: "Defense: 16, Slots: 5, Quality: 7, Special: Reduce combat speed by 15. Negate speed penalty for 1 round at the cost of 1 quality" },
    { name: "Aether Wrist Rocket", rarity: "Uncommon", stats: "Damage: d6, Slots: 2, Hands: 2, Quality: 3, Special: Does not consume ammo" },
    { name: "Alchemist Token", rarity: "Uncommon", stats: "Special: Gain a single alchemist henchman to create up to 5 potions. You will need to supply ingredients." },
    { name: "Hunger Cry Knife", rarity: "Uncommon", stats: "Damage: d6 slashing, Slots: 1, Hands: 1, Quality: 3, Special: Gain 50% more ingredients when using this knife" },
    { name: "Facebreakers", rarity: "Uncommon", stats: "Damage: d8 blunt, Slots: 1, Hands: 1, Quality: 3, Special: Unarmed attacks only" },
    { name: "Golf Bag", rarity: "Uncommon", stats: "Special: -4 slots" },
    { name: "Booze", rarity: "Uncommon", stats: "Special: Drink to heal d4 hp. Reduce wisdom by 1 until next rest" },
    { name: "Spellbook of Cure", rarity: "Uncommon", stats: "Heal Wisdom(d4) damage at melee range" },
    { name: "Spellbook of Blast", rarity: "Uncommon", stats: "Deal Intelligence(d6) damage at range" },
    { name: "Spellbook of Fate", rarity: "Uncommon", stats: "Gain advantage on your next roll" },
    { name: "Spellbook of Snare", rarity: "Uncommon", stats: "Reduce the speed of a single target to 10 ft for Intelligence rounds" },
    { name: "Spellbook of Counterspell", rarity: "Uncommon", stats: "Make an opposed Intelligence roll vs caster of a spell. If you win, their spell is canceled" },
    { name: "Spellbook of Gate", rarity: "Uncommon", stats: "Teleport to the nearest safe zone" },
    { name: "Spellbook of Haste", rarity: "Uncommon", stats: "A single target within 40 ft gains an extra attack for Intelligence rounds" },
    { name: "Spellbook of Arcane Eye", rarity: "Uncommon", stats: "Create a fast-moving magical eye that hovers around at your command. You share enemy aggression" },
    { name: "Spellbook of Feign Death", rarity: "Uncommon", stats: "Fall to the ground unmoving. All enemies will treat you as if you were dead" }
];

const rareItems = [
    { name: "Lizard-Skin Catsuit", rarity: "Rare", stats: "Defense: 12, Slots: 1, Quality: 5, Special: Regenerate 1 hp per round" },
    { name: "Gravity Bow", rarity: "Rare", stats: "Damage: d8, Slots: 2, Hands: 2, Quality: 4" },
    { name: "Archmage Bathrobe", rarity: "Rare", stats: "Not armor. Special: Can use spellbooks one additional time" },
    { name: "Fanny Pack of Hauling", rarity: "Rare", stats: "Special: -5 slots" },
    { name: "Royal Crown", rarity: "Rare", stats: "Special: Non-aggressive NPCs will treat you as royalty. Bonus: +2 Charisma" },
    { name: "Knockout Hammer", rarity: "Rare", stats: "Damage: d6, Slots: 2, Hands: 1, Quality: 3, Special: If max damage is rolled, knock enemy out for Strength rounds" },
    { name: "Cleaving Doppelhander", rarity: "Rare", stats: "Damage: d10, Slots: 3, Hands: 2, Quality: 3, Special: d2 chance to roll damage a second time and add them together" },
    { name: "Plate Carrier of the Mage Hater", rarity: "Rare", stats: "Defense: 15, Slots: 4, Quality: 7, Special: Enemies within 30 ft have -2 Intelligence" }
];

// Probabilities
const probabilities = {
    common: { common: 70, uncommon: 20, rare: 5, spell: 5 },
    uncommon: { common: 0, uncommon: 70, rare: 20, spell: 10 },
    rare: { common: 0, uncommon: 0, rare: 100, spell: 0 },
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pullGacha(tokenType) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let prize = "";
    let upgraded = false;
    
    const isSpell = randomNumber <= probabilities[tokenType].spell;
    
    if (tokenType === 'common') {
        if (isSpell) {
            prize = getRandomItem(commonSpells);
        } else {
            if (randomNumber <= probabilities.common.common) {
                prize = getRandomItem(commonItems);
            } else if (randomNumber <= probabilities.common.common + probabilities.common.uncommon) {
                prize = getRandomItem(uncommonItems);
                upgraded = true;
            } else if (randomNumber <= probabilities.common.common + probabilities.common.uncommon + probabilities.common.rare) {
                prize = getRandomItem(rareItems);
                upgraded = true;
            } else {
                prize = getRandomItem(commonSpells);
                upgraded = true;
            }
        }
    } else if (tokenType === 'uncommon') {
        if (isSpell) {
            prize = getRandomItem(uncommonSpells);
        } else {
            if (randomNumber <= probabilities.uncommon.common) {
                prize = getRandomItem(commonItems);
            } else if (randomNumber <= probabilities.uncommon.common + probabilities.uncommon.uncommon) {
                prize = getRandomItem(uncommonItems);
            } else if (randomNumber <= probabilities.uncommon.common + probabilities.uncommon.uncommon + probabilities.uncommon.rare) {
                prize = getRandomItem(rareItems);
                upgraded = true;
            } else {
                prize = getRandomItem(uncommonSpells);
                upgraded = true;
            }
        }
    } else if (tokenType === 'rare') {
        if (isSpell) {
            prize = getRandomItem(rareSpells);
        } else {
            prize = getRandomItem(rareItems);
        }
    }
    
    if (prize) {
        const prizeDetails = formatPrize(prize, upgraded);
        document.getElementById('gacha-slot').innerText = prize.name;
        document.getElementById('result').innerText = prizeDetails;
    } else {
        document.getElementById('result').innerText = "Try again!";
    }
}

function formatPrize(prize, upgraded) {
    let details = `You won: ${prize.name}, ${prize.stats || prize.effect || prize.special || "No additional details"}`;
    if (upgraded) details += ` (Upgraded!)`;
    return details;
}
