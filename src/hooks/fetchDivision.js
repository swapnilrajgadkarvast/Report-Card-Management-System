export const fetchDivision = () => {
  return async (context) => {
    const divisionService = context.app.service('division')
    const division = await divisionService.get(context.data.division)
    // console.log(division)
    if (!division) throw new Error('Division with given id is not found')
    context.data.division = division
    delete context.data.division
    return context
  }
}
