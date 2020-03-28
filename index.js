const books = [
    {
        name: '武炼巅峰',
        id: '12202'
    },
    {
        name: '重生之都市修仙',
        id: '12214'
    },
    {
        name: '百炼成神',
        id: '10081'
    },
    {
        name: '我独自升级',
        id: '15087'
    }
];

(async () => {
    const x = require('x-ray')()
    const data = await Promise.all(books.map(async o => x(
        `https://www.onemanhua.com/${o.id}/`,
        'body > div.fed-main-info.fed-min-width > div > div:nth-child(1)', [
        {
            name: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > h1',
            updated: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(3) > a',
            desc: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a',
            link: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a@href'
        }
    ])))
})()

