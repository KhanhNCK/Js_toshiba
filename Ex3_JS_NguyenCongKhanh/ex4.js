// 4.	Tính tổng các chữ số của n ví dụ n = 123 thì kết quả là 1 + 2 + 3

let n = 555555;
let result = 0;
while( n > 0){
    result += n % 10;
    n /= 10;
    n=Math.floor(n);
}
console.log(result);


ex4 = n =>{
    let result = 0;
    while( n > 0){
        result += n % 10;
        n /= 10;
        n=Math.floor(n);
    }
    console.log(result);
}
ex4(555555);