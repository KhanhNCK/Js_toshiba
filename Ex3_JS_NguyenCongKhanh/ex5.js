// 5.	Cho một mảng gồm 5 phần tử tìm phần tử lớn nhất
let arr=[2,9,2,6,5];
let max = arr[0] ;
for(let i = 0; i < arr.length; i++){
    if(max <= arr[i]){
        max = arr[i];
    }
}
console.log(`Phần tử lớn nhất trong mảng là : ${max}`);

ex5=(arr)=>{
    let max = arr[0] ;
    for(let i = 0; i < arr.length; i++){
    if(max <= arr[i]){
        max = arr[i];
    }
}
console.log(`Phần tử lớn nhất trong mảng là : ${max}`);
}
ex5([2,9,2,6,5]);