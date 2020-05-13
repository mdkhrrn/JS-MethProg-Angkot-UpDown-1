var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// Jika angkot Kosong
	if ( penumpang.length == 0 ){
		// Tambah penumpang diawal array
		penumpang.push(namaPenumpang);
		// Kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// Telusuri seluruh kursi dari awal
		for (var i = 0 ; i < penumpang.length ; i++){
			// Jika ada kursi kosong
			if ( penumpang[i] == undefined ){
				// Tambah dikursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// Jika sudah ada nama yang sama
			else if ( penumpang[i] == namaPenumpang ){
				// Tampilkan pesan kesalahannya
				console.log('Penumpang sudah ada didalam');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// Jika seluruh kursi terisi * ( akir pasti - 1 )
			else if ( i == penumpang.length - 1 ){
				// Tambah penumpang diakhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function( namaPenumpang, penumpang){
	// Jika angkot kosong
	if ( penumpang.length == 0 ){
		// Tampilkan pesan bahwa angkot kosong
		console.log('Angkot masih kosong !');
		// kembali
		return penumpang;
	} else {
		// Telusuri kursi dari awal
		for ( var i = 0 ; i < penumpang.length ; i++ ){
			// Jika nama penumpang sesuai
			if ( penumpang[i] == namaPenumpang ){
				// hapus penumpang menjadi undefined
				penumpang[i] = undefined;
				// kembali
				return penumpang;

			} 
			// Jika tidak ada nama yang sesuai & seluruh terisi
			else if ( i == penumpang.length - 1) {
				// tampilkan pesan kesalahannya
				console.log(penumpang + ' tidak ada didalam !')
				// kembali
				return penumpang;
			}
		}
	}	
}