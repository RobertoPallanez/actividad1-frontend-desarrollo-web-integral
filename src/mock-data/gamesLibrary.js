const gamesLibrary = [
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        platform: 'Nintendo Switch',
        platformIcon: 'https://www.svgrepo.com/show/500713/switch-filled.svg',
        imageUrl: 'https://imgproxy.eneba.games/Xbw_7XKoJGOx1jhUPtSABr5p53GJNuwCDJ4cqunJj_s/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy81/dmVIMHdoVHdXRTJ2/bTVyeDVMcnVobGZk/OGlWd2xEMHNBMGtN/d3o0cHpRLmpwZWc',
        availability: 'GLOBAL',
        price: 28.71,
        id: 2958493047,
        tags: ['best sellers'],
        genres: ['open world', 'RPGS', 'AAA']
    },
    {
        title: 'Battlefield 6',
        platform: 'PC',
        platformIcon: 'https://www.svgrepo.com/show/473800/steam.svg',
        imageUrl: 'https://imgproxy.eneba.games/Cgi5Bekv4Iz4K6ptvOX6rwwCTmVc1tlKq_DFmraV1VY/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9p/R01RajV2VkZwbTFs/cXJjc25GMWQ3X2lr/eFVnRXVSXzgycWkz/alplWjRNLmpwZw',
        availability: 'UNITED STATES',
        price: 69.99,
        id: 2239694461,
        tags: ['best sellers', 'trending games'],
        genres: ['Shooters', 'AAA']
    },
    {
        title: 'Cyberpunk 2077: Ultimate Edition',
        platform: 'PC',
        platformIcon: 'https://www.svgrepo.com/show/473800/steam.svg',
        imageUrl: 'https://imgproxy.eneba.games/9bsU3cJjyg7z2TnJP8cR16CuU3H9KoWD2DP8MucWn0M/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/VXkybHNLYUJzUVFH/ODdiV19pcnRCckVm/N0pTaE9mX3RGTnFq/MXFlaXpFLmpwZw',
        availability: 'GLOBAL',
        price: 34.99,
        id: 1298970447,
        tags: ['upcoming games'],
        genres: ['open world', 'AAA']
    },
    {
        title: 'DOOM: The Dark Ages',
        platform: 'PC',
        platformIcon: 'https://www.svgrepo.com/show/473800/steam.svg',
        imageUrl: 'https://imgproxy.eneba.games/CXntCs0QT_oAfUq6wY6If2QcPUQYGPUwC0LtcNDGHjo/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9D/c2ZnekMwbzZIemwt/S08xTDNSS2w0Nk9I/bDQxWFo2UjdQdk03/SE9IUWNRLmpwZw',
        availability: 'GLOBAL',
        price: 39.99,
        id: 1232886783,
        tags: ['cheap games'],
        genres: ['Shooters', 'Arcade']
    },
        {
        title: 'The Witcher 3: Wild Hunt',
        platform: 'XBOX ONE',
        platformIcon: 'https://www.svgrepo.com/show/452137/xbox.svg',
        imageUrl: 'https://imgproxy.eneba.games/TEGlR-oAaJmGSWLBFO7jvSTTR4hhYXZdGNp-mHpUwXU/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy8y/REs4ODZFejZ6TkFi/LUZKVGItYWdna2Jl/U1UxZlgyelBiOXZm/aHFoV24wLmpwZWc',
        availability: 'MEXICO',
        price: 11.99,
        id: 1234352364,
        tags: ['cheap games'],
        genres: ['RPGS', 'open world', 'AAA']
    },
        {
        title: 'ARC Raiders - Standard Edition',
        platform: 'XBOX ONE',
        platformIcon: 'https://www.svgrepo.com/show/452137/xbox.svg',
        imageUrl: 'https://imgproxy.eneba.games/vn5V5UZaYngOmKVdl8LE4P7vN9fbjEvdQWfO-Z6NAb8/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9H/R2FOdzBHdk9qaXlr/NW96M2IyR1FlSXNH/UjVSd1RfOXB4X1hn/clRreHJnLmpwZw',
        availability: 'GLOBAL',
        price: 29.99,
        id: 2415344327,
        tags: ['best sellers', 'trending games'],
        genres: ['Shooters', 'open world']
    },
        {
        title: 'Marvels Spider-Man 2',
        platform: 'PC',
        platformIcon: 'https://www.svgrepo.com/show/473800/steam.svg',
        imageUrl: 'https://imgproxy.eneba.games/NFx2N0GZBE8ct92j5HDXmLN91ghLHJMdF4HtP0DX2Ls/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9M/U2F3M090em9IbG1m/OTdSNkFHYlBubEIt/MUVBbEVlTC1UT0ww/c2FlY25JLmpwZw',
        availability: 'BRASIL, MEXICO',
        price: 45.99,
        id: 1733856785,
        tags: ['trending games'],
        genres: ['AAA', 'Arcade', 'open world']
    },
        {
        title: 'Mario Kart 8 Deluxe Booster Course Pass',
        platform: 'Nintendo Switch',
        platformIcon: 'https://www.svgrepo.com/show/500713/switch-filled.svg',
        imageUrl: 'https://imgproxy.eneba.games/SRHVMONyL7pBwevhweaeaVtjYibOn3lFhEXRZJNMYGc/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9H/X3lTM0lZcE9Na09n/a0l3TjN0aVdUY1dI/Ti1iZWxEaWw5TFpQ/U2djd1JZLmpwZw',
        availability: 'EUROPE',
        price: 35.99,
        id: 1452186786,
        tags: ['best sellers'],
        genres: ['Arcade']
    },
]

export default gamesLibrary;