// gacha.js

// Define the pool of possible items for each group
const commonItems = [
    { name: "Common Sword", rarity: "Common" },
    { name: "Iron Armor", rarity: "Common" },
    { name: "Wooden Shield", rarity: "Common" }
];

const uncommonItems = [
    { name: "Silver Dagger", rarity: "Uncommon" },
    { name: "Magic Ring", rarity: "Uncommon" },
    { name: "Leather Armor", rarity: "Uncommon" }
];

const rareItems = [
    { name: "Golden Shield", rarity: "Rare" },
    { name: "Dragon Helm", rarity: "Rare" },
    { name: "Legendary Sword of Light", rarity: "Rare" }
];

const spellItems = [
    { name: "Fireball Scroll", rarity: "Spell" },
    { name: "Healing Touch", rarity: "Spell" },
    { name: "Invisibility Cloak", rarity: "Spell" }
];

// Function to pull from the gacha machine
function pullGacha(tokenType) {
    let selectedGroup;
    const groupChance = Math.random();

    if (tokenType === 'common') {
        // Common Coin: 60% Common, 30% Uncommon, 10% Rare
        if (groupChance < 0.6) {
            selectedGroup = commonItems;
        } else if (groupChance < 0.9) {
            selectedGroup = uncommonItems;
        } else {
            selectedGroup = rareItems;
        }
    } else if (tokenType === 'uncommon') {
        // Uncommon Coin: 0% Common, 60% Uncommon, 40% Rare
        if (groupChance < 0.6) {
            selectedGroup = uncommonItems;
        } else {
            selectedGroup = rareItems;
        }
    } else if (tokenType === 'rare') {
        // Rare Coin: 100% Rare
        selectedGroup = rareItems;
    } else if (tokenType === 'spell') {
        // Spell Coin: 100% Spell
        selectedGroup = spellItems;
    }

    // Randomly select an item from the chosen group
    const selectedItem = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];

    // Display the result
    document.getElementById("result").innerHTML = 
        `You pulled: <strong>${selectedItem.name}</strong> (${selectedItem.rarity})`;
}
