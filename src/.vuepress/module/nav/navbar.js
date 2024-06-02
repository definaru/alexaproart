function navbar()
{
    return [
        { text: 'Обо мне', link: '/about/' },
        { text: 'Каталог', link: '/portfolio/walls' },
        { text: 'Контакты ', link: '/contacts/' }
    ]
}

module.exports = { navbar }