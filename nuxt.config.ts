import path from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      'nuxt-primevue'
  ],
  css: ['primeicons/primeicons.css'],
  googleFonts: {
      base64: true,
      fontsDir: 'assets/fonts',
      overwriting: true,
      families: {
          Inter: [300, 500, 800]
      }
  },
  primevue: {
      options: {unstyled: true},
      importPT: {
          as: 'lara',
            from: path.resolve(__dirname, './assets/presets/lara')
      }
  }
})
