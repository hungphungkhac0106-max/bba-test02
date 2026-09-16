# Cách khởi tạo git và add repo mới
`git init` => khởi tạo 3 vùng của git\
`git remote add origin <remote url>`\
`git add .` (đưa tất cả file lên staging area)\
`git add <ten_file1> <ten_file2> <ten_file3>` (add nhiều file)\
`git commit -m"message"` => message muốn cho người review commit biết\
`git push origin main`

---
## Cách khởi tạo một project mới
`npm init playwright@latest`

## Cách chạy file Javascript
Mở Terminal\
Gõ `node {đường dẫn đến file}/tên file.js`\
ex: node folder-1/test-01.js
## Copy nhanh 1 dòng code
để chuột ở cuối dòng code, bấm `Ctrl+c`, `Ctrl+v`
## Khai báo biến
`let tenBien = "giá trị"`

---
# Git
3 vùng trong Git: **working directory**, **staging area**, **repository**\
câu lệnh: `git status` => kiểm tra trạng thái của repo hiện tại\
mới khởi tạo git bằng lệnh `Git init` => các file sẽ ở stt Working (màu đỏ)\
=> `git add .` => file sẽ sang vùng staging (màu xanh lá)\
=> `git commit -m"commit name"` => file sẽ được commit lên vùng Repository => file sẽ ko nhìn thấy ở đâu

## Git log 
Danh sách các công việc đã được commit, gồm: commit id, author, date commit & commit name

## Git - cấu hình
Trước khi commit cần cho git biết bạn là ai, email là gì\
câu lệnh để set giá trị mặc định cho toàn bộ commit
`git config --global user.name "your name"`
`git config --global user.email "your email"`\
câu lệnh để set giá trị cho một repo nhất định\
`git config user.name "your name"`
`git config user.email "your email"`\
câu lệnh để list toàn bộ git commit\
=> `git config --list`

## Git commit convention
**Convention** là quy tắc để cả team làm việc chung theo\
Type (loại commit): short description (<50 kí tự)

## Type of commit: 3 loại chính
**Feat**: thêm tính năng mới, testcase mới\
**Fix**: sửa lỗi 1 test trước đó\
**Chore**: sửa lỗi nhỏ lẻ, chính tả, xoá file ko dùng tới...\
ví dụ: git commit -m"fix: update code for test-01"\
git commit -m"feat: add code for test-02"

---
# Javascript
`console.log("Hello, World!");`\
`node ten_file` => chạy file js\
`node path/file_name` => chạy file trong thư mục 

## Comment trong JS
Thêm dấu // trước đầu 1 dòng => cách vô hiệu hoá tạm thời 1 đoạn code, đoạn code được comment sẽ bị bỏ qua, ko thực thi\
Bôi đen nhiều dòng & bấm Ctrl + // => comment nhiều dòng\
Thêm dấu /* dòng 1, dòng 2 */ => comment nhiều dòng

## Biến (Variable) & Hằng (Constant)
**Biến** là thay đổi được giá trị\
**Khai báo biến**:\
`let <tên biến> = <"giá trị">;`\
ex: let myName = "Hưng";\
**Hằng** là giá trị cố định, ko thay đổi\
`const <tên hằng> = <"giá trị">;`

## Kiểu dữ liệu - Data type
là loại dữ liệu của biến được gắn 
có 8 kiểu dữ liệu, chia thành 2 nhóm chính:
- Kiểu dữ liệu nguyên thuỷ (primitive types):
    - String: Chuỗi kí tự\
 const myName = "Hưng"; // Dùng dấu nháy kép\
 const message = 'Hưng'  // Dùng dấu nháy đơn\
 const template = `Age: 18`  // Dùng dấu backtick 
    - Number: kiểu số nguyên và số thực.\
        - ex: const age = 18 (số nguyên);\
    const price = 9.99 (số thực)\
    const infinity = Infinity (số vô hạn)\
    const notANumber = NaN (số ko phải là số) => phép tính 2 gía trị khác loại, vd số / string
    - **Boolean**: kiểu giá trị logic\
        - const isPlaywright = true;\
        const isPython = false;
    - Undefined, null, symbol, BigInt
