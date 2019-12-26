export default (str) => {
    //1.将字符串按照空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    //2.对数组进行遍历，然后进行反转，最后将数组用空格拼接起来。

    //方法一：
    // return str.split(' ').map(item => {
    //     return item.split('').reverse().join('')
    // }).join(' ')

    //方法二：
    // return str.split(/\s/g).map(item => {
    //     return item.split('').reverse().join('')
    // }).join(' ')

    //方法三：
    return str.match(/[\w']+/g).map(item => { //表示匹配到\w 或者'  一次或多次。
        return item.split('').reverse().join('')
    }).join(' ')
}