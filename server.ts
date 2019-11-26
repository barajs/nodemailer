import { run, app, act } from '@barajs/core'
import { pipe, log } from '@barajs/formula'
import Source from './src'

run(
  app({
    portion: [Source()],
    trigger: [],
  }),
)
