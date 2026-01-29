var tenSach = prompt("Nhập tên sách:");
var namXuatBan = prompt("Nhập năm xuất bản của sách:");
var namHienTai = prompt("Nhập năm hiện tại:");

namXuatBan = Number(namXuatBan);
namHienTai = Number(namHienTai);

var tuoiSach = namHienTai - namXuatBan;

console.log("Sách: " + tenSach);
console.log("Năm xuất bản: " + namXuatBan);
console.log("Tuổi của sách: " + tuoiSach + " năm");