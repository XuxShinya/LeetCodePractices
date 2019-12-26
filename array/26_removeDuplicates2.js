export default (nums) => {
    let count = 0
    let len = nums.length
    for (let i = 1; i < len;) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
}