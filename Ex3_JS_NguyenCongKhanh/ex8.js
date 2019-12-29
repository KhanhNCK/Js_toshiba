// 8.	Cho một mảng gồm 5 phần tử tính tổng các phần tử trong mảng
let arr=[2,3,2,6,6];
let result = 0;
for(let i = 0; i< arr.length; i++){
    result += arr[i];
}
console.log(`Tổng các phần tử trong mảng là : ${result}`);

ex8 = (arr) => {
let result = 0;
for(let i = 0; i< arr.length; i++){
    result += arr[i];
}
console.log(`Tổng các phần tử trong mảng là : ${result}`);
}
ex8([2, 9, 0, 6, 5]);
