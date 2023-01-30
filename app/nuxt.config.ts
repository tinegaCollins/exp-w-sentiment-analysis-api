import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    buildModules: ['@nuxtjs/tailwindcss', '@unocss/nuxt', '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: '',
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Print-Depot',
            meta: [{ name: 'description', content: 'Print Depot site' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    unocss: {
        icons: true,
        presets: [presetIcons({})],
    },
})
