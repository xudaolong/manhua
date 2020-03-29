const fs = require('fs')
const { books } = require('./config');
const { formatDate } = require('./utils');
const { html } = require('./template/manhua');
const x = require('x-ray')();

(async () => {
    const manhua = await Promise.all(books.map(async o => x(
        `https://www.onemanhua.com/${o.id}/`,
        'body > div.fed-main-info.fed-min-width > div > div:nth-child(1)', {
        name: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > h1',
        updated: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(3) > a',
        desc: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a',
        link: 'div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a@href'
    })))
    const today = formatDate()
    const manhuaToday = manhua.filter(o => o.updated === today)
    fs.writeFileSync('manhua.html', html(manhuaToday))
})()

