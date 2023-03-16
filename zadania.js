// 1. Znajdź pole trójkąta, w którym długości trzech jego boków wynoszą 5, 6, 7.
 
// const a = 5
// const b = 6
// const c = 7
 
// const p = (a+b+c)/2
 
// z = Math.sqrt(p*(p-a)*(p-b)*(p-c))
// console.log(z)
 
 
// Wynik 5,6,7 -> 14.696938456699069
 
// 2. Napisz program w JavaScript, który obliczy różnicę między podaną liczbą a liczbą 13, jeśli liczba jest większa niż 13, zwróci podwójną różnicę (bezwzględną).
 
// const a = 13
// const b = prompt("Podaj liczbe");
 
// if(b > a){
//     console.log((b-a)*2);
 
// }
// else{
//     console.log(a-b);
// }
 
 
// Wartości poprawne
// Dla liczby: 32 -> zwróci 38
// Dla liczby: 11 -> zwróci 2
 
 
// 3. Napisz program w JavaScript, który obliczy sumę dwóch podanych liczb całkowitych. Jeśli dwie wartości są takie same, funkcja zwraca potrójną ich sumę.
 
 
// const a = Number(prompt("Podaj liczbe a"));
// const b = Number(prompt("Podaj licz licbe b"));
 
// const suma = (a+b)
 
// if(a === b){
//     console.log(suma*3);
// }else(suma)
 
 
 
 
// Wartości poprawne:
// Dla liczb: 10, 20 -> zwróci 30
// Dla liczb: 10, 10 -> zwróci 60
 
// 4. Napisz program w języku JavaScript, obliczający mnożenie i dzielenie dwóch liczb. (Dane powinny być podane przez użytkownika). (Zabezpiecz program przed wartością zerową.)
 
 
// const a = Number(prompt("Podaj liczbe a"));
// const b = Number(prompt("Podaj licz licbe b"));
 
// const mnożenie = (a*b);
// const dzielenie = (a/b);
 
// if(a > 0 && b >0){
//     console.log(mnożenie);
//     console.log(dzielenie);
 
// }else
// {console.log("Podaj wartości większe od 0")}
 
 
 
// 5. Napisz program w JavaScript, który sprawdzi dwie podane liczby i zwróci wartość true, jeśli jedna z nich to 50 lub ich suma wynosi 50.
 
 
// const a = Number(prompt("Podaj liczbe a"));
// const b = Number(prompt("Podaj liczbe b"));
// const suma = (a+b)
 
// if(a == 50  || b == 50 || suma == 50){
//     console.log("true");
// }else{console.log("false");}
 
 
// Wartości poprawne:
// Dla liczb: 50, 50 -> true
// Dla liczb: 20, 50 -> true
// Dla liczb: 20, 20 -> false
// Dla liczb: 20, 30 -> true
 
// 6. Napisz program w JavaScript, który sprawdza na podstawie dwóch podanych liczb całkowitych, czy jedna jest dodatnia, a druga ujemna.
 
// const a = Number(prompt("Podaj liczbe a"));
// const b = Number(prompt("Podaj liczbe b"));
 
 
// if(a > 0  && b < 0|| a < 0 && b > 0){
//     console.log("true");
// }else{console.log("false");}
 
 
 
// Wartości poprawne:
// Dla liczb: 2, 2 -> false
// Dla liczb: -2, 2 -> true
// Dla liczb: 2, -2 -> true
// Dla liczb: -2, -2 -> false
 
// 7. Napisz program w JavaScript, sprawdzający trzy podane liczby. Jeżeli dwie z podanych liczb są takie same, zwróć trzecią. Jeżeli wszystkie są różne, zwróć komunikat "brak dwóch równych liczb";
 
// const a = Number(prompt("Podaj a"))
// const b = Number(prompt("podaj b"))
// const c = Number(prompt("podaj c"))
 
// if(a == b){
//     console.log(c);}
// else if(a == c){
//     console.log(b);}
// else if (c == b){
//     console.log(a);}
// else{console.log("nie ma takich samych liczb")}
 
 
// Wartości poprawne:
// Dla liczb: 1,2,2 -> 1
// Dla liczb: 1,1,2 -> 2
// Dla liczb: 1,2,3 -> komunikat
 
 
 
 
// 8. Napisz program w JavaScript, który znajdzie największą z trzech podanych liczb całkowitych.
 
 
 
// const a = Number(prompt("Podaj a"))
// const b = Number(prompt("podaj b"))
// const c = Number(prompt("podaj c"))
 
// if(a>b && a>c){console.log(a)}
// else if(b>c && b>a){console.log(b)}
// else if(c>a && c>b){console.log(c)}
// else{console.log("koniec")}
 
 
// Poprawne wyniki:
// dla liczb: 1,0,1 -> zwróci 1
// dla liczb 0, -10, -20 -> zwróci 0
// dla liczb 1000, 510, 440 -> zwróci 1000
