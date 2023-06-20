export const updateHeighestMarksAndAverageMarks = () => {
  return async (context) => {
    const testService = context.app.service('tests')
    const studentTestResultService = context.app.service('student-test-result')
    const marks = context.data.obtainedMarks
    const maxmarksstudentrecord = await studentTestResultService.find({
      query: {
        tests: context.data.tests,
        $limit: 1,
        $sort: {
          obtainedMarks: -1
        }
      }
    })
    console.log(maxmarksstudentrecord.data[0])
    console.log(maxmarksstudentrecord.data[0].obtainedMarks)

    const testId = maxmarksstudentrecord.data[0].tests
    console.log('Test Id is==>' + testId)

    if (marks > maxmarksstudentrecord.data[0].obtainedMarks)
      await testService.patch(testId, { highestMarks: marks }, { new: true })
    else
      await testService.patch(
        testId,
        { highestMarks: maxmarksstudentrecord.data[0].obtainedMarks },
        { new: true }
      )
    console.log('heighest marks updated')

    const result = await studentTestResultService.find({
      query: {
        tests: testId
        // Add your conditions here
      },
      $limit: 0 // Set $limit to 0 to only retrieve the count
    })
    console.log('Total student appeared for the test  are=>' + result.total)

    const totalStudentTestReocrds = await studentTestResultService.find({
      query: {
        tests: context.data.tests // Filter by test
      }
    })
    // console.log(totalStudentTestReocrds.data)

    const obtainedTotalMarks = totalStudentTestReocrds.data.reduce((sum, result) => {
      return sum + result.obtainedMarks
    }, 0)
    console.log('Total Student Obtained Marks:', obtainedTotalMarks)

    const avgMarks = obtainedTotalMarks / result.total

    //console.log("Average marks are=>"+(avgMarks));
    console.log('Average marks are=>' + Math.round(avgMarks))
    await testService.patch(testId, { averageMarks: Math.round(avgMarks) }, { new: true })
    console.log('average marks updated')
  }
}
