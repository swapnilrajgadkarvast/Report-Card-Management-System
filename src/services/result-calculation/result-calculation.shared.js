export const resultCalculationPath = 'result-calculation'

export const resultCalculationMethods = ['find', 'get', 'create', 'patch', 'remove']

export const resultCalculationClient = (client) => {
  const connection = client.get('connection')

  client.use(resultCalculationPath, connection.service(resultCalculationPath), {
    methods: resultCalculationMethods
  })
}