- Kiểu dữ liệu tham chiếu (reference types):
    - Object\

=> Muốn biết kiểu dữ liệu của biến là gì, gõ lệnh:\
`console.log(typeof <tên biến>);`

## Toán tử so sánh
- dùng để so sánh 2 toán hạng\
`console.log(a < b);`

## Toán tử toán học
- cộng, trừ, nhân, chia...\
`const ketQua = a / b;`
`console.log(ketQua);`

## Toán tử logic
- dùng để kết hợp một hoặc nhiều điều kiện và trả về kết quả boolean
    - **&& (And)**: trả về đúng nếu cả 2 vế của mệnh đề đều đúng
    - **|| (OR)**: trả về đúng nếu một trong 2 vế của mệnh đề đúng 

## Toán tử một ngôi
- là toán tử **chỉ cần một toán hạng** để thưc hiện
- Có 2 loại:
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
        - x++;
        - x--;

## Toán tử chia dư (%)
- % sẽ trả về phần dư của phép tính\
    - ví dụ: 3%3 = 0 (vì 3 chia hết cho 3, dư 0)
    - 3%2 = 1 (vì 3 ko chia hết cho 2, dư 1)
    - 1%2 = 1 (vì 1 ko chia hết cho 2, dư 1)
- Ứng dụng tìm số chẵn, lẻ:
    - Nếu là số lẻ, chia dư cho 2 =1: x % 2 === 1
    - Nếu là số chẵn, chia dư cho 2 = 0: x % 2 === 0     

## In kết hợp giá trị chuỗi và biến với console.log()
- Cách 1: `console.log("message" + tên_biến)`
- Cách 2: `console.log("message", tên_biến)`
- Cách 3: nối chuỗi với toán tử +\

`const str1 = "Hello";
const str2 = "playwright Viet Nam"\
console.log(str1 + str2);`  

## Let, Const, Var
- Var: cũng là một biến, phạm vi theo hàm, không bị giới hạn bởi if, for, while. Biến khai báo trong if vẫn sống ở ngoài
- Hoisting: Var dùng trước khi khai báo vẫn chạy được. Js đẩy phần khai báo biến Var lên đầu hàm, nhưng giá trị thì chưa được gán. 
- Var khi khai báo lại đè lên nhau mà ko cảnh báo
    - vd: var user = "admin";
    - var user = "guest"
    - console.log(user); => "guest" (ko báo lỗi)

## Git - unstage
- Thao tác đưa 1 file đã commit lên vùng khác ngược về vùng trước đó
- `git restore --stage <file name>`
- `git restore --stage <file name1> <file name 2> <file name 3>`
- `git restore --stage .` => restore toàn bộ từ staging về working directory

## Git - un-commit
- Đưa nội dung commit cuối về vùng **staging** 
    - `git reset --soft HEAD~1`
- Đưa nội dung bao nhiêu commit kế cuối về vùng **staging**
    - `git reset --soft HEAD~3`
- Đưa nội dung commit cuối thằng từ vùng **Repository** về vùng **Working directory** 
    - `git reset HEAD~1`
- Commit đầu tiên không thể bị reset
- Nếu muốn reset thì xoá thư mục `.git` đi rồi init lại
    
## Git - undo commit message
- Thay đổi message của commit mới nhất
- `git commit --amend -m"message"`

## JS - câu điều kiện
- Cú pháp: `if (<điều kiện>) { 
// code...
}`
- Kết hợp nhiều điều kiện: `if (<điều kiện 1> && (And)/|| (OR) <điều kiện 2>) {
// code ...
}`

## JS - vòng lặp
- Vòng lặp dùng để **lặp lại 1 đoạn logic**. Có thể lặp **một số lần nhất định**, hoặc lặp vô hạn, tuỳ theo **điều kiện dừng**.
- Các loại vòng lặp:
    - for (i)
    - for (of)
    - for (each)
    - for (in)
    - while
    - do...while
