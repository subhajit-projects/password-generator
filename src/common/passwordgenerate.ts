let passwordgenerate = (
    isDigit: boolean,
    isUpperCase: boolean,
    isLowerCase: boolean,
    isSymbol: boolean,
    passwordLength: number
): string => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const digit = "0123456789";
    const symbol = "!@#$%^&*()";
    let passwordHelpString = "";
    let passwordIs = "";
    if(isDigit) {
        passwordHelpString += digit;
    }
    if(isSymbol) {
        passwordHelpString += symbol;
    }
    if(isUpperCase) {
        passwordHelpString += upperCase;
    }
    if(isLowerCase) {
        passwordHelpString += lowerCase;
    }
    
    // console.log(isDigit, isUpperCase, isLowerCase, isSymbol);

    /*var randomNumber = Math.floor(Math.random() * passwordHelpString.length);
    // passwordHelpString += passwordHelpString.substring(randomNumber, randomNumber +1);
    passwordIs = passwordHelpString.substring(0, 11);
    console.log(passwordHelpString, passwordIs, Math.random() * passwordHelpString.length)*/
    while(passwordLength !== 0) {
        let pickcharpos = Math.floor(Math.random() * passwordHelpString.length);
        passwordIs += passwordHelpString.substring(pickcharpos, pickcharpos+1);
        passwordLength--;
        if(passwordLength < 4) {
            let len = 0;
            if(isDigit) {
                if(passwordIs.match(/[0-9]/g) === null) {
                    len = Math.floor(Math.random() * digit.length);
                    passwordIs += digit.substring(len, len+1);
                    passwordLength--;
                }
            }
            if(isSymbol) {
                const regx = /^[0-9A-Za-z]+$/;
                if(regx.test(passwordIs)) {
                    len = Math.floor(Math.random() * symbol.length);
                    passwordIs += symbol.substring(len, len+1);
                    passwordLength--;
                }
            }
            if(isUpperCase) {
                if(passwordIs.match(/[A-Z]/g) === null) {
                    len = Math.floor(Math.random() * upperCase.length);
                    passwordIs += upperCase.substring(len, len+1);
                    passwordLength--;
                }
            }
            if(isLowerCase) {
                if(passwordIs.match(/[a-z]/g) === null) {
                    len = Math.floor(Math.random() * lowerCase.length);
                    passwordIs += lowerCase.substring(len, len+1);
                    passwordLength--;
                }
            }
        }
    }

    //console.log(passwordIs);
    return passwordIs;
}

export default passwordgenerate;