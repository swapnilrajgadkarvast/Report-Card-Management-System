export const reportPath = 'report'

export const reportMethods = ['find', 'get', 'create', 'patch', 'remove']

export const reportClient = (client) => {
  const connection = client.get('connection')

  client.use(reportPath, connection.service(reportPath), {
    methods: reportMethods
  })
}
