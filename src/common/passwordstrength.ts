let passwordstrength = (
    password: string
): string => {
    const notSpecialCharRegx = /^[0-9A-Za-z]+$/;
    const upperCaseRegx = /[A-Z]/g;
    const lowerCaseRegx = /[a-z]/g;
    const digitCaseRegx = /[0-9]/g;
    let strength = 0;
    if(password.length > 4) {
        strength = strength+2;
    }
    if(password.length > 8) {
        strength = strength+2;
    }
    if(password.length > 10) {
        strength = strength+4;
    }
    if(password.length > 14) {
        strength = strength+5;
    }
    if(!notSpecialCharRegx.test(password)) {
        strength = strength+3;
    }
    if(upperCaseRegx.test(password)) {
        strength = strength+2;
    }
    if(lowerCaseRegx.test(password)) {
        strength = strength+2;
    }
    if(digitCaseRegx.test(password)) {
        strength = strength+2;
    }

    if(strength <= 4) {
        return "very_weak";
    }
    if(strength > 4 && strength <= 7) {
        return "weak";
    }
    if(strength > 7 && strength <= 12) {
        return "good";
    }
    if(strength > 12) {
        return "strong";
    }
    return "";
    // return strength;
}

export default passwordstrength;