### Cú pháp vòng lặp for (i)
- `for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code }`
- Trong đó:
    - **Điều kiện khởi tạo**: chạy **một lần duy nhất**, khi **vòng lặp bắt đầu**.
    - Điều kiện lặp: nếu **đúng** thì **chạy tiếp**, **sai** thì **dừng**
    - Cập nhật: chạy vào **mỗi cuối vòng lặp**, để thay đổi giá trị của biến đếm.
- Vd: `for (let i = 0; i < 5; i++) {
console.log("Xin chào!")
}` => kết quả: in ra 5 lần text "Xin chào"
    - Giải thích: 
        - Vòng 1: (i = 0)
        - Vòng 2: (i = 1)
            - Kiểm tra: i < 5 => đúng => chạy
            - Chạy logic: console.log...
            - Cập nhật: i++ => i = 2
        - Vòng 3 & 4 & 5: tương tự vòng 2
        - Vòng 6: (i = 5)
            - Kiểm tra: i < 5 => sai => dừng lại. Thoát khỏi vòng lặp 

## JS - Conventions
- Convention: quy tắc, giúp cho:
    - Code theo format chung dễ nhìn
    - Người khác trong team dễ đọc code
- Một số convention phổ biến:
    - **snake_case**: viết bằng chữ thường, cách nhau = dấu `_`
    - **kebab-case**: viết bằng chữ thường, cách nhau = dấu `-`
    - **camelCase**: chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu, vd: `tenBien`                
    - **PascalCase**: tất cả các chữ cái đầu viết hoa, vd: `TenBien`
    - **UPPER_CASE (SCREAMING_SNAKE_CASE)**: tương tự snake_case, viết hoa tất cả các chữ
- Sử dụng trong lớp PW K25:
    - kebab-case: đặt tên file, folder
    - camelCase: đặt tên biến, hàm
    - PascalCase: đặt tên class   

## JS - Object
- **Object** là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key - value 
- Vấn đề khi ko có Object:
    - Nếu khai báo biến thông thường dùng let thì phải khai báo nhiều lần và dữ liệu rời rạc, ko đồng nhất. Vd: một user có thông tin cơ bản tên, tuổi, email => dùng let phải khai báo 3 lần
    - Dùng qua Object thì chỉ cần gom lại **1 biến duy nhất**, dễ quản lý, dễ truyền đi.
    vd: let tenBien = {
        keyA(thuộc tính): "value",
        keyB: value,
        keyC: "giá trị"
    }; 

### Cách khai báo Object
**Cách 1: Object Literal** (phổ biến nhất)

```
let/const tenBien = {
        keyA(thuộc tính): "value",
        keyB: value,
        keyC: "giá trị"
    };
```

**Cách 2**: dùng `new Object()`

```
let xe = new Object(); 
xe.hang = "Toyota; 
xe.mau = "Trắng"; 
xe.namSanXuat = 2023;
```
#### Quy tắc đặt tên key
- Key thường là **string**, ko cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (ko có dấu cách, ký tự đặc biệt).
- Nếu key có dấu cách hoặc ký tự đặc biệt -> **bắt buộc đặt trong dấu ngoặc kép**
- vd: 
```
let sinhVien = {
    hoTen : "Abc",
    "dia Chi" : "Bcd",
    'que Quan': "Cdf"
};
```
### Truy xuất dữ liệu trong Object

Cách 1: Dot notation (dấu chấm)
```
let sinhVien = {
    hoTen : "Abc",
    "dia Chi" : "Bcd",
    'que Quan': "Cdf"
};
console.log(sinhVien.hoTen);
```
Cách 2: Bracket notation (dấu ngoặc vuông)
```
let sinhVien = {
    hoTen : "Abc",
    "dia Chi" : "Bcd",
    'que Quan': "Cdf"
};
console.log(sinhVien["dia Chi"]);
console.log(sinhVien['que Quan']);
```
Bracket notation dùng cho key có chứa dấu cách hoặc ký tự đặc biệt

