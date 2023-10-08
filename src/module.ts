import { defineNuxtModule, createResolver, installModule, addPlugin, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },

  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    // const resolver = createResolver(import.meta.url)

    // Style
    // nuxt.options.css.push(resolver.resolve('./runtime/assets/scss/main.scss'))

    // nuxt.hook('nitro:config', async (nitroConfig) => {
    //   nitroConfig.publicAssets ||= []
    //   nitroConfig.publicAssets.push({
    //     dir: resolve('./runtime/public'),
    //     maxAge: 60 * 60 * 24 * 365 // 1 year
    //   })
    // })

    addPlugin(resolve('./runtime/plugin'))

    /** Register components */
    await addComponentsDir({
      path: resolve('./runtime/components/'),
      global: true,
      pathPrefix: true,
      prefix: 'Mds',
    })

    // await installModule('@storyblok/nuxt', {
    //   // module configuration
    //   accessToken: 'eheIciWR3sIzVRbdQCXtwQtt',
    //   apiOptions: {
    //     region: 'EU' // Set 'US" if your space is created in US region (EU default)
    //   }
    // })

    await installModule('@nuxt/image', {
      // module configuration
      //ideally this will be the default image
      image: {
        dir: './runtime/Images/test.jpg'
      },
      storyblok: {
        baseURL: "https://a.storyblok.com",
      },
    })
  }
})