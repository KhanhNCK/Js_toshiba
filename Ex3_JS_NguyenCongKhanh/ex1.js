// 1.	Tính tổng các số từ 1 đến n.
let n = 6;
let count = 0;
for(let i = 1; i <= n; i++){
    count += i;
}
console.log(`Tổng các số từ 1 đến ${n} là : ${count}`);

// function
 let sum =(n)=>{
    let count = 0;
    for(let i = 1; i <= n; i++){
        count += i;
    }
    console.log(`Tổng các số từ 1 đến ${n} là : ${count}`);
 }
sum(5);