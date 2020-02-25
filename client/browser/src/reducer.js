const initialState = [
    {
        "author": null,
        "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
        "description": "CNN's John King discusses intelligence officials telling Congress that Russia is working to re-elect President Trump, and the reactions from Rep. Devin Nunes (R-CA) and Donald Trump Jr.",
        "publishedAt": "2020-02-21T20:22:49.3339031Z",
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "title": "John King takes on Donald Trump Jr.'s attack: This is dangerous - CNN Video",
        "url": "http://us.cnn.com/videos/politics/2020/02/21/devin-nunes-donald-trump-jr-russia-briefing-ip-vpx.cnn",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200221134831-devin-nunes-donald-trump-jr-russia-briefing-ip-vpx-00000000-super-tease.jpg"
    },
    {
        "author": "Adi Robertson",
        "content": "It also promises an independent oversight committee\r\nIllustration by Alex Castro / The Verge\r\nEthos Capital, the company controversially buying the .org top-level domain, is trying to appease critics with a set of new rules. The legally binding agreements wou… [+2701 chars]",
        "description": "Ethos Capital, the private equity firm buying the .org top-level domain manager PIR from the Internet Society, offered to sign legally binding agreements to address concerns over the sale.",
        "publishedAt": "2020-02-21T20:12:30Z",
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "title": "Company buying .org offers to sign a contract banning price hikes",
        "url": "https://www.theverge.com/2020/2/21/21147448/ethos-capital-org-legally-binding-agreement-tld-pir-isoc-icann",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/E3E-8U5Z3pfv0zeacI8HNoBozbE=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/14834051/acastro_190228_1777_vpn_0002.jpg"
    },
    {
        "author": null,
        "content": "This is the latest crisis to face the Canadian prime minister at the start of his second term, and Trudeau is taking heat from all sides for not doing more to fix it. He has called the situation unacceptable, but insists he wants a peaceful resolution to the … [+9762 chars]",
        "description": "Trains in eastern Canada have been at a near-standstill for more than two weeks as Trudeau’s government has struggled to resolve a protest.",
        "publishedAt": "2020-02-21T20:08:47.8547667Z",
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "title": "Trudeau’s next political crisis: rail blockades",
        "url": "https://www.politico.com/news/2020/02/21/trudeaus-rail-blockades-116599",
        "urlToImage": "https://static.politico.com/c0/cd/99d779c642b9b893c2f9a91ea0de/200221-justin-trudeau.jpg"
    },
    {
        "author": null,
        "content": "The rural counties will be significant, said Ernesto Apreza, who led Kamala Harris campaign in Nevada before she dropped out of the race in December. In 2008, thats how Obama won, and I think theyll play a similar role in 2020. \r\nSanders and Warren spent a lo… [+4426 chars]",
        "description": "The former mayor has outperformed so far in rural areas, a potentially important factor in the tightly bunched caucuses.",
        "publishedAt": "2020-02-21T20:08:45.3934057Z",
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "title": "Buttigieg’s small-town strategy faces steep test in Nevada",
        "url": "https://www.politico.com/news/2020/02/21/pete-buttigieg-nevada-strategy-116608",
        "urlToImage": "https://static.politico.com/70/c5/f5e5966f4537970bab709b3488f6/200221-buttigieg-ap-773.jpg"
    },
    {
        "author": "Hyonhee Shin",
        "content": "DAEGU, South Korea (Reuters) - Usually teeming with thousands of worshippers, the church at the center of South Korea’s largest coronavirus outbreak was shuttered and silent on Friday, surrounded by empty streets. \r\nAfter a few minutes, a young man came out o… [+2490 chars]",
        "description": "Usually teeming with thousands of worshippers, the church at the center of South Korea's largest coronavirus outbreak was shuttered and silent on Friday, surrounded by empty streets.",
        "publishedAt": "2020-02-21T20:00:50Z",
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "title": "Church at center of South Korea coronavirus outbreak sits silent as infections surge",
        "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/Yezff2hyC14/church-at-center-of-south-korea-coronavirus-outbreak-sits-silent-as-infections-surge-idUSKBN20F1X1",
        "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20200221&t=2&i=1493456200&w=1200&r=LYNXMPEG1K1AM"
    },
];

export default articleReducer = (state= initialState, action) {
    switch (action.type) {
        case "Add article": {
            return [
                ...state,
                {}
            ]
        }
        default: {
            return state
        }
    }
}