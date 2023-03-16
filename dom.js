/* CZYM JEST DOM */

//  -- reprezentacja dokumentu HTML w przeglądarce.
//  -- elementy strony (tag,tekst, atrybut) są węzłami, które mogą być pobrane, modyfifowane. Mozna też usuwać węzły i tworzyć nowe.
//  -- Struktura DOM przypomina drzewo. Na szczycie (na początku) jest obiekt document.
//  -- DOM nie jest częścią JS, ale JS umożliwia pracę z DOM

/* POBIERANIE ELEMENTÓW ZE STRONY */

// obiekt dokument  - umożliwiający dostęp do struktury strony HTML
// console.log(document);
// dostęp do węzła body (elementu body HTML)
// console.log(document.body);

//Pobranie jednego elementu

// Metoda "getElementByID" - umożliwia pobranie elementu o podanym ID
// const elementID = document.getElementById('pID');
// console.log(elementID)

// Metoda "querySelector" - umożliwia pobranie dowolnego elementu, poprzez wprowadzenie selektora który tworzy się w ten sam sosób jak selektor w CSS
// const newQuery = document.querySelector('h1');
// console.log(newQuery)

// Pobranie więcej niż jednego elementu

// Metoda "querySelectorAll" - metoda działa tak samo jak "querySelecotr", lecz z tą różnicą, że umożliwia pobranie więcej niż jednego elementu, a następnie te elementy zostają zapisane w obiekcie tablicopodobnym czyli NodeList. 
// const newQueryAll = document.querySelectorAll('ul.ulClass li');
// console.log(newQueryAll);

// Metoda "getElementsByClassName" - metoda pozwala na pobranie wszystkich elementów na stronie o określonej wskazanej klasie. Również zwraca obiekt tablicopodobny. 
// const newClassElements = document.getElementsByClassName('liItem');
// console.log(newClassElements);


// Działania na pobranych elementach

// wyświetlenie tekstu znajdującego się w elemencie
// const elementID = document.getElementById('pID');
// console.log(elementID.textContent);

// wyświetlenie tekstu razem z znacznikami HTML
// const newQuery = document.querySelector('h1');
// console.log(newQuery.innerHTML);

// zmiana zawartości (tekstu) wewnątrz elementu 
// const newQuery = document.querySelector('h1');
// newQuery.textContent = "Nowa zawartość";

// dopisywanie tekstu
// newQuery.textContent += " powiekszona o coś nowego";

// dodawanie stylów liniowych
// const getP = document.querySelector('#pID');
// getP.style.fontSize = "30px";
// getP.style.color = "purple";
// getP.style.backgroundColor = "aqua";

// operacje na klasach
// const getH1 = document.querySelector('h1');

// Pobranie aktualnych klas
// console.log("Wszystkie klasy H1: ", getH1.classList);

// Dodanie klasy
// getH1.classList.add('modyfikator');

// usunięcie klasy
// getH1.classList.remove('modyfikator');

// Modyfikacja więcej niż jednego elementu
// const newQueryAll = document.querySelectorAll('ul.ulClass > li');
// for(let i=0; i<newQueryAll.length; i++){
//     let item = newQueryAll[i];
//     console.log(item);
//     //zmiana zawartości elementu
//     item.textContent = `Potrojone i: ${i*3}`;
// }


// Tworzenie nowego elementu
// let newElement = document.createElement('li');
// console.log(newElement);

// Modyfikacja nowego elementu
// newElement.textContent = "Nowa zawartość";
// newElement.classList.add('modyfikator');
// console.log(newElement);

// Dodanie elementu - appendChild
// Struktura - perentElement.appendChild(element);

// Dodanie elementu do body
// document.body.appendChild(newElement)

// Dodanie elementu do listy
// const lista = document.querySelector('.ulClass');
// lista.appendChild(newElement);