### Gắn giá trị cho Object
```
let sinhVien = {
    hoTen: "A",
    tuoi: 22
};
// Update giá trị của key
sinhVien.tuoi = 20;
console.log(sinhVien.tuoi);

// Thêm key mới (key chưa tồn tại sẽ tự tạo mới)
sinhVien.email = "abc@gmail.com";
console.log(sinhVien);
```
### Thêm, sửa, xoá Object
Thêm
```
let product = { ten: "Áo thu"};
product.gia = 100000;  // thêm = dot
product["mau Sac"] =. "Trắng";  // thêm = bracket 
```

Sửa
```
tenBien.thuocTinh = "value"
```
Xoá
```
delete tenBien.thuocTinh;
```

### Object lồng nhau (Nested Object)
Giá trị (value) của một key có thể là bất kỳ kiểu dữ liệu nào, kể cả là 1 Object khác
```
let sinhVien = {
    hoTen: "Abc",
    tuoi: 20,
    diaChi: {
        soNha: 1,
        duong: "Bcd",
        thanhPho: {
            ten: "Đà Nẵng",
            maBuuDien: 550000
        }
    }
};
```
Truy xuất Object lồng nhau
```
console.log(sinhVien,diaChi.soNha);
console.log(sinhVien.diaChi.thanhPho.maBuuDien);
```
Số cấp Object lồng nhau ko giới hạn, nhưng hạn chế 3 object trở lại

## JS - Array
- **Array** (Mảng) là kiểu dữ liệu dùng để lưu trữ **một danh sách có thứ tự** các giá trị.
- Array giống như một **danh sách đánh số** - mỗi phần tử có vị trí (index) bắt đầu từ 0.
- Khi khai báo Array, chỉ 1 biến duy nhất chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua.
- Cú pháp: `let/const tenBien = ["ten biến", "tên biến 2", "tên biến 3"...];`
- Phân biệt Array & Object: 
    - Array có thể lưu biến theo thứ tự, khi cần lấy giá trị của một biến chỉ cần lấy theo số thứ tự
    - vd: 
    ```
    let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
    console.log(monHoc[3]); => đưa ra giá trị là "Anh".
    console.log(monHoc); => đưa ra tất cả các biến
    ```
### Cách khai báo Array
- Cách 1: Array Literal (phổ biến nhất)
```
let/const tenBien = ["ten biến", "tên biến 2", "tên biến 3"...];
let/const tenBien = [1,2,3.5,5];
let/const tenBien = []; // mảng rỗng 
```
- Cách 2: Dùng new Array()

```
let/const tenBien = new Array("tên biến 1", "tên biến 2", "tên biến 3");
```

- Array có thể chứa nhiều kiểu dữ liệu khác nhau

```
let/const tenBien = ["string", number, boolean, null, {lop: "Playwright"}];
```

- Nhưng trong thực tế nên giữ các phần tử cùng kiểu dữ liệu để dễ xử lý.


### Truy xuất dữ liệu trong Array

- Lấy phần tử theo index:
    - Index bắt đầu từ 0, ko phải từ 1

```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
console.log(monHoc[3]); // "Anh"
console.log(monHoc[5]); // undefined - ko tồn tại
```
- Đếm số phần tử: `.length`
```
console.log(monHoc.length); // 5
```
- Lấy phần tử cuối cùng:
```
let/const tenBien = tenBien[tenBien.length -1]; // 4
```
- tương tự lấy vị trí index thứ mấy thì dùng length -x
```
let/const tenBien = tenBien[tenBien.length -3]; // 1
```

