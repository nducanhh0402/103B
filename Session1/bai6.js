var tenSachGoc = prompt("Nhập tên sách:");
var soThuTu = prompt("Nhập số thứ tự của sách:");

var tenSachChuanHoa = tenSachGoc.trim().toUpperCase();

var maSach = "LIB - " + tenSachChuanHoa + " - " + soThuTu;

console.log("Tên sách gốc: " + tenSachGoc);
console.log("Mã sách sau chuẩn hóa: " + maSach);