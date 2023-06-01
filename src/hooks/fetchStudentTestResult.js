// export const fetchTestResult = () => {
//   return async (context) => {
//     const studentTestResultService = context.app.service('student-test-result')
//     const studentTestResult = await studentTestResultService.get(context.data.studentTestResult)
//     console.log(studentTestResult)
//     if (!studentTestResult) throw new Error('StudentTestResult with given id is not found')
//     return context
//   }
// }

export const fetchTestResult = () => {
  return async (context) => {
    const student = context.data.student // Assuming student is the property name for the student ID in context.data
    const testName = context.data.testName; // Assuming name is the property name for the test name in context.data

    const studentTestResultService = context.app.service('student-test-result')
    const studentTestResults = await studentTestResultService.find({
      query: {
        student: student // Filter by student
      }
    })

    const testsService = context.app.service('tests')
    const tests = await testsService.find({
      query: {
        name: testName
      }
    })

    console.log('Tests:', tests)

    const obtainedTotalMarks = studentTestResults.data.reduce((sum, result) => {
      return sum + result.obtainedMarks
    }, 0)

    console.log('Total Student Obtained Marks:', obtainedTotalMarks)

    const totalStudentSubjects = studentTestResults.data.length
    console.log('Total Students Subjects:', totalStudentSubjects)

    const totalMarks = totalStudentSubjects * 100
    console.log('Total Marks : ', totalMarks)

    const percentage = (obtainedTotalMarks / totalMarks) * 100
    console.log('Percentage of Students:', percentage.toFixed(2))

    const grade = percentage >= 70 ? 'Distinction' : percentage >= 35 ? 'Pass' : 'Fail'
    console.log('Grade:', grade)

    if (studentTestResults.total === 0) {
      throw new Error('No StudentTestResult found for the given student')
    }
    context.result = { studentTestResults: studentTestResults.data, tests } // Assign the found results to context.result
    return context
  }
}
