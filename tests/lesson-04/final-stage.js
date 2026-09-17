// Đếm và in ra có bao nhiêu cặp số nguyên dương (a, b) từ 1 tới 100 sao cho tích chia hết cho 19
// Mỗi cặp số chỉ được tính 1 lần
// 2 số trong cặp được phép bằng nhau nếu thoả mãn điều kiện
let count = 0;
for (let a = 1; a <= 100; a++) {
    for (let b = a; b <= 100; b++) {
        if ((a * b) % 19 === 0) {
            console.log(`Cặp: (${a}, ${b})`);
        }
    }
}