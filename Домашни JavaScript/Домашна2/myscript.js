// function sporeduvanjeDvaBroja(x, n) { // glavna funkcija

//     var dolzinaNaBrojX = Math.ceil(Math.log10(x + 1)); // Vadenje na dolzina na brojot X so matematika;
//     var dolzinaNaBrojN = Math.ceil(Math.log10(n + 1)); // Vadenje na dolzina na brojot N so matematika;
//     var privremenBrojX = x; // var promenliva od x za da mozhe da ja delime so 10 i sreduvame da dobivame pomal broj;
//     var privremenBrojN = n; // var promenliva od n za da mozhe da ja delime so 10 i sreduvame da dobivame pomal broj;

//     for (i = 0; i < dolzinaNaBrojX; i++) { // prviot for ciklus vo koj gi vleceme cifrite od brojot X edna po edna i gi davame na sledniot ciklus;

//         var cifraX = privremenBrojX % 10; // so ova ja vadime poslednata cifra od brojot x pr: x e 1332 i ja vadime 2;
//         privremenBrojX = funkcijaZaCepenjeCifri(privremenBrojX); // go namaluvame privremeniot broj za 1 cifra od 1332  na 133

//         for (j = 0; i <= dolzinaNaBrojN; i++) { // vtor ciklus vo koj zemame vrednosta od pogore na cifraX i ja sporeduvame edna po edna so site vrednosti na cifraN

//             var cifraN = privremenBrojN % 10;  // so ova ja vadime poslednata cifra od brojot n pr: x e 1332 i ja vadime 2;
//             privremenBrojN = funkcijaZaCepenjeCifri(privremenBrojN); // go namaluvame privremeniot broj za 1 cifra od 1332  na 133

//             if (cifraX === cifraN) { // cifrite na broevite se isti sto znachi deka tie dva broja ne se totalno razlicni.
//                 return 'Brojot X se dopira so brojot N';

//             }
//             else {                // cifrite na broevite ne se isti.
//                 return 'Brojot X nema dopirna tocka so brojot N';
//             }
//         }
//     }

//     function funkcijaZaCepenjeCifri(x) { // definiranje na pomosna funkcija vo sklop na glavnata sto ja povikuvame gore;

//         return Math.round(x / 10);   // go deli dadeniot broj so 10 i go zaobikoluva na najbliskiot integer odnosno cel broj ?

//     }


// }

// целосна верзија со двете барања

function primanjeDvaBroja(N, X) { // Pocetok na funkcija gi primame broevite od nadvor  DIGIT = CIFRA
 
    var pogolemBrojOdN = N; // Vadime nov broj pogolem od N
 
    var delenjeDigiti = 1; // Dali imaat isti digiti dvata broja, pretpostavka e deka imaat
 
    while (delenjeDigiti) { // Dodeka imaat isti cifri prodolzi so cel ciklus
 
        if (sporeduvanjeDvaBroja(pogolemBrojOdN, X)) { // povikuvame dolnata funkcija i, i gi davame pogolemiot broj, i vtoriot broj sto treba da sme razlicni od nego
            delenjeDigiti = 0; // ako e uspesno vishe nemame isti digiti i se prekinue while ciklusot
            return 'TOTALLY DIFFERENT, the closest number to ' + N + ' that is different than ' + X + ' is ' + pogolemBrojOdN; // vrakja poraka sostaven od 3te broja i se ostalo
        }
        pogolemBrojOdN++; // bidejki brojot ima isti digiti odime na sledniot broj
 
    }
 
    function sporeduvanjeDvaBroja(n, x) { // glavna  pomosna funkcija
 
        n = Math.abs(n); // za potrebi na sporedba go pravime brojot pozitiven, za da sporeduvame broj so broj no pritoa da dozvolime ako broevite se na primer -123 za N i 123 za X sledniot pogolem broj da e -122
        x = Math.abs(x); // isto kako gorniot ama ova realno treba samo ednash da se napravi
 
        const dolzinanabrojN = Math.ceil(Math.log(n + 1) / Math.LN10); // Vadenje na dolzina na brojot N so matematika
        const dolzinanabrojX = Math.ceil(Math.log(x + 1) / Math.LN10); // Vadenje na dolzina na brojot X so matematika
 
        var isTotallyDifferent; // prvata bulova promenliva i edina, od koja ni zavisi funkcija
 
        count = 0; // brojac dali sme gi sporedile site cifri/digiti na edniot broj so site cifri/digiti na drugiot
 
        for (i = 0; i < dolzinanabrojN; i++) { // prviot for ciklus vo koj gi vleceme cifrite od brojot N edna po edna i gi davame na sledniot ciklus, ciklusot se povtoruva onolku pati kolku sto imame cifri vo N
 
            var newX = x; // pravime nova promenliva koja sto ke gi obnovuva vrednostite na x bidejki taka se resava zadacata za sega. Nema rekurzija.
            var cifraN = n % 10; // so ova ja vadime poslednata cifra od brojot n; primer: n e 1332 i ja vadime 2
            n = funkcijaZaCepenjeCifri(n); // go namaluvame  brojot n za 1 cifra; primer: 1332 na 133            
 
            for (j = 0; j < dolzinanabrojX; j++) { // vtor ciklus vo koj zemame vrednosta od pogore na cifraX i ja sporeduvame edna po edna so site vrednosti na cifraN
               
                var cifraX = newX % 10;  // so ova ja vadime poslednata cifra od brojot x pr: x e 1332 i ja vadime 2;
                newX = funkcijaZaCepenjeCifri(newX); // go namaluvame brojot x za 1 cifra; primer: 1332 na 133
 
                if (cifraN === cifraX) { // cifrite na broevite se isti sto znachi deka tie dva broja ne se totalno razlicni.
                    isTotallyDifferent = 0; // davame vrednost na bulovata deka ovaa cifra na prviot broj e ista so cifra na vtoriot.
                    break // koristime break za da go prekineme izvrsuvanjeto na ovoj ciklus bidejki sme dosle do tockata so ni treba
                }
                else
                    isTotallyDifferent = 1; // ako ne se sluci gorenavedenoto bulovata promenliva tvrdi deka broevite se totalno razlicni
 
            }
            count++; // dokolku se izvrsil kako sto treba vtoriot ciklus i edna cifra na brojot n ja nema vo brojot x se zgolemuva da oznaci deka sme na sledna cifra
           
            if (isTotallyDifferent === 0) { // dokolku se prekinal so break predhodniot ciklus , proveruvame i vo toj slucaj
 
                count = dolzinanabrojN; // vikame deka sme dosle do kraj na cifrite za proveruvanje na dvata broja
                break // prekinuvame so dvata for ciklusa
 
            }
        }
 
        function funkcijaZaCepenjeCifri(n) { // definiranje na pomosna funkcija vo sklop na glavnata sto ja povikuvame gore;
 
            return Math.floor(n/10);   // go deli dadeniot broj so 10 i go zaobikoluva na najbliskiot integer
 
        }
 
        if (count === dolzinanabrojN) // dokolku sme stignale do krajot na brojkata i sve e kako sto treba
            return isTotallyDifferent; // vrakjame deka isTotallydifferent e edna od predhodno navedenite vrednosti na while funkcijata
    }
}