export const fetchStudent = () => {
  return async (context) => {
    const studentService = context.app.service('student')
    const student = await studentService.get(context.data.student)
    // console.log(student)
    return context
  }
}
