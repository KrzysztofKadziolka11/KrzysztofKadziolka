<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    
<!-- 1. Napisz program w JavaScript, który akceptuje dwie liczby całkowite i wyświetla większą. (zastosuj prompt() w celu wprowadzenia liczb do programu).-->

<!-- <script>
    const a = Number(prompt("Podaj pierwsza liczbe a: "));
    const b = Number(prompt("Podaj druga liczbe b: "));

   if(a>b){
    console.log(a)
   }
   else{
    console.log(b)
   }
</script> -->


<!-- 2. Napisz program w JavaScript, który będzie iterować od 0 do 15. Dla każdej iteracji niech sprawdza czy liczba jest parzysta, czy nieparzysta, oraz wyświetla komunikat. -->

<!-- <script>
for(let i = 0; i <=15; i++)
{
    if(i == 0) alert("zero");
    else if(i%2 == 0) alert("parzysta");
    else alert("nieparzysta");
    console.log(i);
}
</script> -->

<!--1. Napisz program sprawdzający, czy podana wartość jest tablicą. -->
<!-- <script>
    const tablica1 = [];
    tablica1[1] = "Dobromir";
    console.log("Sprawdzenie czy zmienna jest tablicą: ", Array.isArray(tablica1))
</script> -->


<!--5. Napisz program w JS, czyszczący tablicę z pustych wartości takich jak: 'null', '0', "", 'false', 'undefined', 'NaN'.-->

<!-- <script>
  const tab = [NaN, 0, 15, false, -22, '',undefined, 47, null];
  tab.forEach((element)=>{
    if(element){
        console.log(element);
    }
    
  })

</script> -->

<!--// 2. Napisz program zwracający pierwszy element tablicy. Program powinien umożliwiać wprowadzenie zmiennej, dzięki której zostanie zwrócone "n", elementów tablicy.-->

<!-- <script>
    //pobieranie danych od uzy
    const tab =["a", "b", "c", "d"];
    const number = Number(prompt("Podaj ilosc elementow:", 0));
    //czy tab pusta
    if( tab.length== 0){
        alert("Tab jest pusta");
    }
    else{
        //
        if(number==0){
            console.log("pierw elem tab:", tab[0]);
        }else{
            console.log(`Zwrocono ${number} elementow tablicy: ${tab.slice(0, number)}`);
        }
    }
</script> -->


</body>
</html> 
