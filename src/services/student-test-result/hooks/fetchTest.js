export const fetchTests=()=>{
    return async(context)=>{
        const testsService=context.app.service("tests")
        const tests =await testsService.get(context.data.tests)
        // console.log(tests)
        if (!tests) throw new Error('Test with given id is not found')
        return context
    }
}