function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let var2 = new RegExp("bersama");
  console.log(var2.exec(data));
}
regex()