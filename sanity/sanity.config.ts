import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolioSite2.0',

  projectId: 'p079sml5',
  dataset: 'production',

  plugins: [
    deskTool(),
    // visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
