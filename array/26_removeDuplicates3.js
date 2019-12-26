export default (nums) => {
    let cur = nums[0]
    for (let i = 1; i < nums.length;) {
        if (nums[i] == cur) {
            nums.splice(i, 1)
        } else {
            cur = nums[i++]
        }
    }
    console.log(cur)
    return nums.length
}