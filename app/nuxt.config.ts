export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss', '@unocss/nuxt', '@nuxtjs/color-mode', '@pinia/nuxt'],
    colorMode: {
        classSuffix: '',
    },
    app: {
        head: {
            charset: 'utf-16',
            title: 'Review Central',
            meta: [
                { name: 'description', content: 'Review Central' },
            ],
            link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet' },{ rel: 'icon', type: 'image/x-icon', href: '/logo-small.png' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    nitro: {
        plugins: ['~/server/index.ts'],
    },
})
