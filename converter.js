module.exports = {
	convertToBinary: function(n) {
        let binary1 = "";
        switch(n) {
            case 0:
                binary1 ="0";
                return binary1;
                break;
            default:
                while(n >= 1){
                n % 2 == 0 ? binary1 += "0" : binary1 += "1";
                n = Math.floor(n/2);
                }
                let binary2 = "";
                for(let i = binary1.length -1 ; i >= 0; i--){
                    binary2 += binary1[i];
                }
                return binary2;
    }
    },
    convertToHexa: function(n) {
        let hex1 = "";
        if(n == 0){
            hex1 += "0";
            return hex1;
        }
        while (n>=1){
            switch(n%16) {
                case 15:
                    hex1 += "F";
                    break;
                case 14:
                    hex1 += "E";
                    break;
                case 13:
                    hex1 += "D";
                    break;
                case 12:
                    hex1 += "C";
                    break;
                case 11:
                    hex1 += "B"
                    break;
                case 10:
                    hex1 += "A";
                    break;
                default:

                    hex1 += n%16;

            }
            n = Math.floor(n/16);
        }
        let hex2 = "";
                for(let i = hex1.length -1 ; i >= 0; i--){
                    hex2 += hex1[i];
                }
                return hex2;
	}
}
