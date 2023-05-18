export const fetchgrades = () => {
    return async (context) => {
      const gradesService = context.app.service('grades')
      const grades = await gradesService.get(context.data.grades)
      // console.log(grades)
      if (!grades) throw new Error('Grade with given id is not found')

      return context
    }
  }
  