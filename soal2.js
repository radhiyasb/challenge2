function checkTypeNumber(givenNumber){
    // Memeriksa apakah parameter yang diberikan ada
    if (typeof givenNumber === 'undefined') {
        return "Error: Bro where is the parameter?";
    }
    
    // Memeriksa apakah parameter yang diberikan adalah angka
    if (typeof givenNumber !== 'number' || isNaN(givenNumber)) {
        return "Error : Invalid data type";
    }
    
    // Memeriksa apakah angka tersebut genap atau ganjil
    if (givenNumber % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
