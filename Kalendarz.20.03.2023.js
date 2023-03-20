function oblcz()
{
    var a=document.getElementById("a").ariaValueMax;
    var P=a*a;
    document.getElementById("wynik").innerHTML="Pole kwadratu o boku a = "+ P;
}

function calc()
{
    const d = parseInt(document.getElementById("dzien").value);
    const m = parseInt(document.getElementById("miesiac").value);
    const y = parseInt(document.getElementById("rok").value);

var z;
var c;

if(m < 3)
{
    z=y-1;
    c=0;
}
else if(m>=3)
{
    z = y;
    c = 2;
}
    else
{
window.alert("jest tylko 12 miesięcy <3");
}
var dzien_tygodnia=((parseInt(23*m/9) + d + 4 + y + parseInt(z/4) + parseInt(z/100) + parseInt(z/400) -c) %7);
var tydzien =["wtorek","sroda","czwartek","piatek","sobota","niedziela","poniedzialek"];
document.getElementById("wynik").innerHTML="dzień tygodnia dla daty: " +d+"."+m+"."+y+"r. to " +tydzien[dzien_tygodnia];
}
