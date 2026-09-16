// Khai báo biến devilFruit có giá trị là "gomu-gomu".
let devilFruit = "gomu-gomu";
let effect = "";
// Sử dụng câu điều kiện if...else để xác định trạng thái thức tỉnh tương ứng
if (devilFruit === "gomu-gomu") {
    effect = "Gear 5 Unlocked!";
} else if (devilFruit === "mera-mera"){
    effect = "Flame Emperor!";
} else if (devilFruit === "ope-ope"){
    effect = "Room & Ope!";
} else if (devilFruit === "none"){
    effect = "Normal Human";
} else {
    effect = "Unknown Devil Fruit";
}
// In ra ngoài console trạng thái tương ứng
console.log(effect);