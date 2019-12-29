// 6.	Cho một mảng gồm 5 phần tử tìm phần nhỏ nhất
let arr = [2, 9, 0, 6, 5];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
        min = arr[i];
    }
}
console.log(`Phần tử nhỏ nhất trong mảng là : ${min}`);



ex6 = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    console.log(`Phần tử nhỏ nhất trong mảng là : ${min}`);
}
ex6([2, 9, 0, 6, 5]);