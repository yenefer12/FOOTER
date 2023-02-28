export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'es'
            },
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Egilit',
            meta: [
                { name: 'e-commerce', content: 'Comercio electronico' }
            ],

        }
    },
    
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Roboto: true,
                },
                download: true,
            },
        ],
    ],

    // deja utilizar globalmente las configuraciones de body y * pero no variables

    css: [
        '@/assets/css/global.scss'
    ],

    // deja utilizar globalmente las variables pero no las configuraciones de body y *
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/css/variables.scss";'
            }
          }
        }
    },

})

