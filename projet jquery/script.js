$(function(){
  
    var $mainMenuItems = $("#main-menu ul").children("li"), 
    totalMainMenuItems= $mainMenuItems.length,
    openedIndex = 2,

    init = function(){
         bindEvents();
         if(validIndex(openedIndex)){
         animateItem($mainMenuItems.eq(openedIndex), true, 700);
    }
    },
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var nexIndex = $(this).parent().index();
            checkandanimateitem(nexIndex);
          
         });
         $(".button").hover(
            function(){
              $(this).addClass("hovered");
            },
            function(){
              $(this).removeClass("hovered");
            }
         );

         $(".button").click(function(){
            var nexIndex = $(this).index();
            checkandanimateitem(nexIndex);
          
         });
    },
    validIndex = function(indexToCheck){
      return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
   animateItem = function($item, toOpen, speed){

            var $colorImage = $item.find(".color"),
            itemParam = toOpen? {width:"420px"}: {width:"140px"},
            colorImageParam = toOpen? {left:"0px"}:{left:"140px"};
            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);   
},
checkandanimateitem = function(indexToCheckanimate){
    if(openedIndex === indexToCheckanimate)
    {
        animateItem($mainMenuItems.eq(indexToCheckanimate), false, 250);
        openedIndex = -1;
    }
    else
    {
        if(validIndex(indexToCheckanimate)){
            animateItem($mainMenuItems.eq(openedIndex), false, 250);
            openedIndex = indexToCheckanimate;
            animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }
    }
};

init();
});