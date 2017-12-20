//start of ball selection
$( ".ball" ).draggable( { revert: "invalid", containment: "parent" } );
$( "#droppable" ).droppable({
  accept: ".ball",
  activeClass: "ui-state-hover",
  drop: function(event, ui) {
       if ( ui.draggable.attr("src").charAt(7) == "f" ){
        window.location.href = "#"; 
    }else if ( ui.draggable.attr("src").charAt(7) == "b" ) {
        window.location.href = "#";
    }
  }
});
//end of ball selection



