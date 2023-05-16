export const subjectsPath = 'subjects'

export const subjectsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const subjectsClient = (client) => {
  const connection = client.get('connection')

  client.use(subjectsPath, connection.service(subjectsPath), {
    methods: subjectsMethods
  })
}
