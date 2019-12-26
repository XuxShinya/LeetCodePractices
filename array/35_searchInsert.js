//35
export default (nums, target) => {
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //    map.set(nums[i],i) 
    // }
    // if (map.has(target)) {
    //     return i
    // }else{
    //     for(let key in map){
    //         if (key<target) {
    //          // ....   
    //         }
    //     }
    // }s
    let flag = 0
    if (target == 0) {
        nums.splice(0, 1, target)
        return 0
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            flag = i
            return flag
        } else {
            if (nums[i] > target && i == 0) {
                flag = -1
                break
            }
            if (nums[i] < target) {
                flag = i
                    // console.log('--', flag)
            } else {
                break;
            }
        }

    }
    nums.splice(flag, 1, target)
    return flag + 1
}