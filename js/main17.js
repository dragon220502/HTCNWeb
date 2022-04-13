function KiemTraTenDN(){
    var re = /^[a-z]\w*/;
    if(re.test(document.getElementById('txtDN').value.trim())==false){
        tendn.innerText = " * bắt buộc, băt đầu bằng ký tự";
        return false;
    }
    else{
        tendn.innerText = " *";
        return true;
    }
}
function KiemTraPassWord(){
    var re = /(?=.*\d).{6,}/;
    if(re.test(document.getElementById('txtMK').value.trim()) == false){
        mk.innerText = " * Phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }
    else{
        mk.innerText = " *";
        return true;
    }
}
function KiemTraXacNhanPassword(){
    if(document.getElementById('txtXNMK').value != document.getElementById('txtMK').value){
        xnmk.innerText = " * Phải giống mật khẩu";
        return false;
    }else{
    xnmk.innerText = " *";
    return true;
     }
}
function KiemTraNgaySinh(){
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if(eval(today.getFullYear() - ns.getFullYear()) <=10){
        ngaysinh.innerText = " tuổi phải >10";
        return false;
    }else{
        ngaysinh.innerText = "";
        return true;
    }
}
function SubmitForm(){
    if(KiemTraTenDN() == false || KiemTraPassWord() == false || KiemTraXacNhanPassword() == false){
        alert("Bạn chưa nhập đầy đủ và đúng thông tin! ");
    }else{
        var tt1 = document.getElementById("txtName").value;
        var tt2 = document.getElementById("txtNS").value;
        w.document.write("<b>THONG TIN CA NHAN</b>");
        w.document.write("Ho ten: "+tt1+" <br>");
        w.document.write("Nam sinh: "+tt2+" <br>");
    }
}