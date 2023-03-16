// Dodawanie skryptów - 2 metody: 

/* 
<script> 
    Tutaj kod
</script> - znaczniki script umieszczane zazwyczaj na końcu znacznika <body>
*/

//  <script src="plik.js"></script> - znacznik zawierający ścieżkę do pliku z kodem JS. 


//Opisywanie skryptu - komentarze 

// W celu dokonania opisu kodu, warto wykorzystać komentarze, które w języku JavaScript, można utworzyć na dwa sposoby:

/* Przykład komentarza
    Wieloliniowego 
*/

// Komentarz jednoliniowy -  brak możliwości przejścia do nowej linii

// Skrót klawaiturowy umożliwiający dodanie komentarza w Visual Studio Code: CTRL + /


// Konsola

/* Konsola umożliwia testowanie kodu JavaScript. W celu uruchomienia konsoli, należy przejść do przeglądarki, a następnie: 
    - naciśnąć klawisz F12 i przejść do zakładki "konsola", lub
    - kliknąć PPM w obszar wyświetlania strony internetowej, i wybrać opcję "zbadaj" lub "wykonaj inspekcję", następnie przejść do zakładki "konsola"
*/

// Testowanie kodu - instrukcja "console.log()"

/* 
console.log() - umożliwia testowanie kodu JavaScript, poprzez wyświetlanie wbranej przez programistę wartości w konsoli przeglądarki.
console.log() - pozwala na wyświetlanie dowolnie wybranych elementów JS np.: tekstu, liczb, zmiennych, tablic, funkcji itp..
*/

// Wyświetlanie tekstu i liczb: 
// console.log("Ten tekst zostanie wyświetlony");
// console.log(12345)

// Wyświetlanie więcej niż jednej wartości:
// console.log("Tekst", 12345, false, [1,2,3,4,5])

// Wyświetlanie zmiennych
// const nowaZmienna = "wartość"; 
// console.log(nowaZmienna); 

// Łączenie zmiennych z tekstem 
// const wiek = 12;
// let imie = "John";
// console.log(imie + " ma lat: " + wiek);

// Okna dialogowe - pozwalają wyświetlać okienka informujące użytkownika o jakimś zdarzeniu

// alert("treść alertu") - wywołuje okno z komunikatem i przyciskiem OK
// alert("Został wyświetlony alert");

// confirm('treść komunikatu') - wyświetla okienko które pozwala na potwierdzenie lub odrzucenie powiadomienia
// confirm zwraca informację do użytkownia, czy wiadomość została potwierdzona lub nie w postaci: true lub false

// przypisanie do zmiennej informacji, czy użytkownik potwierdził lub nie potwierdził komunikatu
// let confirmV = confirm('Możesz to potwierdzić');
// console.log("Co zwrócił confirm? :", confirmV);

// prompt("treść komunikatu", "domyślna wartość") - wyświetla okienko które umożliwia wprowadzenie tekstu.

// przykład przypisania do zmiennej, wartości wprowadzonej w okienku prompt
// let wprowadzonyTekst = Number(prompt("Podaj ulubiony kolor: ", "czarny"));
// console.log("Ulubiony kolor to: ", wprowadzonyTekst);
