// 9.	Cho một mảng gồm 5 phần tử tính trung cộng các phần tử trong mảng
let arr=[4,4,4,4,4];
let count = 0;
for(let i = 0; i< arr.length; i++){
    count += arr[i];
}
console.log(` Trung cộng các phần tử trong mảng là : ${count / arr.length}`);




ex9 = (arr) => {
let count = 0;
for(let i = 0; i< arr.length; i++){
    count += arr[i];
}
console.log(` Trung cộng các phần tử trong mảng là : ${count / arr.length}`);
}
ex9([4,4,4,4,4]);
