// 1: Khai báo biến
// var name = "Pham Tấn Phát"
// var height = 1.75
// console.log(name, height)

// 2: Câu điều kiện if else
// 6 giá trị tương ứng với false
// 1 - false
// 2 - 0
// 3 - ""
// 4 - NaN

// 5 - undefined
// 6 - null
// var a = NaN
// var b = 10

// if (a) {
//     console.log("A lớn hơn B")
// } else {
//     console.log("A bé hơn hoặc bằng B")
// }

// 3: Toán tử
// var a = 5
// console.log(a++)

// 4: Mảng
// var arrNumbers = [1, 3, 5, 10, 0, -1, -5];

// arrNumbers.push(100)
// arrNumbers.splice(0, 0, 100)
// arrNumbers.pop()
// arrNumbers.splice(0, 1)
// a - b > 0 (từ bé tới lớn)
// b - a > 0 (từ lớn tới bé)
// arrNumbers.sort(function(a, b){
//     return b - a
// })

// for(var i = 0; i < arrNumbers.length; i++) {
//     arrNumbers[i] *= 2
// }

// var newArrays = arrNumbers.map(function(element, index){
//     return element * 2
// })

Array.prototype.myMap = function(cb) {
    var newArrs = []
    for(var i = 0; i < this.length; i++) {
        newArrs.push(cb(this[i], i, this))
    }
    return newArrs
}

var arrNumbers = [1, 3, 5, 10, 0, -1, -5];

var newArrays = arrNumbers.myMap(function(element, index){
    return element * 2
})

console.log(newArrays, arrNumbers)