var classSrc = document.getElementsByClassName("tv");
var showValue =  document.getElementById("showValue");
var tvCalc = document.getElementById("hasil");
var arraVal = {};


function dis(a,b) {
    document.getElementById("a").value += a;
    document.getElementById("b").value += b;
    // console.log(a,b);
}

for(var i =0; i< classSrc.length; i++){
    var singleClass = classSrc[i];

    singleClass.onkeyup = function(e){
        var val = this.value;

        if(!val.match("^[0-9\-]*$")){
            delete arraVal[this.id];
        }else{
            arraVal[this.id] = val;
        }
        console.log(arraVal);
    }
}

showValue.onclick = function(e){
    if(Object.keys(arraVal).length == 2){
        var a = arraVal.a;
        var b = arraVal.b;
        var steps = "";
        var sign = b < 0 ? "" : "+";

        steps += "⇔ " + " "+ a +"𝓍 "+ sign +" "+ b +"  = 0 \n";
        steps += "⇔ " + " "+ a +"𝓍 " + " = " + -b + "\n";
        steps += "⇔ " + " "+ "𝓍 = " + -b + " / " + a + "\n";
        steps += "⇔ " + " "+ "𝓍 = " + -b / a;
        console.log(steps);
        document.getElementById("hasil").innerText = steps;
        var output = document.querySelector(".output");
        output.style.display = "block";
        output.classList.toggle("output-style");
    }else{
        alert("Masukan Nilai Yang Masih Kosong");
    }
}

var classSrc2 = document.getElementsByClassName("sv");
var showValue2 = document.getElementById("showValue2");
var svCalc = document.getElementById("hasil2");
var arrVal2 = {};
for(var j = 0; j < classSrc2.length; j++) {
    var everyClass = classSrc2[j];

    everyClass.onkeyup = function(e) {
        var val2 = this.value;
        if(!val2.match("^[0-9\-]*$")) {
            delete arrVal2[this.id];
        } else {
            arrVal2[this.id] = val2;
        }
        console.log(arrVal2);
    }
}

// showValue2.onclick = function(e) {
//     if(Object.keys(arrVal2).length == 4 ) {
//         var aa = arrVal2.aa;
//         var bb = arrVal2.bb;
//         var cc = arrVal2.cc;
//         var dd = arrVal2.dd;
//         var cd = arrVal2.cc * arrVal2.dd;
//         var ca = arrVal2.cc - arrVal2.aa;
//         var finalResultLeft = cd + parseInt(bb);
//         var stepss = "";
//         var signs = bb < 0 ? "" : "+";

//         stepss += "⇔ "+ aa + "𝓍 " + signs + " " + bb + " > " + cc + "(𝓍 - " + dd + ")\n";
//         stepss += "⇔ "+ aa + "𝓍 " + signs + " " + bb + " > " + cc + "𝓍 - " + cd + "\n";
//         stepss += "⇔ "+ cd + " " + signs + " " + bb + " > " + cc + "𝓍 - " + aa + "𝓍\n";
//         stepss += "⇔ "+ finalResultLeft + " > " + ca + "\n";
//         console.log(stepss);
//         document.getElementById("hasil2").innerText = stepss;
//         var output2 = document.querySelector(".output2");
//         output2.style.display = "block";
//         output2.classList.toggle("output-style");
//     } else {
//         alert("Masukan Nilai Yang Masih Kosong");
//     }
// }