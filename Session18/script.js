const btnAdd = document.getElementById('btnAdd');
const form = document.getElementById('productForm');

function addProduct() {
    const id = document.getElementById('productId').value.trim();
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value.trim();

    if (!id || !name || !price) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (isNaN(price) || Number(price) <= 0) {
        alert("Giá sản phẩm phải là số dương!");
        return;
    }

    const tableBody = document.querySelector('#productTable tbody');
    const newRow = tableBody.insertRow(); 

    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${Number(price).toLocaleString()} VNĐ</td>
    `;

    form.reset();

    alert("Thêm sản phẩm thành công!");
}

btnAdd.addEventListener('click', addProduct);

form.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        addProduct();
    }
});