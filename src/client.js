// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { reportClient } from './services/report/report.shared.js'

import { gradesClient } from './services/grades/grades.shared.js'

import { studentTestResultClient } from './services/student-test-result/student-test-result.shared.js'

import { testsClient } from './services/tests/tests.shared.js'

import { standardClient } from './services/standard/standard.shared.js'

import { studentClient } from './services/student/student.shared.js'

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

  client.configure(studentClient)

  client.configure(standardClient)

  client.configure(testsClient)

  client.configure(studentTestResultClient)

  client.configure(gradesClient)

  client.configure(reportClient)

  return client
}
