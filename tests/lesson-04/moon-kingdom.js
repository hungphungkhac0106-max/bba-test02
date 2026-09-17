//Khai báo mảng các object pirates có các thuộc tính: name, 
const pirates = [
    {name: 'Luffy', bounty: 300000000, strength: 999},
    {name: 'Shanks', bounty: 55000000, strength: 350},
    {name: 'Zoro', bounty: 115000000, strength: 869},
    {name: 'Marshall', bounty: 220000000, strength: 743},
    {name: 'Kaido', bounty: 461000000, strength: 485},
];

// Sử dụng hàm map để tạo ra mảng mới awakendedPirates
const awakendedPirates = pirates.map(pirate => ({
    name : pirate.name.toUpperCase(),
    bounty: pirate.bounty * 2,
    strength: pirate.strength * 1.5
}));
console.log(awakendedPirates);

// Sử dụng hàm filter để lọc ra các thành viên có mức strength > 500. Đặt tên mảng mới là monsterTrioCandidates

const monsterTrioCandidates = pirates.filter(pirate => pirate.strength > 500);
console.log(monsterTrioCandidates);

// Tạo hàm printBountyLeaderboard
// Nhận vào tham số: crewList là mảng các object 

const crewList = [
    {name: 'Luffy', bounty: 300000000},
    {name: 'Shanks', bounty: 55000000},
    {name: 'Zoro', bounty: 115000000},
    {name: 'Marshall', bounty: 220000000},
    {name: 'Kaido', bounty: 461000000},
];

// Sắp xếp mảng thành viên theo thứ tự tiền thưởng (bounty) từ cao đến thấp

const printBountyLeaderboard = crewList.sort((a, b) => b.bounty - a.bounty);
console.log(printBountyLeaderboard);


// In ra bảng xếp hạng danh sách truy nã. Với top 3, hãy gắn kèm biểu tượng huy chương 
const medals = ["🥇","🥈","🥉"];
for (let i = 0; i < printBountyLeaderboard.length; i++){
    const pirate = printBountyLeaderboard[i];
    const icon = medals[i] || "  ";
    console.log(`${icon} ${i + 1}. ${pirate.name} - ${pirate.bounty}฿`); 
};