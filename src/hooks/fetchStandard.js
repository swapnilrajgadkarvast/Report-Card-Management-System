export const fetchStandard = () => {
  return async (context) => {
    const standardService = context.app.service('standard')
    const standard = await standardService.get(context.data.standard)
    // console.log(standard)
    if (!standard) throw new Error('Standard with given id is not found')
    context.data.standard = standard
    delete context.data.standard
    return context
  }
}
