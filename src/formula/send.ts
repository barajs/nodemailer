import { Formula } from '@barajs/formula'

import { withNodeMailer } from './withNodeMailer'
import { NodeMailerContext, NodeMailerTransportTypes } from '../types'

export const sendMail = withNodeMailer(
  (
    transportName: NodeMailerTransportTypes = 'gmail',
    formula?: Formula,
  ) => async (payload: any, transports: NodeMailerContext, ...rest: any[]) => {
    let data = payload
    if (formula) {
      data = await Promise.resolve(formula(payload, ...rest))
    }
    if (
      transportName in transports &&
      transports[transportName] !== undefined
    ) {
      return await Promise.resolve(transports[transportName].sendMail(data))
    }
    throw new Error(
      `Did not find any transport named '${transportName}' registered with Bara NodeMailer.`,
    )
  },
)
