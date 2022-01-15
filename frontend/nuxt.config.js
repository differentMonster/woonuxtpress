import axios from 'axios';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    env: {
        WOO_KEY: process.env.WOOCOMMERCE_KEY,
        WOO_SECRET: process.env.WOOCOMMERCE_SECRET
    },
    head: {
        title: 'frontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/classWooCommerceOrigin.js',
        '~/plugins/classWooCommerceCustomers.js',
        '~/plugins/classWooCommerceProducts.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: 'http://localhost:3080',
        // browserBaseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://[YOUR_HOST_IP_OR_DOMAIN]:5000'
        // proxyHeaders: false,
        // credentials: false
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}