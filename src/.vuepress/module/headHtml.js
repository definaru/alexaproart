function headHtml()
{
    return [
        ['meta', { name: 'theme-color', content: '#314396' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#314396' }],
        ['meta', { name: 'msapplication-navbutton-color', content: '#314396' }],
        ['meta', { name: 'msapplication-TileColor', content: '#314396' }],
        ['meta', { httpEquiv: 'X-UA-Compatible', content: '#314396' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }],
        ['meta', { name: 'keywords', content: 'картины'}],
        ['meta', { name: 'description', content: 'Художник по росписи стен и рисованию интерьерных картин'}],
        ['meta', { property: 'og:title', content: 'Александра Прохорова'}],
        ['meta', { property: 'og:description', content: 'Художник по росписи стен и рисованию интерьерных картин'}],
        ['meta', { property: 'og:type', content: 'website'}],
        ['meta', { property: 'og:image', content: '/promo/ap.png'}],
        ['meta', { property: 'og:site_name', content: 'Александра Прохорова'}],
        ['meta', { property: 'og:locale', content: 'ru_RU'}],
        ['meta', { property: 'og:url', content: 'https://aleksaproart.ru'}],
        ['link', { rel: 'apple-touch-icon', href: `/promo/favicon.png` }],
        ['link', { rel: 'icon', href: '/promo/favicon.png' }]
    ]
}

module.exports = { headHtml }