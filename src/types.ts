import { createTransport } from 'nodemailer'
export const BARA_NODEMAILER = 'bara-nodemailer'

export interface NodeMailerMold {
  options?: any
}

export interface NodeMailerContext {
  gmail: ReturnType<typeof createTransport>
}

export type NodeMailerTransportTypes = 'gmail'
