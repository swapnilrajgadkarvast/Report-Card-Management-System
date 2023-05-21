export const forgotpasswordPath = 'forgotpassword'

export const forgotpasswordMethods = ['create']

export const forgotpasswordClient = (client) => {
  const connection = client.get('connection')

  client.use(forgotpasswordPath, connection.service(forgotpasswordPath), {
    methods: forgotpasswordMethods
  })
}
