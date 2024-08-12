// Prize pools
const commonPool = [
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

const uncommonPool = [
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
    { name: "Booze", rarity: "Uncommon", stats: "Special: Drink to heal d4 hp. Reduce wisdom by 1 until next rest" }
];

const rarePool = [
    { name: "Lizard-Skin Catsuit", rarity: "Rare", stats: "Defense: 12, Slots: 1, Quality: 5, Special: Regenerate 1 hp per round" },
    { name: "Gravity Bow", rarity: "Rare", stats: "Damage: d8, Slots: 2, Hands: 2, Quality: 4" },
    { name: "Archmage Bathrobe", rarity: "Rare", stats: "Not armor. Special: Can use spellbooks one additional time" },
    { name: "Fanny Pack of Hauling", rarity: "Rare", stats: "Special: -5 slots" },
    { name: "Royal Crown", rarity: "Rare", stats: "Special: Non-aggressive NPCs will treat you as royalty. Bonus: +2 Charisma" },
    { name: "Knockout Hammer", rarity: "Rare", stats: "Damage: d6, Slots: 2, Hands: 1, Quality: 3, Special: If max damage is rolled, knock enemy out for Strength rounds" },
    { name: "Cleaving Doppelhander", rarity: "Rare", stats: "Damage: d10, Slots: 3, Hands: 2, Quality: 3, Special: d2 chance to roll damage a second time and add them together" },
    { name: "Plate Carrier of the Mage Hater", rarity: "Rare", stats: "Defense: 15, Slots: 4, Quality: 7, Special: Enemies within 30 ft have -2 Intelligence" }
];

// Get a random prize from the pool
function getRandomPrize(pool) {
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
}

// Handle gacha pull
function pullGacha(coinType) {
    let prizePool;

    if (coinType === 'common') {
        prizePool = commonPool;
    } else if (coinType === 'uncommon') {
        prizePool = uncommonPool;
    } else if (coinType === 'rare') {
        prizePool = rarePool;
    } else {
        alert('Invalid coin type!');
        return;
    }

    // Determine if the prize should be upgraded
    let prize = getRandomPrize(prizePool);
    let upgradeChance = 0.1; // 10% chance to upgrade

    if (coinType === 'common' && Math.random() < upgradeChance) {
        prize = getRandomPrize(uncommonPool);
        if (Math.random() < upgradeChance) {
            prize = getRandomPrize(rarePool);
        }
    } else if (coinType === 'uncommon' && Math.random() < upgradeChance) {
        prize = getRandomPrize(rarePool);
    }

    displayPrize(prize);
}

// Display the prize
function displayPrize(prize) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>${prize.name}</strong><br>Rarity: ${prize.rarity}<br>Stats
