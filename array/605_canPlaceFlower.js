//leetcode-605
export default (arr,n)=>{
    let max = 0
    // for (let i = 0; i < arr.length-1; i++) {
    //     if (arr[i] === 0) {
    //         if (i === 0 && arr[1] === 0) {
    //             max++
    //             i++
    //         } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
    //             max++
    //             i++
    //         }else if(i===arr.length-2&&arr[i]===0&&arr[i+1]===0) {
    //             max++
    //         }
    //     }
    // }
    arr.push(0)
    arr.unshift(0)
    for (let i = 1;i<arr.length-1;i++){
        if (arr[i]===0&&arr[i-1]===0&&arr[i+1]===0){
            max++
            i++
        }
    }
   return max>=n?true:false
}