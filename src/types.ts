import { createTransport } from 'nodemailer'
export const BARA_NODEMAILER = 'bara-nodemailer'

export interface GmailOptions {
  user: string
  pass: string
}

export interface NodeMailerMold {
  gmailOptions?: GmailOptions
}

export interface NodeMailerContext {
  gmail: ReturnType<typeof createTransport>
}

export type NodeMailerTransportTypes = 'gmail'
