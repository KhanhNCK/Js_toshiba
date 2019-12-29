// 2.	Tính giai thừa của n.
let n = 3;
let factor = 1;
if (n < 0) {
    console.log("Không có giai thừa");
}
else if (n == 0) {
    console.log(`Giai thừa của ${n} là : ${factor}`)
}
else {
    for (let i = n; i > 1; i--) {
        factor *= i;
    }
    console.log(`Giai thừa của ${n} là : ${factor}`);
}

// cách 2 loại bỏ giá trị âm ngay từ đầu 

// let n = 5;
// let factor = 1;
// while(n > 1) {
//     factor *= n ;
//     n--;
//  }
// console.log(`Giai thừa là : ${factor}`);


// cach 3 function
ex2 = (n) => {
    let factor = 1;
    if (n < 0) {
        console.log("Không có giai thừa");
    }
    else if (n == 0) {
        console.log(`Giai thừa của ${n} là : ${factor}`)
    }
    else {
        for (let i = n; i > 1; i--) {
            factor *= i;
        }
        console.log(`Giai thừa của ${n} là : ${factor}`);
    }
}
ex2(3);