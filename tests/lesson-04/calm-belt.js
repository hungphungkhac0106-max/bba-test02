let navigatorName = "Luffy";
let currentHakiLevel = 3;
const meatQuantity = {
    islandA : 15,
    islandB : 25,
    islandC : 40,
};
// Tổng lượng thịt tiêu thụ ở 3 đảo, sau đó tính trung bình (tổng / 3)
const totalMeat = meatQuantity.islandA + meatQuantity.islandB + meatQuantity.islandC;
const averageMeat = totalMeat / 3;
console.log(`Tổng lượng thịt tiêu thụ: ${totalMeat}`);
console.log(`Trung bình lượng thịt tiêu thụ: ${averageMeat}`);

// In ra lượng thịt còn dư sau khi chia đều cho 3 thành viên cốt cán
const remainingMeat = totalMeat % 3;
console.log(`Lượng thịt còn dư sau khi chia đều: ${remainingMeat}`);