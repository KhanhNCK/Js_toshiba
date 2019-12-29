// 3.	Tìm các số nguyên tố trong khoảng từ 1 đến n.

let n = 15;
let result = 0, i = 0, j = 0;
for (i = 2; i <= n; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
    }
    if (i == j) {
        console.log(i);
    }
}

// function

ex3 = (n) => {
    let i = 0, j = 0;
    for (i = 2; i <= n; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
        if (i == j) {
            console.log(i);
        }
    }
}
ex3(4)