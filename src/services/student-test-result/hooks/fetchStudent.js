export const fetchStudent = () => {
  return async (context) => {
    const studentService = context.app.service('student')
    const student = await studentService.get(context.data.student)
    // console.log(student)
    if (!student) throw new Error('Student with given id is not found')
    return context
  }
}
