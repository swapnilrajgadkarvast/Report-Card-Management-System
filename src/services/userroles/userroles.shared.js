export const userrolesPath = 'userroles'

export const userrolesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const userrolesClient = (client) => {
  const connection = client.get('connection')

  client.use(userrolesPath, connection.service(userrolesPath), {
    methods: userrolesMethods
  })
}
