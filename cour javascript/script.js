/* <script src="nom de fichier.js"></script>                                                      syntaxe de java dans html*/
/* var nom quelqnc = nom de variable.toString();                                                  pour passer un nombre to string(chaines de caracteres)le couleur de variable est le blue et le string est noir*/ 
/* var nom quelq = nom de var.length;                                                             longeur de variable */
/*var nom quq = parseInt(nom de variable);                                                        pour passer d'un string to variable(d'un entier seulement); pour afficher un nomb decimale en utilise "parseFloat" */
/* var nom qulq = nom de variable.indexOf("mot qui cherche sa place");                            retrouver la position d'un sous string(mot) dans un grand string*/
/* var nom qulq = nom de var.replace("mot remplacé","mot remplacent");                            pour replacer un nom par autre */
/* x++ c'est x+1 ;;; meme x += 1; c'est X+1 ;;;*/
// var nom qulq = (nom de var===valeur);                                                          booléens: pour ecrire esq x est strictement egale a un valeur on non (true or false);ou bien  (nom de var !== un valeur est ce que quelque chose et differents d'autre ou non)
//var non quqlc = (var < valeur && var < valeur);                                                 &&: c'est "et" ,il suffit que une de conditions est false pour le resultat soit false
//var non quqlc = (var < valeur || var < valeur);                                                 ||: c'est "ou" , il suffit que une de conditions est true pour le resultat soit true,
//(!true) ou bien (!false);                                                                       pour donner l'inerse 
//CONDITIONS
/* if(condition1)                                                                                 "if" c'est comme "Si" 
           {executer ce code};
    else if (condition2)
           {la condition 1 n'est pa verifier mais la 2 l'est};
    else
           {la condition 1 n'est pa verifier mais la 2 n'est pas aussi};*/


/* switch(varieble)
{
    case"choix 1":                                                                                on peut mettre plusieurs cas dans meme condition
             console.log(texte qui veut afficher);
       break;
    case"choix 2":
             console.log(texte qui veut afficher);
       break;
    default                                                                                      si aucun des cas précedentes  
             console.log(texte qui veut afficher);
} */
//BOUCLES
/* while(condition)                                                                              "while" c'est comme tant que la condtion et verifoer dans en execute le code              
{
    console.log();
    var++; }*/

/* do{console.log();
    var++;}
    while(condition)                                                                               do while comme while sauf qu'il a un tour gratuit au debut*/

/* for(partie1;partie2;partie3)                                                                    partie1:initialisation de variable, partie2:condition, partie3:mettre a jour le chose(valeur de variable apres executer le code) variable++
{
    code a executer
} */
//FONCTON
/*function name (parametre1,par2,...)                                                             il faut separer le fonction et le code a executer
   {code a executer;                                                                              scope: Les fonctions ont un scoop locale cad que le variable dedont elle est connue que dans ma functin, elle n'a pas connue ailleur dans ma page , dans mon code.Donc on peut tilisé seulement dans la function. 
    return resultat;
   }*/
// TABLEAUX
/*var name = [valeur1, valeur2..];
console.log(name[0]);                                                                           on affiche la 1er valeur c'est la place de 0 
        on peut aussi ajoute le boucle for : for(var i=0;condition;i++)
                                                {console.log(name[i]);}    
name.push("...");                                                                               pour ajouter un nom a tableau 
name.pop("...");                                                                                pour enlever le derniere valeur dans le tableau
var nom qulq = nom de var.slice(2,4);                                                           il affiche seulemnt le deuxiemm valeur et le troisiemme, le quatriemme est non inclu
var name[[0.1], [17, 11],[...]]                                                                 on pet ecrire tableau dans un tableau, par exemp la place de 11 c'est [1][1].*/
// OBJECTS
 /*var name = {
      propretyname1 : propertyvalue1,
      propretyname2 : propertyvalue2, etc
      methode1 : function(){};                                                                 c'est pour la declaration pour afficher dans l'ecran il faut executer dc on ajoute name.nom de fuction(); 
      {} }                      pour afficher tout le preoperty on ajoute boucle for: for(var name in name de var)
                                                                                    {console.log(name de var[name]);}*/
//FONCTIONS CONSTRUCTEURS
/*si on veux créer plusieurs objects ont le meme types
function Name1(caracter1,..etc)                                                                 la 1er lettre de function par convention est majuscule
{
    this.name = carater1;
    etc
}
var nom de var = new Name1("nom de caracter1","nom de caracter2");                            l'instance qui va créer*/                                            














