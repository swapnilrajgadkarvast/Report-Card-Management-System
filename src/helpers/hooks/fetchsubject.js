export const fetchSubject = () => {
  return async (context) => {
    const subjectService = context.app.service('subjects')
    const subject = await subjectService.get(context.data.subject)
    if (!subject) throw new Error('Subject with given id is not found')
    return context
  }
}
