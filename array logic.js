// 1. Counting Number in Array
function hitungArr (nomor){
  let total = 0
  for (let i = 0; i < nomor.length; i++){
  if (typeof nomor[i] !== 'number') return "input error, masukkan angka";

    total +=nomor[i]
      
  }
  return total;

}

console.log(hitungArr([1,2,3,4,5]))

// 2. Reverse All Array
// Buatlah sebuah fungsi yang dapat membalik seluruh data yang ada di dalam array
function reverseArr(nilaiArr){
  function reverseData(data){
    let simpan = ""
    data = data.toString()
    for (let i = data.length-1 ; i >=0; i --){
        simpan += data[i]
    }
    return Number(simpan)
  }
  let indexArr = []
  for(let i = nilaiArr.length-1 ; i>=0; i--){
    if (typeof nilaiArr[i] !== 'number') return "input yang dimasukkan bukan angka"
    indexArr.push(reverseData(nilaiArr[i]))
  }
  return indexArr
}
console.log(reverseArr([123, 456]))

// // 3. Unique Array

function arrayUnik(array) {
    let result = []
    
    for(let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") return "input bukan angka"

      let duplikasi = false
      for(let x = 0; x< result.length; x++){
        if(result[x] === array[i]){
          duplikasi = true
          break
        }
      }
      if(duplikasi === false) {
        result.push(array[i])
      }
    }
    
    return result
  }
  console.log(arrayUnik([1,2,3,4,5,5,5,5]))
  
  // console.log(uniqueArray([123, 321, 123, 456,6987, 123, 123])) // ["abc", "caa"]
// 4. Shopping bubble tea
// Ceritanya david senang jajan bubble tea.
// ini adalah list bubble tea yang diberi beserta harganya

function jajanBoba(uangJajan){
  const listBoba = [
    ['Xing Fu Tang', 38000], 
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
  ]
  console.log("David mulai jajan dengan uang " + uangJajan + " rupiah")
  for (let i = 0; i < listBoba.length; i++) {
    if (uangJajan - listBoba[i][1] >= 0){
      console.log("Dengan uang "+ uangJajan + ' cukup membeli ' + listBoba[i][0] + ' dengan harga ' + listBoba[i][1]);
      uangJajan -= listBoba[i][1];
      console.log("jadi sisa uang David sekarang " + uangJajan)
    }else{
      console.log("dengan uang " + uangJajan + " tidak bisa membeli " + listBoba[i])
    }
  }
  console.log("David pulang ke rumah dengan uang " + uangJajan)
}
jajanBoba(150000)
