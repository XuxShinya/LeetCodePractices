//35
export default (nums, target) => {
    let right = nums.length - 1
    let mid = (right - 0) / 2
    let flag
    if (nums[mid] == target) {
        return mid
    }
    if (nums[mid] < target) {
        for (let i = mid + 1; i < nums.length; i++) {
            if (nums[i] == target) {
                return i
            } else {
                if (nums[i] < target) {
                    flag = i
                } else {
                    break
                }
            }
        }
        nums.splice(flag, i, target)
        return flag + 1
    }
    if (nums[mid] > target) {
        for (let i = mid - 1; i >= 0; i--) {
            if (nums[i] < target) {
                flag = i
                break
            }
        }
        nums.splice(flag, 1, target)
        return flag
    }
}