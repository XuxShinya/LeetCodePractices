export default (num)=>{
    let getGary = (num)=>{
        if (num===1){
            return ['0','1']
        }else{
            let prev = getGary(num-1)
            let result = []
            let max = Math.pow(2,num)-1
            for (let i = 0; i < prev.length; i++) {
                result[i] = `0${prev[i]}`
                result[max-i] = `1${prev[i]}`
            }
            return result
        }
    }
    return getGary(num)
}
