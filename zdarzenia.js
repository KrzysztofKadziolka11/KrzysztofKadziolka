// Obsługa zdarzeń

// Zdarzenia w JavaScript wykonujemy za pomocą metody "addEventListener". Umożliwia ona przypisanie funkcji do wybranego elementu, która wykona się po wykonaniu określonej czynności.

// addEventListener - użycie
// element.addEvenetListener('zdarzenie', funkcja);

//Przykład - dodawanie i usuwanie klasy po kliknięciu w przycisk:

//Pobranie przycisku i h1
// const button = document.querySelector('#przycisk');
// const h1 = document.querySelector('h1');

//Nadanie zdarzenia dla przycisku
//  button.addEventListener('click', function(){
//     h1.classList.toggle('modyfikator');
// })

//Przykład 2 - nadanie zdarzenia dla więcej niż jednego elementu. 

//Pobranie elementów listy
// const liItems =  document.querySelectorAll('ul > li');

// uzyskanie dostępu do wszystkich elementów poprzez pętle
// for(let i=0; i<liItems.length; i++){
//     //pobranie pojedynczego elementu
//     let item = liItems[i];
//     //nadanie zdarzenia
//     item.addEventListener('click', (e)=>{
//         console.log(e.target);
//         e.target.classList.toggle('modyfikator');
//     })
// }

// Przykład 3 - wykonanie efektu scrollowania

//utworzenie funkcji
// const nowaFunkcja = () => {
//     console.log(`Wyświetlam pozycje: ${window.scrollY}`)
// }

// utworz zdarzenie
// window.addEventListener('scroll', nowaFunkcja);

// Przykład 4 - tworzenie elementów po kliknięciu

// pobranie przycisku
// const button = document.querySelector('button');

//utworzenie funkcji
// function createElement(){
//     let newElement = document.createElement('div');

//     //stylowanie elementu
//     newElement.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
//     newElement.style.width = "100px";
//     newElement.style.height = "100px";
//     newElement.style.display = "inline-block";

//     //dodanie tekstu
//     newElement.textContent = "Tutaj jakiś dowolny tekst";
    

//     //dodanie elementu do storny
//     document.body.appendChild(newElement);

// }

//dodanie zdarzenia do przycisku
// button.addEventListener('click', createElement)
