// PĘTLE

// Pętla umożliwia wielokrotne wykonanie kodu.
// Pętla pozwala wykonywać blok kodu wielokrotnie, tyle razy ile spełniony jest określony warunek.
// Pętla pozwala pracować na elementach tablicy czy obiektu.
// Pętla opiera się na sprawdzeniu warunku. Pętla jest tak długo wykonywana jak spełniony jest warunek

// Pętla for

/* for (inicjalizacja iteratora; warunek; zwiększenie iteratora) {
 blok kodu
} */

// for (let i = 0; i <= 10; i++) {
//     console.log("wyświetlenie: " + i);
// }

// Pętla while - uruchamia blok kodu tak długo jak warunek jest prawdziwy

// Konstrukcja
/*  
while (warunek) {
 blok kodu
}
*/

// let i = 0;
// while( i < 10){
//     console.log("Inkrementacja i: ", i++)
// }

// Pętla DO...WHILE
//Blok zawsze wykona się co najmniej raz. Czy będzie sie wykonywał dalej zależy od tego czy warunek będzie spełniony.

// let max = 10;
// let j = 0;

// do {
//  console.log('Zwiększamy j: ', j++);
// } while (j <= max);


// Zagnieżdżenie pętli w pętli

// for (let i = 0; i < 3; i++) {
//  for (let j = 0; j < 10; j++) {
//   console.log(`zmienna i czyli ${i++} pomnożona przez zmienną j czyli ${j} da wynik ${i * j}`);
  
//  }
// }

//`Tekst ${kod_JS}` - string w "backticku" (gravisie), umożliwia pisanie tekstu wypełnionego kodem JS, bez potrzeby użycia konkatenacji (łączenia stringów plusem);

// Wyświetlenie zawartości tablicy za pomocą pętli

// const usersAge = [19, 18, 15, 45, 34, 33, 25];
// for (let i = 0; i < usersAge.length; i++) {
//     console.log(`użytkownik o indeksie ${i} jest w wieku ${usersAge[i]}`);
// }
