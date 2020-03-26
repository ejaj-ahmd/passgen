// Function for password generation

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

// Function for copy to clipboard

function copyFunc() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("copyTooltip");
    tooltip.style.width = "200px";
    tooltip.style.marginLeft = "-105px"
    tooltip.innerHTML = "Current Password Copied";
}

function copyDoneFunc() {
    var tooltip = document.getElementById("copyTooltip");
    tooltip.style.width = "140px";
    tooltip.style.marginLeft = "-75px"
    tooltip.innerHTML = "Copy to clipboard";
}