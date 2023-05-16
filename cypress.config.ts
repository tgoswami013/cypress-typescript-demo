import { defineConfig } from 'cypress'

export default defineConfig({
    projectId: 'pv2z48',

    e2e: {
        baseUrl: 'https://magento.softwaretestingboard.com/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
