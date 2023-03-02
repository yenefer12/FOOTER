export default defineNuxtConfig({
    app: {
        head: {
             htmlAttrs: {
                lang: 'es'
              },
              meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Brief summary of page content' },
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
        '@/assets/css/global.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
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

    //elimino un error raro ....Could not find one or more icon(s) { prefix: 'fab', iconName: 'facebook' } {} 15:10:52 Could not find one or more icon(s) { prefix: 'fab', iconName: 'instagram' } {} 15:10:52 Could not find one or more icon(s) { prefix: 'fab', iconName: 'facebook' } {} 15:11:06 Could not find one or more icon(s) { prefix: 'fab', iconName: 'instagram' } {}
    build: {
        transpile: [
        "@fortawesome/vue-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/free-brands-svg-icons",
        ],
    },

})

