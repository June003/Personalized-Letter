window.onload=function(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("datePicker")[0].setAttribute('min', today);
}

function c1(){
    document.getElementById('left').style.backgroundColor = 'rgb(245, 232, 234)';
}
function c2(){
    document.getElementById('left').style.backgroundColor = 'rgb(241, 250, 241)';
}
function c3(){
    document.getElementById('left').style.backgroundColor = 'rgb(217, 229, 243)';
}
function c4(){
    document.getElementById('left').style.backgroundColor = 'rgb(248, 217, 248)';
}
function c5(){
    document.getElementById('left').style.backgroundColor = 'rgb(250, 236, 210)';
}
function c6(){
    document.getElementById('left').style.backgroundColor = 'rgb(247, 215, 184)';
}
function c7(){
    document.getElementById('left').style.backgroundColor = 'rgb(234, 230, 230)';
}
// let message = document.querySelector('#enter');
var changingFontStyle = function (fontstyle) {
    // document.getElementById("left").style.fontFamily = fontstyle.value;
    document.getElementById("i1").style.fontFamily = fontstyle.value;
    document.getElementById("i2").style.fontFamily = fontstyle.value;
    document.getElementById("i3").style.fontFamily = fontstyle.value;
    document.getElementById("i4").style.fontFamily = fontstyle.value;
    document.getElementById("i5").style.fontFamily = fontstyle.value;
    document.getElementById("i6").style.fontFamily = fontstyle.value;
    document.getElementById("i7").style.fontFamily = fontstyle.value;
    document.getElementById("i8").style.fontFamily = fontstyle.value;
    document.getElementById("i9").style.fontFamily = fontstyle.value;
    document.getElementById("i10").style.fontFamily = fontstyle.value;
    document.getElementById("i11").style.fontFamily = fontstyle.value;
    document.getElementById("i12").style.fontFamily = fontstyle.value;
    document.getElementById("i13").style.fontFamily = fontstyle.value;
}

function selectColor() {
    let color = document.getElementById('colorInput');
    // changing the background color
    document.getElementById("i1").style.color = color.value;
    document.getElementById("i2").style.color = color.value;
    document.getElementById("i3").style.color = color.value;
    document.getElementById("i4").style.color = color.value;
    document.getElementById("i5").style.color = color.value;
    document.getElementById("i6").style.color = color.value;
    document.getElementById("i7").style.color = color.value;
    document.getElementById("i8").style.color = color.value;
    document.getElementById("i9").style.color = color.value;
    document.getElementById("i10").style.color = color.value;
    document.getElementById("i11").style.color = color.value;
    document.getElementById("i12").style.color = color.value;
    document.getElementById("i13").style.color = color.value;
 }

 function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' /500';
} 