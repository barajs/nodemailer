import { getContext } from '@barajs/core'
import { Formula } from '@barajs/formula'

import { BARA_NODEMAILER } from '../types'

export const withNodeMailer = (formula: Formula) => (options?: any) => (
  payload: any,
  contextes: any,
) => {
  const data: any = getContext(BARA_NODEMAILER, contextes)
  return formula(options)(payload, data, contextes)
}