Gán lại giá trị theo index
```
tenBien[1] = "giá trị mới";
tenBien[tenBien.length -number] = "giá trị mới";
```
vd: update môn "Lý" trong mảng thành môn "Vật Lý" và "Hoá" thành "Hoá học"
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
monHoc[1] = "Vật Lý";
console.log(monHoc); //  ["Toán", "Vật Lý", "Hoá", "Anh", "Tin"]
monHoc[monHoc.length -3] = "Hoá Học"
console.log(monHoc); //  ["Toán", "Vật Lý", "Hoá Học", "Anh", "Tin"]
```

### Thêm, xoá phần tử Array
- Thêm vào cuối: `.push()`
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
monHoc.push("Văn"); 
console.log(monHoc); // ["Toán", "Lý", "Hoá", "Anh", "Tin", "Văn"]
```
- Thêm vào đầu: `.unshift()`
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
monHoc.unshift("Văn"); 
console.log(monHoc); // ["Văn", "Toán", "Lý", "Hoá", "Anh", "Tin"]
```
- Xoá phần tử cuối: `.pop()`
```
let monBiXoa = monHoc.pop();
console.log(monBiXoa); // ["Tin"]
console.log(monHoc); // ["Văn", "Toán", "Lý", "Hoá", "Anh"]
```
- Xoá phần tử đầu: `.shift()`
```
let monBiXoa = monHoc.shift();
console.log(monBiXoa); // ["Văn"]
console.log(monHoc); // ["Toán", "Lý", "Hoá", "Anh"]
```

### Kết hợp Array với vòng lặp
- Để xử lý hàng loạt dữ liệu
```
let diemSo = [7,9,5,3,10];
for (let i = 0; i<= diemSo.length; i++){
    console.log(`Học sinh ${i+1}: ${diemSo[i]}` điểm)
}; 
// Học sinh 1: 7 diểm
// Học sinh 2: 9 điểm
// Học sinh 3: 5 điểm
// Học sinh 4: 3 điểm
// Học sinh 5: 10 điểm
```

## JS - Function (Hàm)
- **Function (Hàm)** là một khối lệnh được đặt tên, có thể **gọi lại nhiều lần** mà ko cần viết lại code
- Cú pháp:
```
function tenHam() {
    code...
}
```
- Ví dụ:
```
function chaoMung(){
    console.log(=========);
    console.log("Xin chào! Chào mừng bạn đến với Playwright course");
    console.log(=========);
}
chaoMung();
```
### Quy tắc đặt tên hàm
- Dùng **camelCase**
- Nên bắt đầu bằng động từ
- Tên phải diễn tả hành động mà hàm thực hiện

### Gọi hàm - Function thực thi
```
tenHam();
```
### Function với tham số (Parameter)
- Tham số là các giá trị thay đổi truyền vào cho hàm
- Khi gọi hàm, điền giá trị cụ thể vào.
```
function tenHam() {
    console.log(`Xin chào + ${param1}+ ${param2}`);
}
tenHam(argument1, argument2); // "Xin chào {argument1} {argument2}"
```

### Phân biệt Parameter (tham số) và Argument (đối số)
- Parameter (tham số): Tên biến đặt trong dấu `()` khi khai báo hàm
- Argument (đối số): giá trị thật khi thực thi hàm

## JS - Array utils functions
- Hàm **Map**: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
- Ví dụ:
```
const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num *2);

console.log(doubled); // [2,4,6,8,10]
console.log(numbers); // [1,2,3,4,5]
```
- Map kết hợp với Object -> khai báo mảng mới có chứa nhiều phần tử hơn
- Ví dụ:
```
const students = ["An", "Bằng", "Công"];
const studentList = students.map((name, index) => ({
    id: index + 1,
    name: name,
    maSinhVien: `SV00${index + 1}`
}));
console.log(studentList);
//[
    {id: 1, name: 'An', maSinhVien: 'SV001'},
    {id: 2, name: 'Bằng', maSinhVien: 'SV002'},
    {id: 3, name: 'Công', maSinhVien: 'SV003'},
]
```
- Hàm **filter** : Tạo mảng mới chỉ chứa các phần tử thoả mãn điều kiện trong hàm callback. Trả về mảng đã được lọc
- Ví dụ: 
```
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2,4,6,8,10]
```
- Ví dụ 2:
```
const products = [
    {name: 'iPhone', price: 300000000, category: 'phone', inStock: true },
    {name: 'Samsung', price: 250000000, category: 'phone', inStock: false },
    {name: 'iPad Pro', price: 430000000, category: 'tablet', inStock: true },
    {name: 'Macbook Air', price: 320000000, category: 'laptop', inStock: true },
    {name: 'Airpod', price: 150000000, category: 'accessory', inStock: true },
];
// Lọc sản phẩm còn hàng
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts); // 4

