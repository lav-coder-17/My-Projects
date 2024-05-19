// Project Created By Malav Shah Ig:- lav._.coder
// Length Converter Variables Declared //
var ft = document.getElementById('ft');
var inch = document.getElementById('in');
var cm = document.getElementById('cm');
var mm = document.getElementById('mm');
var m = document.getElementById('m');

// Area Converter Variables Declared //
var ha = document.getElementById('ha');
var ac = document.getElementById('ac');
var sqm = document.getElementById('sqm');
var sqyd = document.getElementById('sqyd');
var sqft = document.getElementById('sqft');
var sqin = document.getElementById('sqin');

// Length Converter Action Declared //
ft.addEventListener("keyup",ftfun);
inch.addEventListener("keyup",infun);
cm.addEventListener("keyup",cmfun);
mm.addEventListener("keyup",mmfun);
m.addEventListener("keyup",mfun);

// Area Converter Action Declared //
ha.addEventListener("keyup",hafun);
ac.addEventListener("keyup",acfun);
sqm.addEventListener("keyup",sqmfun);
sqyd.addEventListener("keyup",sqydfun);
sqft.addEventListener("keyup",sqftfun);
sqin.addEventListener("keyup",sqinfun);

// Length Converter Functions //
function mfun(){
    ft.value = m.value * 3.28084;
    inch.value = m.value * 39.3701;
    cm.value = m.value * 100;
    mm.value = m.value * 1000;
}
function ftfun(){
    m.value = ft.value * 0.3048;
    inch.value = ft.value * 12;
    cm.value = ft.value * 30.48;
    mm.value = ft.value * 304.8;
}
function infun(){
    ft.value = inch.value * 0.0833333;
    m.value = inch.value * 0.0254;
    cm.value = inch.value * 2.54;
    mm.value = inch.value * 25.4;
}
function cmfun(){
    m.value = cm.value * 0.01;
    ft.value = cm.value * 0.0328084;
    inch.value = cm.value * 0.393701;
    mm.value = cm.value * 10;
}
function mmfun(){
    m.value = mm.value * 0.001;
    ft.value = mm.value * 0.00328084;
    inch.value = mm.value * 0.0393701;
    cm.value = mm.value * 0.1;
}

// Area Converter Functions //
function hafun(){
    ac.value = ha.value * 2.47105;
    sqm.value = ha.value * 10000;
    sqyd.value = ha.value * 11959.9;
    sqft.value = ha.value * 107639;
    sqin.value = ha.value * 1.55e+7;
}
function acfun(){
    ha.value = ac.value * 0.40468483287;
    sqm.value = ac.value * 4046.86;
    sqyd.value = ac.value * 4840;
    sqft.value = ac.value * 43560;
    sqin.value = ac.value * 6.273e+6;
}
function sqmfun(){
    ha.value = sqm.value * 1e-4;
    ac.value = sqm.value * 0.000247105;
    sqyd.value = sqm.value * 1.19599;
    sqft.value = sqm.value * 10.7639;
    sqin.value = sqm.value * 1550;
}
function sqydfun(){
    ha.value = sqyd.value * 8.3613e-5;
    ac.value = sqyd.value * 0.0002066122231405;
    sqm.value = sqyd.value * 0.836127;
    sqft.value = sqyd.value * 9;
    sqin.value = sqyd.value * 1296;
}
function sqftfun(){
    ha.value = sqft.value * 9.2903e-6;
    ac.value = sqft.value * 2.2957e-5;
    sqm.value = sqft.value * 0.092903;
    sqyd.value = sqft.value * 0.111111;
    sqin.value = sqft.value * 144;
}
function sqinfun(){
    hal.value = sqin.value * 6.4516e-8;
    ac.value = sqin.value * 1.5942e-7;
    sqm.value = sqin.value * 0.00064516;
    sqyd.value = sqin.value * 0.000771605;
    sqft.value = sqin.value * 0.00694444;
}
// Project Created By Malav Shah Ig:- lav._.coder
