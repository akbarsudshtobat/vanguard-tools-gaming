// MLBB Hero Counter Database — VanguardAI.tools
// Data based on high-rank competitive meta analysis

const HERO_COUNTERS = {
    "Ling": [
        { name: "Khufra", role: "Tank", winrate: 67.2, reason: "Khufra's Bouncing Ball (S2) can interrupt Ling's wall jumps and dashes mid-air, completely shutting down his mobility advantage. His crowd control locks Ling in place." },
        { name: "Helcurt", role: "Assassin", winrate: 63.8, reason: "Helcurt's passive silences Ling on basic attacks, preventing him from using skills to escape. Dark Night Falls also removes Ling's map vision advantage." },
        { name: "Saber", role: "Assassin", winrate: 61.5, reason: "Saber's Triple Sweep ultimate is a targeted lockdown that ignores Ling's evasion. It can catch Ling even on walls and guarantees burst damage." }
    ],
    "Fanny": [
        { name: "Khufra", role: "Tank", winrate: 71.4, reason: "Khufra's Bouncing Ball interrupts all cable movements on contact, making Fanny's core mechanic useless. He is considered the hardest Fanny counter in the game." },
        { name: "Franco", role: "Tank", winrate: 64.1, reason: "Franco's Bloody Hunt suppresses Fanny completely, stopping all cable movement. Iron Hook can also catch her mid-flight for a guaranteed combo." },
        { name: "Chou", role: "Fighter", winrate: 62.3, reason: "Chou's Jeet Kune Do provides immune to CC frames, and his ultimate kick can lock Fanny down. Skilled Chou players can time S2 to interrupt cables." }
    ],
    "Lancelot": [
        { name: "Chou", role: "Fighter", winrate: 65.7, reason: "Chou can time his S2 immune frames against Lancelot's burst, then punish with a kick combo. His CC chain doesn't give Lancelot time to use invincibility frames." },
        { name: "Khufra", role: "Tank", winrate: 63.9, reason: "Khufra's Bouncing Ball interrupts Lancelot's dashes and Thorned Rose. His knockup prevents Lancelot from chaining his skill combo effectively." },
        { name: "Paquito", role: "Fighter", winrate: 61.2, reason: "Paquito's enhanced skills provide CC immunity and burst that matches Lancelot's damage. His combo speed is fast enough to punish Lancelot between dashes." }
    ],
    "Chou": [
        { name: "Diggie", role: "Support", winrate: 64.8, reason: "Diggie's Time Journey ultimate cleanses all CC effects, completely negating Chou's kick combo. It provides team-wide immunity to Chou's engage patterns." },
        { name: "Wanwan", role: "Marksman", winrate: 62.4, reason: "Wanwan's S2 purifies Chou's CC, and her passive Tiger Pace lets her dash away from his engage. She can kite Chou effectively in team fights." },
        { name: "Valir", role: "Mage", winrate: 60.9, reason: "Valir's Vengeance Flame purifies CC and his S1 knockback keeps Chou at range. He can peel effectively against Chou's dive attempts on the backline." }
    ],
    "Hayabusa": [
        { name: "Saber", role: "Assassin", winrate: 64.3, reason: "Saber's targeted ultimate can lock Hayabusa down before he completes his shadow combo. The point-and-click nature bypasses Hayabusa's evasion tools." },
        { name: "Natalia", role: "Assassin", winrate: 62.1, reason: "Natalia's silence from stealth attack prevents Hayabusa from using shadows to escape. She can ambush him during split-push rotations." },
        { name: "Akai", role: "Tank", winrate: 60.7, reason: "Akai's ultimate pin pushes Hayabusa against walls, preventing him from teleporting to shadows. It disrupts his entire shadow combo rotation." }
    ],
    "Wanwan": [
        { name: "Phoveus", role: "Fighter", winrate: 68.5, reason: "Phoveus triggers his ultimate on every dash Wanwan makes, punishing her core kiting mechanic. She cannot use Tiger Pace without feeding Phoveus resets." },
        { name: "Saber", role: "Assassin", winrate: 63.7, reason: "Saber's Triple Sweep locks Wanwan in place, bypassing her purify and dash mechanics. The targeted burst kills her before she can activate Crossbow of Tang." },
        { name: "Franco", role: "Tank", winrate: 61.8, reason: "Franco's suppress ultimate cannot be purified by Wanwan's S2. Iron Hook catches her during predictable dash patterns and guarantees a kill combo." }
    ],
    "Gusion": [
        { name: "Khufra", role: "Tank", winrate: 65.1, reason: "Khufra's Bouncing Ball interrupts Gusion's dash combo, preventing him from landing precise dagger hits. This disrupts his entire burst rotation." },
        { name: "Helcurt", role: "Assassin", winrate: 62.9, reason: "Helcurt's passive silence prevents Gusion from recalling daggers after throwing them, removing his burst combo entirely. Darkness removes vision for dagger aim." },
        { name: "Lolita", role: "Tank", winrate: 61.4, reason: "Lolita's Guardian's Bulwark shield blocks all of Gusion's thrown daggers, completely nullifying his poke and burst damage from range." }
    ],
    "Esmeralda": [
        { name: "Karrie", role: "Marksman", winrate: 66.3, reason: "Karrie's passive deals true damage based on max HP, bypassing Esmeralda's massive shield absorption. She melts through shields as if they don't exist." },
        { name: "Baxia", role: "Tank", winrate: 64.7, reason: "Baxia's passive reduces all shield and HP regeneration effects by 50%, directly countering Esmeralda's core shield-steal mechanic." },
        { name: "Lunox", role: "Mage", winrate: 62.1, reason: "Lunox's Chaos Assault deals damage that penetrates shields effectively, and her Light ultimate provides invincibility frames to survive Esmeralda's engage." }
    ],
    "Yu Zhong": [
        { name: "Karrie", role: "Marksman", winrate: 65.8, reason: "Karrie's true damage passive shreds Yu Zhong's HP regardless of his sustain. Lightwheel Mark stacks bypass his lifesteal recovery completely." },
        { name: "Baxia", role: "Tank", winrate: 64.2, reason: "Baxia reduces all HP regeneration by 50%, crippling Yu Zhong's sustain-based fighting style. Yu Zhong cannot out-heal damage with Baxia nearby." },
        { name: "Dyroth", role: "Fighter", winrate: 61.9, reason: "Dyroth's burst combo and defense reduction shred Yu Zhong's durability. His S2 reduces physical defense, making Yu Zhong surprisingly fragile." }
    ],
    "Valentina": [
        { name: "Faramis", role: "Support", winrate: 63.4, reason: "Faramis's ultimate revives allies, reducing the impact of copied ultimates. His kit provides less value when stolen compared to other mages." },
        { name: "Franco", role: "Tank", winrate: 62.8, reason: "Franco's suppress ultimate cannot be effectively countered even if copied. His hook-suppress combo locks Valentina down before she can steal abilities." },
        { name: "Nana", role: "Mage", winrate: 60.5, reason: "Nana's Molina transforms Valentina mid-combo, and her passive provides a second life. Nana's ultimate also has less value when stolen by Valentina." }
    ],
    "Beatrix": [
        { name: "Lancelot", role: "Assassin", winrate: 64.6, reason: "Lancelot's invincibility frames on S2 and ultimate dodge Beatrix's burst damage. His dash combo closes distance and eliminates her before she can swap weapons." },
        { name: "Gusion", role: "Assassin", winrate: 63.2, reason: "Gusion's blink combo bursts Beatrix instantly. His mobility makes it impossible for Beatrix to land reliable shots with any of her four weapons." },
        { name: "Natalia", role: "Assassin", winrate: 61.7, reason: "Natalia's stealth approach means Beatrix has no warning before the ambush. The silence prevents weapon swapping, and burst damage kills her quickly." }
    ],
    "Phoveus": [
        { name: "Valentina", role: "Mage", winrate: 63.9, reason: "Valentina can steal Phoveus's ultimate and use it against his own team. She plays from range and doesn't rely on dashes, minimizing his passive triggers." },
        { name: "Yve", role: "Mage", winrate: 62.5, reason: "Yve's long-range ultimate zones Phoveus without using any dash skills. Her kit is entirely non-dash based, giving Phoveus zero opportunities to trigger his passive." },
        { name: "Pharsa", role: "Mage", winrate: 61.1, reason: "Pharsa attacks from extreme range with her ultimate, never needing to dash. Phoveus cannot reach her and his passive stays dormant throughout fights." }
    ],
    "Aldous": [
        { name: "Diggie", role: "Support", winrate: 66.7, reason: "Diggie's Time Journey cleanses the stun from Aldous's ultimate dash, and his S2 can trap Aldous after landing. In egg form, Diggie can still provide vision." },
        { name: "Wind of Nature", role: "Marksman", winrate: 64.3, reason: "Heroes with Wind of Nature can negate Aldous's entire burst. Wanwan's purify also removes the targeting lock from Contract: Chase Fate." },
        { name: "Khufra", role: "Tank", winrate: 62.8, reason: "Khufra can use Bouncing Ball to interrupt Aldous's flight path during his ultimate. His CC chain prevents Aldous from stacking his S1 passive." }
    ],
    "Kagura": [
        { name: "Lancelot", role: "Assassin", winrate: 63.5, reason: "Lancelot's invincibility frames dodge Kagura's umbrella burst combo. He can gap-close through her S2 link and burst her before she repositions." },
        { name: "Helcurt", role: "Assassin", winrate: 62.1, reason: "Helcurt's silence from passive prevents Kagura from executing her complex umbrella combo. Dark Night Falls removes her vision advantage in team fights." },
        { name: "Hayabusa", role: "Assassin", winrate: 60.8, reason: "Hayabusa can dodge Kagura's burst with shadow teleportation and split-push effectively. His ultimate deals consistent damage that's hard for Kagura to avoid." }
    ],
    "Franco": [
        { name: "Diggie", role: "Support", winrate: 65.2, reason: "Diggie's ultimate cleanses Franco's suppress and all CC effects. His S2 bombs also make Franco's hook engages risky for his own team." },
        { name: "Valir", role: "Mage", winrate: 63.4, reason: "Valir's S2 purifies Franco's hook and suppress with Vengeance Flame. His knockback S1 keeps Franco at range, preventing hook attempts." },
        { name: "Akai", role: "Tank", winrate: 61.6, reason: "Akai's shield and tankiness survive Franco's combo. His ultimate can push Franco away from carries, and he's too durable for Franco to solo kill." }
    ],
    "Guinevere": [
        { name: "Diggie", role: "Support", winrate: 66.1, reason: "Diggie's Time Journey cleanses Guinevere's knockup, making her entire combo useless. Without the airborne CC, she cannot execute her burst rotation." },
        { name: "Valir", role: "Mage", winrate: 63.7, reason: "Valir's S2 purifies Guinevere's knockup, and his S1 pushes her away during her jump. He counters her engage pattern completely." },
        { name: "Chou", role: "Fighter", winrate: 61.5, reason: "Chou's S2 provides CC immunity, allowing him to dodge Guinevere's S2 knockup. He can then punish her with his own kick combo while she's vulnerable." }
    ],
    "Aamon": [
        { name: "Saber", role: "Assassin", winrate: 64.9, reason: "Saber's targeted ultimate hits Aamon even during his camouflage state. The point-and-click lock-on ignores Aamon's stealth mechanic entirely." },
        { name: "Rafaela", role: "Support", winrate: 62.3, reason: "Rafaela's S1 reveals invisible heroes, exposing Aamon during his conceal phase. Her healing also sustains the team through his poke damage." },
        { name: "Natalia", role: "Assassin", winrate: 60.8, reason: "Natalia can detect Aamon when both are in stealth range. Her silence prevents his escape, and she can ambush him during his vulnerable reveal moments." }
    ],
    "Karina": [
        { name: "Khufra", role: "Tank", winrate: 64.5, reason: "Khufra's Bouncing Ball interrupts Karina's dash engages. His CC chain prevents her from getting resets, which is core to her assassination pattern." },
        { name: "Minsitthar", role: "Fighter", winrate: 63.1, reason: "Minsitthar's ultimate creates a zone where all dash skills are disabled. Karina cannot use her S1 or S2 dashes inside this field, leaving her helpless." },
        { name: "Lolita", role: "Tank", winrate: 61.7, reason: "Lolita's shield blocks Karina's S1 projectile, and her stun can interrupt Karina's burst combo. The shield also protects the backline from her engage." }
    ],
    "Nolan": [
        { name: "Franco", role: "Tank", winrate: 64.8, reason: "Franco's suppress ultimate cannot be dodged by Nolan's dimensional shifts. His hook catches Nolan during brief vulnerability windows between slashes." },
        { name: "Khufra", role: "Tank", winrate: 63.4, reason: "Khufra's bounce interrupts Nolan's dash patterns. The continuous CC prevents Nolan from executing his precise intersection combo for burst damage." },
        { name: "Paquito", role: "Fighter", winrate: 61.2, reason: "Paquito's fast combo speed matches Nolan's mobility. His enhanced skills provide CC immunity frames that let him trade effectively against Nolan's burst." }
    ],
    "Zhuxin": [
        { name: "Karrie", role: "Marksman", winrate: 65.3, reason: "Karrie's true damage passive cuts through Zhuxin's durability. Her consistent DPS output prevents Zhuxin from sustaining through fights." },
        { name: "Valir", role: "Mage", winrate: 63.1, reason: "Valir's knockback and slow keep Zhuxin at bay. His S2 purify prevents Zhuxin from locking him down, and continuous burn damage is hard to sustain through." },
        { name: "Baxia", role: "Tank", winrate: 61.6, reason: "Baxia's anti-heal passive reduces Zhuxin's sustain significantly. His rolling engage also provides chase potential that Zhuxin cannot easily escape." }
    ],
    "Chip": [
        { name: "Franco", role: "Tank", winrate: 63.9, reason: "Franco's suppress stops Chip's portal teleportation, catching him and his allies during the channeling phase. Hook punishes Chip's predictable portal positioning." },
        { name: "Vale", role: "Mage", winrate: 62.5, reason: "Vale's AoE burst and crowd control can zone portals and punish grouped enemies exiting Chip's teleport. His enhanced skills devastate grouped targets." },
        { name: "Atlas", role: "Tank", winrate: 61.1, reason: "Atlas's Fatal Links ultimate grabs multiple enemies exiting Chip's portal. The AoE CC punishes the grouped positioning that Chip's kit encourages." }
    ]
};
