const removeFromArray = function(args, ...value) {
    /*
    using filter method loop each value and check if the value is present 
    in the ...value (which turn the multiple args into array) and if it does then remove  or filter out that value 
    and return if the arg is not present in the value i.e !value.includes(arg) 
    */ 
    let remove = args.filter(arg =>!value.includes(arg));
    return remove;

}
   

// Do not edit below this line
module.exports = removeFromArray;
