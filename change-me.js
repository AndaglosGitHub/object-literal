changeMe = (arr) => {
	var no = 1;
	var tahunSekarang = new Date().getFullYear();

	arr.forEach((resp) => {
		var namaLengkap = `${no++}. ${resp[0]} ${resp[1]}`
		var umurSekarang = tahunSekarang - resp[3];		
		var objectNama = {
			firstName : resp[0],
			lastName : resp[1],
			gender : resp[2],
			age :umurSekarang > 0 ? umurSekarang : "Invalid Birth Year",
		}

		console.log(namaLengkap)
		console.log(objectNama)
	});
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
/*1. Christ Evans
{ firstName: 'Christ',
  lastName: 'Evans',
  gender: 'Male',
  age: 36 }
2. Robert Downey
{ firstName: 'Robert',
  lastName: 'Downey',
  gender: 'Male',
  age: 'Invalid Birth Year' }*/