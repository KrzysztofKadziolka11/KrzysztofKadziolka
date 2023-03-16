//Zmienne

/* Podstawowe zasady nazywania zmiennych: 
    - wielkość liter ma znaczenie. Zmienna newVariable to nie to samo co newvariable
    - nazwa zmiennej nie może zaczynać się od cyfry,
    - nazwa zmiennej nie może zawierać spacji, kropki, przecinka ani myślnika (można natomiast używać podkreślenia),
    - nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript (const, let, var, typeof, class, function itp.)

/* W języku JavaScript wyróżniamy dwa rodzaje zmiennych: 
    const - zmienna o stałej wartości (brak możliwości zmiany wartości zmiennej)
    var/let - zmienna o zmiennej wartości (możliwość zmiany wartości zmiennej) */

/* Różnice wynikające z użycia var lub let: 
    - let - posiada zasięg blokowy (najprościej mówiąc od klamry do klamry), nie pozwala na ponowne deklarowanie
    - var - posiada zasięg funkcyjny (zasięg określa ciało funkcji), pozwala na ponowne deklarowanie*/

// Zmienna stała const -  użycie: 

// 1. Użycie zmiennej: 
// const name = "Wpisz imie...";
// console.log(name);

//2. Próba zmiany wartości zmiennej:
// name = "Wpisz inne imie...";
// console.log(name);

//3. Próba ponownej deklaracji zmiennej: 
// const name = "Wpisz imię...";
// console.log(name);


//Zmienne let i var -  użycie

// 1. Utworzenie zmiennej z wykorzystaniem let
// let wiek = 19;
// console.log(wiek);

// 2. Utworzenie zmiennej z wykorzystaniem var
// var wiekV = 20;
// console.log(wiekV);

// 3. Zmiana wartości zmiennej let
// wiek = 32;
// console.log(wiek);

// 4. Zmiana wartości zmiennej var
// wiekV = 50;
// console.log(wiekV);

// 5. Próba ponownej deklaracji zmiennej let:
// let wiek = 40;
// console.log(wiek);

// 6. Próba ponownej deklaracji zmiennej var: 
// var wiekV = 33; 
// console.log(wiekV);
