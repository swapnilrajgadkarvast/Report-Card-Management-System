export const studentPath = 'student'

export const studentMethods = ['find', 'get', 'create', 'patch', 'remove']

export const studentClient = (client) => {
  const connection = client.get('connection')

  client.use(studentPath, connection.service(studentPath), {
    methods: studentMethods
  })
}
