export const fetchDivision=()=>{
    return async(context)=>{
        const divisionService=context.app.service("/division")
        const standard=await divisionService.get(context.data.divisionId)
        if(!standard)throw new Error("standard with given id is not found")
        
        return context
    }
}