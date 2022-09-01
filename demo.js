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

// Array.prototype.myMap = function(cb) {
//     var newArrs = []
//     for(var i = 0; i < this.length; i++) {
//         newArrs.push(cb(this[i], i, this))
//     }
//     return newArrs
// }

// var arrNumbers = [1, 3, 5, 10, 0, -1, -5];

// var newArrays = arrNumbers.myMap(function(element, index){
//     return element * 2
// })

// console.log(newArrays, arrNumbers)

// var arrNumbers = [1, 3, 5, 10, 0, -1, -5];

// var newArrs = arrNumbers.filter(function(element, index, array){
//     if (element > 0) return true
//     return false
// })

// var newArr = arrNumbers.reduce(function(previous, current){
//     return previous + current
// }, 0)

// console.log(newArr)

// 5: Object
// var person = {
//     name: "Teo",
//     age: 10,
//     dosomething: function(){
//         console.log(this.name)
//     }
// }
// Thêm thuộc tính
// person.address = "Quan 1"

// Bỏ thuộc tính
// delete person.name

// var newPerson = {...person}
// newPerson.age = 20
// console.log(newPerson, person)

// Bài tập

// var arrBill = [
//     {index: 0, category: 1, name: "Túi", price: 200000},
//     {index: 1, category: 1, name: "Khăn", price: 50000},
//     {index: 2, category: 2, name: "Nón", price: 150000},
//     {index: 3, category: 3, name: "Mắt kính", price: 300000},
//     {index: 4, category: 1, name: "Điện thoại", price: 10000000},
// ]

// 1: Tổng price của bill
// var total = arrBill.map(function(element){
//     return element.price
// }).reduce(function(previous, current){
//     return previous + current
// }, 0)

// console.log(total)

// 2: Tạo mảng chứa các sản phẩm có category là 1 và tổng tiền của nó

// var total = arrBill.filter(function(element) {
//     if (element.category == 1) return true
//     return false
// }).map(function(element) {
//     return element.price
// }).reduce(function(previous, current){
//     return previous + current
// }, 0)

// console.log(total)

// 7: Phân biệt let và var
// console.log(a)
// let a

// for (let i = 0; i < 10; i++) {
//     console.log("Hello")
// }

// console.log(i)

// 8: Spread
// let arr = [1,3,5,7,9]
// let newArr = [...arr]

// 9: Dùng cho function

// function tinhTong(...numbers) {
//     return numbers.reduce(function(previous, current){
//         return previous + current
//     }, 0)
// }

// let total = tinhTong(1, 2, 3, 4, 5)
// console.log(total)

// 10: Arow function

// var teo = {
//     name : "Teo",
//     age: 10,    
//     dosomething: function(){
//         let cb = () => {
//             console.log(this.name)
//         }
//         cb()
//     }
// }

// teo.dosomething()

let arrNumbers = [1,3,5,7,9]

let newArr = arrNumbers.map((element) => element * 2)

console.log(newArr)
