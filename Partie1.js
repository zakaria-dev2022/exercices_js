//***************partie 1***********
        // Exercice 1:
        // Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
        // Exemple:
        // addition(1, 2) ➞ 3
        // addition(-2, -4) ➞ -6 
        //correction
        function somme(a,b) {
            return a+b;
        }                    
        console.log(somme(2,4))
                       // ************************************************************
    
    //    Exercice 2:
    //    Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
    //    Exemple:
    //    minuteToSecond(4) ➞ 240
    //    minuteToSecond(3) ➞ 180 
       //correction
    function minute(m) {
        let s=parseInt(m)*60;
        return s;
    }
          console.log(minute(2.3))   
                             // ************************************************************
                             
        //  Exercice 3:
        //  Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
        //  Exemple:
        //  increment(1) ➞ 2
        //  increment(4) ➞ 5
         //correcction
    function incrementation(n) {
        n++
        return n;
    }
          console.log(incrementation(2))
    
                             // ************************************************************
    
            //  Exercice 4:
            //  Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
            //  Exemple:
            // getSurface(8, 2) ➞ 8
            // getSurface(7, 3) ➞ 10.5 
            //correction
        function triangle(b,h) {
            s=(b*h)/2;
            return s;
        }
        console.log(triangle(7,9));
                             // ************************************************************
    
    //     Exercice 6:
    // Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
    // Exemple:
    // getMax(5, 9, 1) ➞ 9
    // getMax(2, 3, 10) ➞ 10 
    //correction
        
        console.log(Math.max(3,5,22));
        // ************************************************************
    
                             
    
        
        
                             