// Lọc sp giá dưới 30 triệu
const affordableProducts = products.filter(product => product.price < 30000000);
console.log(affordableProducts); 

// Lọc nhiều điều kiện: điện thoại & còn hàng:
const availablePhones = products.filter(product => product.category === 'phone' && product.inStock);
console.log(availablePhones);
```

- Hàm **find** : tìm và trả về phần tử đầu tiên trong mảng thoả mãn điều kiện. Trả về undefined nếu ko tìm thấy
- ví dụ:
```
const numbers = [1,5,3,8,2,10,7];

// Tìm số chẵn đầu tiên
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8 (ko trả về 2 & 10, chỉ trả về số đầu tiên thoả điều kiện là 8)

// Tìm số > 6
const greaterThanSix = numbers.find(num => num > 6);
console.log(greaterThanSix); //8

// Tìm số âm
const negativeNumbers = numbers.find (num => num < 0);
console.log(negativeNumbers); //undefined
```
- ví dụ 2: 
```
const users = [
    { id: 001, name: 'An', role: 'admin', active: true },
    { id: 002, name: 'Bằng', role: 'user', active: false },
    { id: 003, name: 'Công', role: 'admin', active: true },
    { id: 004, name: 'Danh', role: 'user', active: true },
];

// Tìm user theo ID
const userID = 003;
const user = users.find(u => u.id === userID);

// Tìm admin đầu tiên
const firstAdmin = users.find (u => u.role === 'admin');

// Tìm user ko active
const inactiveUser = users.find (u => !u.active);
```
- Hàm **reduce** : duyệt qua mảng và tích luỹ các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa tên hàm callback 

```
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);
// accumulator: 0, current: 1 -> return 1
// accumulator: 1, current: 2 -> return 3
// accumulator: 3, current: 3 -> return 6
// accumulator: 6, current: 4 -> return 10
// accumulator: 10, current: 5 -> return 15

console.log(sum); //15
```
- Ví dụ 2:
```
const cart = [
    {product:'Laptop', price: 20000000, quantity: 1},
    {product:'Mouse', price: 300000, quantity: 2},
    {product:'Keyboard', price: 800000, quantity: 1},
    {product:'Monitor', price: 5000000, quantity: 2}
];

// Tính tổng tiền giỏ hàng
const totalAmount = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-VN')}đ`);
// Tổng tiền: 31.400.000đ

// Tính tổng số lượng sản phẩm
const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
console.log(`Tổng số sản phẩm: ${totalItems}`);
// Tổng số sản phẩm: 6
```
- Hàm **some** : kiểm tra xem có ít nhất một phần tử trong mảng thoả mãn điều kiện hay ko. Trả về true/false
- ví dụ:
```
const numbers = [1,3,5,7,8,9];
// Kiểm tra có số chẵn ko?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có ít nhất một phần tử là 8)

//Kiểm tra có số > 10 ko?
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log(hasGreaterThan10); //false

// Dừng ngay khi tìm thấy
const hasEvenWithLog = numbers.some (num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
});
//Checking: 1
//Checking: 3
//Checking: 5
//Checking: 7
//Checking: 8
// => Dừng, ko kiểm tra tiếp phần tử 9
```
- ví dụ 2: 
```
const user = {
    name: 'Nguyễn Văn A',
    roles: ['user', 'editor']
};

const adminRoles = ['admin', 'superadmin'];
const editorRoles = ['editor', 'admin'];
// Kiểm tra user có quyền editor ko?
const canEdit = user.roles.some(role => editorRoles.includes(role));
console.log(canEdit); // true

// Kiểm tra user có phải admin ko?
const isAdmin = user.roles.some(role => adminRoles.includes(role));
console.log(isAdmin); // false

