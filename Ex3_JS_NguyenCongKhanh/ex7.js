// 7.	Cho một mảng gồm 5 phần tử tìm phần tử lớn thứ hai trong mảng

let arr = [11, 9, 17, 6, 15];
let max = 1;
for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            max = arr[i];
            arr[i] = arr[j];
            arr[j] = max;
        }
    }
}
console.log(`Phần tử lớn thứ 2 trong mảng là : ${arr[1]}`);

ex7 = (arr) => {
    let max = 1;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;
            }
        }
    }
    console.log(`Phần tử lớn thứ 2 trong mảng là : ${arr[1]}`);
}
ex7([2, 9, 0, 6, 5]);



