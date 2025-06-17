var globalVar= "Var"; //
let globalLet= "Let";
const globalConst= "Const";

{
    var blockVar= "Block Var"
    var blockLet= "Block Let"
    var blockConst= "Block Const"

}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"