// Hàm kiểm tra quyền tổng quát
function hasPermission(userRoles, requiredRoles){
    return userRoles.some(role => requiredRoles.includes(role));
}
console.log(hasPermission(user.roles, ['viewer', 'editor'])); // true
```

- Hàm **every** : tương tự some, nhưng kiểm tra xem tất cả phần tử trong mảng có thoả mãn điều kiện hay ko? Trả về true/false
- ví dụ:
```
const numbers = [2,4,6,8,10];

//Kiểm tra tất cả là số chẵn?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

//Kiểm tra tất cả > 5 ?
const isGreaterThan5 =  numbers.every(num => num > 5);
console.log(isGreaterThan5); // false (vì có 2, 4 < 5)

// Dừng ngay khi gặp false
const checkWithLog = numbers.every(num => {
    console.log(`Checking: ${num}`);
    return num < 5;
});
// Checking: 2
// Checking: 4
// Checking: 6
// => dừng tại 6, ko kiểm tra 8,10
console.log(checkWithLog);  //false
```
- ví dụ 2:
```
const orderItems = [
    {product: 'iPhone', quantity: 1, inStock: 5, price: 25000000},
    {product: 'AirPods', quantity: 2, inStock: 10, price: 4000000},
    {product: 'Case', quantity: 1, inStock: 20, price: 500000},
];

// Kiểm tra tất cả sp còn đủ hàng ko?
const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
console.log(allAvailable); // true

// Kiểm tra tất cả sp có giá hợp lệ?
const allValidPrices = orderItems.every(item => item.price > 0);
console.log(allValidPrices); //true

// Kiểm tra giới hạn số lượng (max 10 mỗi sp)
const withinQuantityLimit = orderItems.every (item => item.quantity <= 10);
console.log(withinQuantityLimit); // true 
```

- Hàm **sort** : sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc
- ví dụ:
```
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange'] => sort theo alphabet
```
- ví dụ 2: Sort với kiểu dữ liệu số (number) sẽ KHÔNG ĐÚNG theo mặc định. ex: [10,5,40,25,1000,1] => khi dùng sort => [1,10,1000,25,40,5] 
```
Cách Đúng: dùng compare function
const numbers = [10,5,40,25,1000,1];
numbers.sort((a,b) => a-b); // tăng dần
console.log(numbers); // [1,5,10,25,40,1000]
numbers.sort((a,b) => b-a); // giảm dần
console.log(numbers); // [1000,40,25,10,5,1]
```
- Compare function trả về:
    - Số âm: a đứng trước b
    - Số 0: giữ nguyên thứ tự
    - Số dương: b đứng trước a

- ví dụ:
```
const arr = [3,1,2];
arr.sort((a,b) => {
    console.log(`Compare ${a} với ${b}`);
    if (a < b) return -1; // a trước b
    if (a > b) return 1; // b trước a
    return 0; // bằng nhau
});
// Compare 3 với 1
// Compare 3 với 2
// Compare 1 với 2
console.log(arr);  // [1,2,3]

//Viết gọn với phép trừ
arr.sort((a, b) => a - b); // tương đương code trên
```

- Hàm Push : Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới
- ví dụ:
```
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength) = 3

//Push nhiều phần tử cùng lúc
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']
```

- pop: xoá và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài
- ví dụ:
```
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
const lastFruit = fruits.pop()
;
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
console.log(lastFruit) // 'mango' (phần tử bị xoá)

// Pop từ mảng rỗng
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```

- shift: Xoá và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài
- ví dụ:
```
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
const firstFruit = fruits.shift()
;
console.log(fruits); // ['banana', 'orange', 'grape', 'mango']
console.log(firstFruit) // 'apple' (phần tử bị xoá)

// Shift từ mảng rỗng
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []
```

- Unshift: Thêm một hoặc nhiều phần tử vào đẩu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.
- ví dụ:
```
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
const newLength = fruits.unshift('anchor');
console.log(fruits); // ['anchor', 'apple', 'banana', 'orange', 'grape', 'mango']
console.log(newLength); // 6

// Unshift nhiều phần tử cùng lúc
fruits.unshift('pinapple', 'avocado');
console.log(fruits); // ['pinapple', 'avocado','anchor', 'apple', 'banana', 'orange', 'grape', 'mango']
```