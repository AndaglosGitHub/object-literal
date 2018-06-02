countProfit = (shoppers) => {
	let listBarang = [
	['Sepatu Stacattu', 1500000, 10],
	['Baju Zoro', 500000, 2],
	['Sweater Uniklooh', 175000, 1]
	];
	let hasil = []

	for (var i = 0; i < listBarang.length; i++) {
		let pembeli = [];
		let stokProduk = listBarang[i][2];
		let jumlahBeli = 0;


		let dataPembelian = {
			product : listBarang[i][0],
			shoppers : listBarang[i][2] < 0 ? [] : pembeli,
			leftOver : listBarang[i][2],
			totalProfit : listBarang[i][1],
		}

		shoppers.forEach((data) => {
			if (data.product == listBarang[i][0]) {
				if (dataPembelian.leftOver >= data.amount) {					
					pembeli.push(data.name);
					dataPembelian.leftOver -= data.amount
				}
			}
		});

		dataPembelian.totalProfit *= (listBarang[i][2] - dataPembelian.leftOver)

		hasil.push(dataPembelian)

	}

	return shoppers == "" ? [] : hasil

}


console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]))
console.log()

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]))
console.log()

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]))
console.log()

console.log(countProfit([]));