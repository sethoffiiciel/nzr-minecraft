// NZR Euro - monnaie custom pour recompenses de quetes (FTB Quests, etc.)
StartupEvents.registry('item', event => {
    event.create('nzr_coin')
        .displayName('§d§lNZR Coin')
        .maxStackSize(64)
        .rarity('uncommon')
        .tooltip('§7Monnaie NZR')
})
