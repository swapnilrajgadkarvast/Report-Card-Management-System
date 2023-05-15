export const standardPath = 'standard'

export const standardMethods = ['find', 'get', 'create', 'patch', 'remove']

export const standardClient = (client) => {
  const connection = client.get('connection')

  client.use(standardPath, connection.service(standardPath), {
    methods: standardMethods
  })
}
