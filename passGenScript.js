var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$^&*-/,.";
var temp='';

function generatePass(passLength) {
    temp='';
    var passLength = document.getElementById("length").value
    for (var i = 0; i < passLength; i++) {
        temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
        
    }
    // console.log(temp);
    return document.getElementById('output').value = temp;
}



// function pupulateForm() {
//     var x = document.getElementById("length").value
//     return generatePass(x);
// }