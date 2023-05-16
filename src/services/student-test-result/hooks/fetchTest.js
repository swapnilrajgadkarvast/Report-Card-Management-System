export const fetchTests=()=>{
    return async(context)=>{
        const testsService=context.app.service("tests")
        const tests =await testsService.get(context.data.tests)
        console.log(tests)
        return context
    }
}