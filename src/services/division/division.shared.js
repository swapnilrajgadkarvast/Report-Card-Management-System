export const divisionPath = 'division'

export const divisionMethods = ['find', 'get', 'create', 'patch', 'remove']

export const divisionClient = (client) => {
  const connection = client.get('connection')

  client.use(divisionPath, connection.service(divisionPath), {
    methods: divisionMethods
  })
}
