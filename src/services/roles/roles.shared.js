export const rolesPath = 'roles'

export const rolesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const rolesClient = (client) => {
  const connection = client.get('connection')

  client.use(rolesPath, connection.service(rolesPath), {
    methods: rolesMethods
  })
}
