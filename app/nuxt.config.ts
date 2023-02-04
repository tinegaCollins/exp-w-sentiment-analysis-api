export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss', '@unocss/nuxt', '@nuxtjs/color-mode', '@pinia/nuxt'],
    colorMode: {
        classSuffix: '',
    },
    app: {
        head: {
            charset: 'utf-16',
            title: 'grahan v1',
            meta: [
                { name: 'description', content: 'Agency v1' },
            ],
            link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    nitro: {
        plugins: ['~/server/index.ts'],
    },
})
