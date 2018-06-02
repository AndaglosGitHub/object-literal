shoppingTime = (memberId, money) => {

  var produkDibeli = [];
  var sisaUang = money;
  var listPurchased = [
  ["Sepatu brand Stacattu","1500000"],
  ["Baju brand Zoro", "500000"],
  ["Baju brand H&N", "250000"],
  ["Sweater brand Uniklooh", "175000"],
  ["Casing Handphone", "50000"],
  ]

  listPurchased.forEach((data) => {

    if (sisaUang >= data[1]) {
      produkDibeli.push(data[0])
      sisaUang -= data[1]
    }

  });

  var hasilBelanja = {
    memberId: memberId,
    money: money,
    listPurchased: produkDibeli,
    changeMoney: sisaUang
  }

  if (memberId == "") {
    var hasil =  "Mohon maaf, toko X hanya berlaku untuk member saja";
  }else if (money < 50000) {
    var hasil =  "Mohon maaf, uang tidak cukup"
  }else if (memberId == undefined && money == undefined) {
    var hasil =  []
  }else{
    var hasil = hasilBelanja
  }

  return hasil

}


console.log(shoppingTime('1820RzKrnWn08', 2475000)); console.log()
console.log(shoppingTime('82Ku8Ma742', 170000)); console.log()
console.log(shoppingTime('', 2475000)); console.log()
console.log(shoppingTime('234JdhweRxa53', 15000)); console.log()
console.log(shoppingTime());