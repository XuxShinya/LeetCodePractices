//35
export default (nums, target) => {
    let right = nums.length - 1
    let left = 0
    while (left <= right) {
        let mid = left + (right - left) / 2
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            left = mid - 1
        }
    }
    return mid
}