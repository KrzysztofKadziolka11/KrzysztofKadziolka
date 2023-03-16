// TABLICE - ARRAY

// Co trzeba wiedzieć o tablicy
// -- posiada uporządkowany (kolejność jest ważna) zbiór wartości
// -- każda przechowywana wartość w tablicy ma swój indeks. Pierwsza wartość ma indeks 0

//Tworzenie tablicy

//Pusta tablica
// const tablica1 = [];
// console.log("Pusta tablica: ", tablica1);
// tablica1[0] = "Ludomir";
// tablica1[1] = "Dobromir";
// console.log("Tablica z dodanymi wartościami: ", tablica1);

// Sprawdzenie czy element jest tablicą
// console.log("Sprawdzenie czy zmienna jest tablicą: ", Array.isArray(tablica1))

//Tablica z wartościami
// const tablica2 = ["Toyota", "Opel", "Audi", "BMW"];
// console.log("Tablica z wartościami: ", tablica2);
// console.log("Pierwszy indeks tablicy: ", tablica2[0]);
// console.log("Trzeci indeks tablicy: ", tablica2[2]);

//Usunięcie elementu tablicy, bez zmiany jej długości. Zamiana elementu na element "undefined"; 
// const tablica3 = [1, 2, 3, false, true];
// console.log(tablica3);
// delete tablica3[3];
// console.log(tablica3);

//długość tablicy (ilość elementów w tablicy) - właściwość LENGTH
// const tablica4 = ["Toyota", "Opel", "Audi", "BMW<3", "Ford"];
// console.log("Długość tablicy: ", tablica4.length)

//wyzerowanie tablicy z wykorzystaniem length
// const tablica5 = ["Toyota", "Opel", "Audi", "BMW", "Ford"];
// tablica5.length = 0;
// console.log("Pusta tablica: ", tablica5);


//Dodanie elementu na końcu tablicy: 
// const tablica6 = ["Toyota", "Opel", "Audi", "BMW", "Ford"];
// console.log(tablica6)
// tablica6[tablica6.length] = "Suzuki";
// console.log(tablica6)
// tablica6.push("Citroen");
// console.log(tablica6)

// dodanie elementu na początku tablicy
// const tablica7 = ["Toyota", "Opel", "Audi", "BMW", "Ford"];
// tablica7.unshift("Suzuki");
// console.log(tablica7)

// usunięcie ostatniego elementu tablicy (usunięcie wartości i indeksu, zmniejszenie długości tablicy)
// const tablica8 = ["Toyota", "Opel", "Audi", "BMW", "Ford"];
// console.log("Przed usunięciem: ", tablica8);
// tablica8.pop();
// console.log("Po usunięciu: ", tablica8);

// usunięcie pierwszego elementu tablicy (usunięcie wartości i indeksu, zmniejszenie długości tablicy)
// const tablica9 = ["Toyota", "Opel", "Audi", "BMW", "Ford"];
// console.log("Przed usunięciem: ", tablica9);
// tablica9.shift();
// console.log("Po usunięciu: ", tablica9);

//CONCAT -  łączenie dwóch tablic, którego wynikiem jest nowa tablica. 
// const tablica10 = ["Toyota", "Opel", "Audi"];
// const tablica11 = ["BMW", "Ford", "Suzuki"];
// const nowaTablica = tablica10.concat(tablica11);
// console.log("Tablica po złączeniu: ", nowaTablica);

// Slice - zwracanie wybranej części tablicy, w postaci nowej tablicy. 
// Slice - jeden argument - zwraca częśc tablicy od indeksu który został podany, do końca.
// Slice - dwa arguemnty - pierwszy inforuje od którego indekstu rozpoczać, drugi na którym indeksie zakończyć (bez wyświetlania tego indeksu);
// const tablica12 = ["Toyota", "Opel", "Audi", "BMW", "Ford", "Suzuki"]
// console.log(tablica12)
// console.log("Wycinek: ", tablica12.slice(3));
// console.log("Wycinek 2 argumenty: ", tablica12.slice(1, 7));

//Sort - sortowanie tablicy;
// const tablica13 = ["Toyota", "Opel", "Audi", "BMW", "Ford", "Suzuki"]
// console.log("Tablica przed sortowaniem: ", tablica13);
// console.log("Tablica po sortowaniu: ", tablica13.sort());

//Indexof - sprawdzenie czy element znajduje sie w tablicy, i zwrócenie jego indeksu. 
// const tablica14 = ["Toyota", "Opel", "Audi", "BMW", "Ford", "Suzuki"]
// console.log("Szukanie elementu Opel: ", tablica14.indexOf("Opel"));
// console.log("Szukanie elementu opel: ", tablica14.indexOf("opel"));

// includes - metoda sprawdzająca czy w tablicy znajduje się element, zwraca true lub false
// const tablica15 = ["Toyota", "Opel", "Audi", "BMW", "Ford", "Suzuki"]
// console.log("Szukanie elementu Opel: ", tablica15.includes("Opel"));
// console.log("Szukanie elementu opel: ", tablica15.includes("opel"));

// reverse - odwrócenie kolejności: 
// const tablica16 = ["Toyota", "Opel", "Audi", "BMW", "Ford", "Suzuki"]
// console.log("Tablica przed sortowaniem: ", tablica16);
// console.log("Tablica po sortowaniu: ", tablica16.sort());
// console.log("Tablica po sortowaniu odwrócona: ", tablica16.sort().reverse());

//Objetosc elementów z tablicy

// const tab2= [ 
//     [1,2,3], //a -0
//     [2,3,4], //b - 1
//     [4,5,6] //c -2
// ];

// const objetosc = [[],[],[]];

// for(let i=0; i<tab2.length; i++){
//     console.log(`Tablica w indeksie ${i}: ${tab2[i]}`);
//     for(let j=0; j<tab2[i].length; j++){
//         objetosc[j][i] = tab2[i][j];
//         console.log(`Tablica w indeksie ${i}-${j}: ${tab2[i][j]}`);
//     }
// }
// let objetoscElemntu1 = objetosc[0][0] * objetosc[0][1] * objetosc[0][2];

// let objetoscElementu = 0

// for(let j=0; j<objetosc.length; j++){
// for(let i=0; i<objetosc[j].length; i++){
//     if(i==0){
//         objetoscElementu = objetosc[j][0];
//     }else{
//         objetoscElementu = objetoscElementu * objetosc[j][i]
//     }

    
// }
// console.log(`Objętość elementu ${j}: ${objetoscElementu}`);
// }
