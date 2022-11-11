//SELECTEUR
/*$(document).ready(function(){        //on peut supprimer (document.ready)
$("h1").hide();                        //pour caché l'elemnt entre paraenthese
 $("p:nth-child(2)").hide();          //pour caché le deuxeme elemt de p 
});*/
//EVENEMENT
//$("#p2").click(function(){$("#p5").hide(); });            si on click a p2 le p5 caché ou $("#p2").on("click",function()) avec on on peut ajouter plusieur objects
//$("#p2").mouseenter(function(){$("#p5").hide(); });    //si on rentrer avec la souris surv le paragr2 le paragra 5 va se cacher 
//$("#p2").mouseleave(function(){$("#p5").show(); });    //si on ajoute ce ligne a ligne precedente quand je rentre la souris il va se cacher et quad je s'eloige il apparaitre
/*$("#p2").hover(function(){ $("#p5").hide();},
function(){$("#p5").show();});                           hover c'est comme la fonction suivante quand je rentre la souris il va se cacher et quad je s'eloige il apparaitre */
//EFFETS
// $("#p5").hide("fast");                                pour cacher le p5 rapidement et "slow"  l'inver pour lentement on peut aussi faire le temps de dissparition "exp 1000"
//$("#p2").hide("100",call back);                        call back : aprés la fonction de suppresion on peut ajouter un autre function dans call back(exp $("#p2").hide("1000", function(){$("#p3").hide(3000); });)
//$("#p5").toggle();                                     quand je clique si p5 est visible il va rendre invisible et l'inverse si invisible il va rendre visible
//$("#p5").fadeOut();  , $("#p5").fadeIn(3000);          fadeout comme hide et fadein comme show mais avec l'effet de flou, on peut ajouter aussi tepms exp 3000
//$("#p5").fadeToggle(3000);                             l'effet de deux fade et toggle quand je clique il devait invisible w quand je clique atre fois il devait visible 
//$("#p5").fadeTo(tepms, 0.5);                           0.5 c'est l'opacité(visibilité de 0 A 1) que je veux arriveux
//ANIMATIONS
//$(selector).animate(argument1, arg2, arg3)             arg1: objet, argm2:temps, arg3:call back, arg2 et 3 sont optionnels exp  $("div").animate({left : '600px'}, 3000, function(){$("div").hide();}
//$("div").stop(true);                                   pour stoper l'animation on ajoute true pour que tout le animation stop 
//$("div").slideUp(5000).slideDown(temps)                slideup : pour dissparaitre le div, il fait un slide sur l'element, slidedown: pour apparait 
//JQUERY ET HTML
// $("#p1").html();                                     avec le tag html en peut utiliser les fonctions de html et afficher dans le console
//$("#p1").text("...");                                 pour replacer le contenu de p1 par un nouveau contenu
//$("div").append("...");                              pour ajouter autre chose a div et inserer a la fin de contenu
//$("div").prepend("..");                              pour ajouter autre chose a div et inserer au debut de contenu
//$("div").after("..");                                pour ajouter autre chose et inserer apres le div
//$("div").before("..");                               pour ajouter autre chose et inserer avant le div
//$("#p1").remove();                                   pour enlever le p1
//$("div").empty();                                    pour vider le contenu de div
//JQUERY ET CSS : on ajoute un documnt css 
//$("#p1").addClass("..");                            comment ajouter un classe css (fonction de css) a un element donné directement avec jquery ($("#p1,#p2").addClass("red bold"); on peut ajouter plusieurs selecteur et plusir classe)
//$("#p1").removeClass("..");                         pour remove le fonction de css dans le p1
//$("#p1").toggleClass("..");                         toggleclass : peut remplace addclass et removeclass dans mm temps
//$("#p1").css("color","red");                        on peut agir direct sur le css sans passer par la classe, par le tag css
//console.log($("#but1").width());                    pour afficher la largeur de button et on peut changer le valer on ajout le valeur preferer dans le parenthese
//console.log($("#but1").height());                   pour aficher le longeur (height(150) pour changer le valeur de longeur a 150)
//JQUERY ET L'ARBORESCENCE DES ELEMENTS
//$("#p1").parent().css(caracter changer);            pour changer le parent(le div), pour changerv le le parent et le grand parent on ajoute s a parent
//$("#p1").parents("classe qui veut changer").css(caracter changer);
//$("#div1").children().css("border-color","green");                            pour changer le child de div
//$("#main").find("p").css("border-color","green");                             pour trouver tous le p de page
//$("#p1").siblings().css("border-color","green");                              pour trouver le frere de p qui sont le mm div on peut utiliser "next" pour afficher seulmt le frere suivente
//$("p").first().css("border-color","green");                                   pour trouver seulemnt le first paragraph et "last()" pour le last paragr
//$("p").eq(2).css("border-color","green");                                     pour trouver un pragraph a une place particuliere
//$("p").filter("classe qui veut changer").css("border-color","green");         pour filter qui veut changer, pour specifier qui non pas la classe speciel on remplace filter ppar "not()"
//AJAX : récupérer les données d'un serveur, les afficher dans notre page web sans forcement avoir rafraichir toute le page web


$(function(){
    $("#start").click(function(){
      $("#div2").load("demo.txt");
    });

});