export const fetchUser=()=>{
    return async(context)=>{
        const userService=context.app.service("/users")
        const user=await userService.get(context.data.userId)
        if(!user)throw new Error("user with given id is not found")
        
        return context
    }
}