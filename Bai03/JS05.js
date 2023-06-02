class TaiKhoanNganHang {
    constructor() {
        this.soDu = 0;
    }

    guiTien(soTien) {
        
        return this.guiTien = soTien
    }
    rutTien(soTien) {

        return this.rutTien = soTien
    }

    kiemTraSoDu(a) {
        return this.guiTien - this.rutTien
    }   
}

// Ví dụ sử dụng
const taiKhoan = new TaiKhoanNganHang();
taiKhoan.guiTien(1000);
taiKhoan.rutTien(200);
console.log(taiKhoan.kiemTraSoDu()); // Kết quả: 800
