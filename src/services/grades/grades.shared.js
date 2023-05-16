export const gradesPath = 'grades'

export const gradesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const gradesClient = (client) => {
  const connection = client.get('connection')

  client.use(gradesPath, connection.service(gradesPath), {
    methods: gradesMethods
  })
}
