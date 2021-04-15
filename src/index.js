const fs = require('fs')
const { books } = require('./config');
const { html } = require('./template/manhua');
const x = require('x-ray')();

(async () => {
    const manhua = await Promise.all(books.map(async o => x(
        `https://www.cocomanhua.com/${o.id}/`,
        'body > div.fed-main-info.fed-min-width > div > div:nth-child(1)',
        {
            name: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > h1',
            updated: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(3) > a',
            desc: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a',
            link: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a@href'
        }
    )))
    const manhuaToday = manhua.sort((a, b) => new Date(b.updated) - new Date(a.updated))
    fs.writeFileSync('manhua.html', html(manhuaToday))
})()

