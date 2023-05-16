export const fetchDivision = () => {
  return async (context) => {
    const divisionService = context.app.service('division')
    const division = await divisionService.get(context.data.division)
    if (!division) throw new Error('Division with given id is not found')

    return context
  }
}
