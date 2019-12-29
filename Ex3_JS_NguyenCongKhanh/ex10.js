// 10.	Cho một mảng gồm 5 phần tử kiểm tra xem mảng có phải cấp số cộng hay không 
let arr = [1, 2, 5, 4, 5]
let count = [];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        count.push(Math.abs(arr[i] - arr[j]));
        break;
    }
}
for (let i = 1; i < count.length; i++) {
    if (count[0] !== count[i]) {
        console.log("Mảng đã cho không là cấp số cộng")
        break;
    }
    else {
        console.log("Mảng đã cho là cấp số cộng")
        break;
    }
}


ex10 = (arr) => {
    let count = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            count.push(Math.abs(arr[i] - arr[j]));
            break;
        }
    }
    for (let i = 1; i < count.length; i++) {
        if (count[0] !== count[i]) {
            console.log("Mảng đã cho không là cấp số cộng")
            break;
        }
        else {
            console.log("Mảng đã cho là cấp số cộng")
            break;
        }
    }
}
ex10([1, 2, 5, 4, 5])
