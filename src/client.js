// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { forgotpasswordClient } from './services/forgotpassword/forgotpassword.shared.js'
import { resultCalculationClient } from './services/result-calculation/result-calculation.shared.js'

import { studentReportClient } from './services/student-report/student-report.shared.js'

import { reportClient } from './services/report/report.shared.js'


import { userClient } from './services/users/users.shared.js'
import { gradesClient } from './services/grades/grades.shared.js'

/**
 * Returns a  client for the report_card_management_system app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = (connection, authenticationOptions = {}) => {
  const client = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)

  client.configure(gradesClient)


  client.configure(forgotpasswordClient)

  client.configure(studentReportClient)

  client.configure(resultCalculationClient)

  return client
}
