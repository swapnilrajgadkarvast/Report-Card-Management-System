export const fetchStandard=()=>{
    return async(context)=>{
        const standardService=context.app.service("/standard")
        const standard=await standardService.get(context.data.standardId)
        if(!standard)throw new Error("standard with given id is not found")
        
        return context
    }
}