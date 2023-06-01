export const studentTestResultPath = 'student-test-result'

export const studentTestResultMethods = ['find', 'get', 'create', 'patch', 'remove']

export const studentTestResultClient = (client) => {
  const connection = client.get('connection')

  client.use(studentTestResultPath, connection.service(studentTestResultPath), {
    methods: studentTestResultMethods
  })
}
  