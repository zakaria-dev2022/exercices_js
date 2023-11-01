                    //***************partie 2***********

// Exercice 1 :
// Créez une fonction qui accepte deux paramètres et, si les deux paramètres sont des chaînes, additionnez-les comme s’ils étaient des entiers ou si les deux paramètres sont des entiers, concaténez-les.
// Exemple : add("2", "3") ➞ 5 
//  add(2, 3) ➞ "23" 
//  add("2", 3) ➞ null

function ex1(a,b) {
    if (typeof(a)=='string' &&typeof(b)=='string') {
        let a1=parseInt(a);
        let b1=parseInt(b);
        console.log(a1+b1);
        
        
    } else if (typeof(a)=='number' &&typeof(b)=='number') {
        let a1=String(a);
        let b1=String(b);
        console.log(a1+b1); 
    }else{
        console.log("Error");
    }     
}
ex1("2",3);
ex1("2","3");
ex1(2,3);

                // ************************************************************

// Exercice 2 :
// Créez une fonction qui renvoie le produit de tous les entiers impairs dans un tableau.
// Exemple : prodImp([1, 2, 3, 4]) ➞ 3 
//  prodImp([3, 6, 8, 5, 5, 7]) ➞ 525
//  prodImp([1, 0, 1, 0, 1, 0]) ➞ 1
        // correction
let tableux=[1,2,3,4,5,6];
let tableux2=1;
for (let i = 0; i < tableux.length; i++) {
    if (tableux[i]%2==0) {
        // console.log ("oui"+i); se ligne exceptionnel   
    } else {
        tableux2*=tableux[i];
    }
}
console.log(tableux2);

                // ************************************************************

// Exercice 3 :
// Créez une fonction qui répète chaque caractère dans une chaîne n fois.
// Exemple :repeatChr("alex", 3) ➞ "aaallleeexxx" 
//  repeatChr("waytolearnx", 1) ➞ "waytolearnx" 
//  repeatChr("bob", 2) ➞ "bboobb"
 //correction
function loopchar(nom,num) {
    let resultat="";
    for (let i = 0; i < nom.length; i++) {
        for (let j = 0; j < num; j++) {
            resultat+=nom[i];
            // console.log(nom[i]);
        }
    }
console.log(resultat);
}
loopchar("zakaria",5);


                // ************************************************************


    //  Exercice 4 :
    //  Vous avez un tableau avec des mots aléatoires, mais votre programme n’accepte pas les mots commençant par la lettre majuscule « Z ». Supprimez les mots non acceptés et renvoyez le nouveau tableau.
    //  Exemple :filterWords(["Bob", "Alex", "Zoello"]) ➞ ["Bob", "Alex"] 
    //   filterWords(["Lion", "Zebra", "Gazelle"]) ➞ ["Lion", Gazelle"]
    //   filterWords(["Mercedes", "Bmw", "Audi"]) ➞ ["Mercedes", "Bmw", "Audi"]
    //correction
    function lettreZ() {
        let array=["zakaria","amine","mouhsine","zouhair","youssef","houssam"];
        let array2=[];
        for (let y = 0; y < array.length; y++) {
        let resultat=array[y].charAt(0);
    if (resultat!='z'&& resultat!='Z') {
        array2+=array[y];
        array2+=" ";
    } 
    }
        console.log(array2);
    }
        lettreZ();


                   // ************************************************************


    //    Exercice 5 :
    //    Écrivez une fonction qui prend un tableau d’éléments et ne renvoie que les entiers.
    //    Exemple :getInt([1, 2, "3", "4", "5", 6]) ➞ [1, 2, 6]
    //     getInt(["Vache", 20, "Cheval", 1, "Poule", 50]) ➞ [20, 1, 1]
    //     getInt(["Str", false, 5.56, 6]) ➞ [6]
        //correction
        function numberInt() {
            let n= [2,3,"3",6.3,"8"];
            let n2= [];
            for (let i = 0; i < n.length; i++) {
                if(Number.isInteger(n[i])){
                    // console.log(n[i]) ;
                    n2+=" "+n[i];
                    }  
            }
            console.log(n2) ;
        }
         numberInt() ;


                   // ************************************************************

        //    Exercice 9 :
        //    Écrivez une fonction qui renvoie l’extension des fichiers.
        //    Exemple :getExtension(["file.html", "file.js"]) ➞ ["html", "js"] 
        //     getExtension(["image.jpg", "image.png", "image.gif"]) ➞ ["jpg", "png", "gif"] 
        //     getExtension(["file.pdf", "file.txt", "file.docx"]) ➞ ["pdf", "txt", "docx"]
                //correction
        function getExtention() {
            let array3=["zaka.html","zazzzka.jpg","zakdkka.js"];
            let array4=[];
            for (let i = 0; i < array3.length; i++) {
                let r=array3[i].lastIndexOf(".");
                let s=array3[i].slice(r+1);
                console.log(s);
            }
                    }
                    getExtention();

                
                    function oth(...n) {
                        for (let i = 0; i < n.length; i++) {
                            console.log([...n[i]])
                        }
                    //  return [...n] 
                    }
                    console.log(oth("ahmed","zakaria"))


                // ************************************************************

    let a=[1,2,3];
    let a2=[9,8,7];
    let a3=[];
    let a4=[];
    let a5=[];
       
    a3=[a[0],a2[0]];
    a4=[a[1],a2[1]];
    a5=[a[2],a2[2]];

// for (let i = 0; i < a.length; i++) {
   console.log(a3);
   console.log(a4);
   console.log(a5);
//*****************************

                // ************************************************************

        // let z = "zakaria";
        // let b="";
        // for (let i = 0; i < z.length; i++) {
        //     if (z[i].charAt(i)=='a'||'o'||'i'||'u'||'e') {
        //         b+="§";
        //     } else {
        //         b+=z[i].charAt(i);
        //     }
        //     // console.log(z[i]);
        //     console.log(b);
            
        // }

             // ************************************************************

//         Exercice 8 :
// Créez une fonction pour calculer le déterminant d’une matrice 2 x 2.[[a, b],
// [c, d]]
// Le déterminant de la matrice ci-dessus est: ad – bc:
// Exemple :det([
// [1, 1],
// [2, 3]
// ]) ➞ 1 
//  det([
// [6, 4],
// [2, 3]
// ]) ➞ 10 
//  det([
// [2, 4],
// [4, 2]
// ]) ➞ -12
        //correction

    function ex8(a,b,c,d) {
        let t1=[a,b]
        let t2=[c,d]
        let r=t1[0]*t2[1]
        let r2=t1[1]*t2[0]
        return r-r2;
    }
    console.log(ex8(8,4,3,6));