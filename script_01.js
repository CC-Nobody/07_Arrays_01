/* Die Satzbau-Maschine | Arrays */

/***** 01. Funktionalität mit Einzelparametern *****/
// --> "Ich bin Max Mütze."

/*  Teorie: Array*/

// let arr;

// arr = new Array(); // Konstruktor
// arr = [] // Literal Schreibweise
// arr = [2,4,7,12,103];
// arr = [true,false];
// arr = ["Ich","bin","Max","Mütze"]
// ausgabe(arr);
// ausgabe(arr.length);
// ausgabe(arr[0]); // Index, bgeinnt IMMER mit 0
// ausgabe(arr[arr.length-1]);

/*  Teorie: Schleifen (for-schleife) */

// for (let i = 0; i < 10; i++) {
//     ausgabe(i)
// }

/* For-Schleife für Array-Index (Iteration) */
//let arr = ["Ich","bin","Jesus","Christus","ihr","Lappen"];
// for (let i = 0; i < arr.length; i++) {
//     ausgabe(arr[i]);
// }

/**** Überlegungen - Transponierung* *****/

// let a = 0;
// ausgabe("Inhalt von a:" + a);
// a = a +1
// ausgabe("Inhalt von a:" + a);
// a = a +1
// ausgabe("Inhalt von a:" + a);
// a = a +1
// ausgabe("Inhalt von a:" + a);
// a = a +1
// ausgabe("Inhalt von a:" + a);
// a = a +1
// ausgabe("Inhalt von a:" + a);

/* Besser: mit FOR-Schleife*/
// let a = 0;
// for (let i = 0; i < 5; i++) {
//     ausgabe("Ausgabe aus der LOOP: " + a);
//     a += 1;
// }

// let str = "";
// const addStr = "Test";
// const gap = " "
// for (let i = 0; i < 5; i++) {
//      str = str + gap + addStr;
// }

// ausgabe(str);

/*  02b Funktionalität mit Arrays 2 *****/
// ausgabe(getSentenceArr2(["Nobody","expects","the","Spanish","Inquisition"]))
function getSentenceArr2(arr) {
    const gap = " ";
    const dot = ".";
    const excl = "!"
    let str = "";

    for (let i = 0; i < arr.length-1; i++) {
        str += arr[i] + gap;
    }
    for (let i = arr.length-1; i < arr.length; i++) {
        str += arr[i] + excl;
    }
    return str;
}

/* Challenge Mode */

// ausgabe(getSentenceArr3(["There","isn't","always","an","answer","for","everything"]))
function getSentenceArr3(arr) {
    const gap = " ";
     const dot = "."
     let str = "";

     for (let i = 0; i < arr.length; i++) {
        str += arr[i] + gap;
    }
    str = str.trimEnd(str) + dot;
    return str;
}

/******  02a Funktionalität mit Arrays 1 *****/
// Überlegung | Kritik
// word1, word2, word3 ... word100 :: semantschiche Struktur
// arr[0], arr[1], arr[2], arr[3] ... arr[n] :: numerische Struktur
// --> Transformation semantisches Problem --> numerisches Problem

// ausgabe(getSentenceArr(["Ich", "bin", "Max", "Mütze"]));
function getSentenceArr(arr) {
    const gap = " ";
    const dot = "."
    const str = arr[0] + gap +
                arr[1] + gap +
                arr[2] + gap +
                arr[3] +
                dot;
    return str;
}



// Modul: Satz-String zusammensetzen
// ausgabe(getSentence("Ich", "bin", "Max", "Mütze"));
function getSentence(word1,word2,word3,word4) {
    const gap = " ";
    const dot = "."
    const str = word1 + gap +
                word2 + gap +
                word3 + gap +
                word4 +
                dot;
    return str;
}

// Modul: Ausgabe in Konsole
// ausgabe("hi"); 
function ausgabe(outputStr) {
    // console.log(outputStr);
    // alert(outputStr)
    return outputStr;
}

let a = getSentenceArr2(["Nobody","expects","the","Spanish","Inquisition"]) ;
let b = getSentenceArr3(["There","isn't","always","an","answer","for","everything"]);

function docWrite(outputStr) {
    ausgabe(outputStr);
    document.getElementById("quotedisplay").innerHTML = outputStr;
}

// Schlechte Lösung
function docWrite1() {
    ausgabe(getSentenceArr3(["There","isn't","always","an","answer","for","everything"]));
}

function docWrite2() {
    ausgabe(getSentenceArr2(["Nobody","expects","the","Spanish","Inquisition"]));
}