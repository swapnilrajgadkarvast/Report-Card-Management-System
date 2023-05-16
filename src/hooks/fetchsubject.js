export const fetchSubject=()=>{
    return async(context)=>{
        const subjectService=context.app.service("/subjects")
        const subject=await subjectService.get(context.data.subjectId)
        if(!subject)throw new Error("subject with given id is not found")
        return context
    }
}