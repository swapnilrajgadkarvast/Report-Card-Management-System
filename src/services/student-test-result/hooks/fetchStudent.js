export const fetchStudent=()=>{
    return async(context)=>{
        const studentService=context.app.service("/student")
        const student =await studentService.get(context.data.studentId)
        console.log(student)

        if(!student)throw new Error("student with given id is not found")
        context.data.student=student
        delete context.data.studentId
        return context
    }
}