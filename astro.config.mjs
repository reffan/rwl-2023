import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://reffanliefde.nl',
  integrations: [sitemap(), mdx(), preact()],
})
