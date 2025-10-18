const repeatString = function(str, num) {
    let strArg = "";
    if (num < 0){
        return "ERROR";
    } else if (num == 0) {
        return "";

    } else {
            for(let i = 0; i < num; i++){
        strArg += str;
    }
    return strArg;

    }


};

// Do not edit below this line
module.exports = repeatString;
