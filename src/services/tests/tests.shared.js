export const testsPath = 'tests'

export const testsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const testsClient = (client) => {
  const connection = client.get('connection')

  client.use(testsPath, connection.service(testsPath), {
    methods: testsMethods
  })
}
