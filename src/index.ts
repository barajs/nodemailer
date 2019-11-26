import { portion, flow, popEvent } from '@barajs/core'
import nodemailer from 'nodemailer'

import { NodeMailerContext, NodeMailerMold, BARA_NODEMAILER } from './types'

const BaraNodeMailer = portion<any, NodeMailerContext, NodeMailerMold>({
  name: BARA_NODEMAILER,
  init: mold => {
    const { gmailOptions } = mold
    const { user, pass } = gmailOptions
    const gmail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass },
    })
    return { gmail }
  },
})

const { whenInitialized: whenNodeMailerReady } = popEvent(BaraNodeMailer)

export { BaraNodeMailer, whenNodeMailerReady }

export * from './formula'
export default BaraNodeMailer
