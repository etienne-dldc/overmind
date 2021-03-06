export default (ts, view) =>
  ts
    ? [
        {
          fileName: 'app/index.ts',
          code: `
import { Overmind, TConfig } from 'overmind'
import { namespaced } from 'overmind/config'
import * as posts from './posts'
import * as admin from './admin'

const config = namespaced({
  posts,
  admin
})

declare module 'overmind' {
  interface IConfig extends TConfig<typeof config> {}
}

const app = new Overmind(config)
`,
        },
      ]
    : [
        {
          fileName: 'app/index.js',
          code: `
import { Overmind } from 'overmind'
import { namespaced } from 'overmind/config'
import * as posts from './posts'
import * as admin from './admin'

const config = namespaced({
  posts,
  admin
})

const app = new Overmind(config)
`,
        },
      ]
