export const fetchUser = () => {
  return async (context) => {
    const userService = context.app.service('users')
    const user = await userService.get(context.data.user)
    if (!user) throw new Error('User with given id is not found')

    return context
  }
}
