function convertToRoman(num) {
    var romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var decimalNumbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var output = "";
    for(var i=0;i<decimalNumbers.length;i++){
        while(num>=decimalNumbers[i]){
            output += romanNumerals[i];
            num -= decimalNumbers[i];
        }
    }
    console.log(output);
    return output;
}
convertToRoman(999);