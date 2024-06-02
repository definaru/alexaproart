const { headHtml } = require('../.vuepress/module/headHtml')
const { navbar } = require('../.vuepress/module/nav/navbar')

module.exports = {
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/medium-zoom', {
                selector: 'img.zoom-custom-imgs'
            }
        ] 
    ],
    head: headHtml(),
    title: 'Александра Прохорова',
    description: 'Художник по росписи стен и рисованию интерьерных картин',
    footer: 'MIT Licensed | Copyright © 2023',
    themeConfig: {
		logo: '/promo/logo.png',
        smoothScroll: true,
        search: false,
        displayAllHeaders: true,
		sidebar: {},
        nav: navbar()
    }
}
// https://github.com/the-alex-mark/vuepress-theme-stack