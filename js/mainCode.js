function addItems(idName, textValue) {
    "use strict";
   $(idName).append("<li><a href=\"#\">" + textValue + "</a></li>");
    //This adds a new list item with text
}

//addDropdown creates a new dropdown with an unordered list. idName is the location where it's being drawn to. To let idName work, add and id="" to <body>. Title is the shown text. 
//dropdownId is the id for the dropdown. This is used for xPosition and yPosition
//listId is the id for the <ul>. This is used to add text to the dropdown. addItems uses this id.
//xPosition and yPosition position the dropdown
function addDropdown(idName, title, dropdownId, listId, xPosition, yPosition) {
    "use strict";
    $(idName).append('<div class="btn-group"> <button class="btn btn-default dropdown-toggle" type="button" id="' + dropdownId + '" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + title +  '<span class="caret"></span></button> <ul class="dropdown-menu" id="' + listId + '"> </ul> </div>');
    var checkY = document.getElementById(dropdownId).offsetTop, checkX = document.getElementById(dropdownId).offsetLeft;
    document.getElementById(dropdownId).style.marginLeft = xPosition - checkX + "px";
    document.getElementById(dropdownId).style.marginTop = yPosition - checkY + "px";
    document.getElementById(listId).style.marginLeft = xPosition - checkX + "px";

}

function addDropListener(idName, dropdownId){
	
	$('#'+dropdownId+' li a').on('click', function(){
    	var selText = $(this).text(); 
    	alert(selText);
	});
}



//function getDropdownSelection()
function cb() {
    "use strict";
	alert("works");
}

//addButton is simpler version of addDropdown
function addButton(idName, title, buttonid, xPosition, yPosition, size, callback) {
    "use strict";
    $(idName).append('<button class="btn btn-test ' + size + '"type="button" id="' + buttonid + '">' + title + '</button>');
    var checkY = document.getElementById(buttonid).offsetTop, checkX = document.getElementById(buttonid).offsetLeft;
    document.getElementById(buttonid).style.marginLeft = xPosition - checkX + "px";
    document.getElementById(buttonid).style.marginTop = yPosition - checkY + "px";
	document.getElementById(buttonid)
    $('#' + buttonid).on('click', callback);
}

function addTextField(idName, width, placeholder, inputid, xPosition, yPosition) {
    "use strict";
    $(idName).append('<div class="input-group" style="width: ' + width + ';" id="' + inputid + '"><span class="input-group-btn"><button class="btn btn-default" type="button">Go!</button></span><input type="text" class="form-control" placeholder="' + placeholder + '" aria-describedby="sizing-addon1"></div>');
    var checkY = document.getElementById(inputid).offsetTop, checkX = document.getElementById(inputid).offsetLeft;
    document.getElementById(inputid).style.marginLeft = xPosition - checkX + "px";
    document.getElementById(inputid).style.marginTop = yPosition - checkY + "px";
}

/*
addDropdown("#bodyid", "Test", "freeDropdown", "freeList", 100, 100);
addItems("#freeList", "Yo this is cool!");
addItems("#freeList", "Yo yo yo!!!!");
addButton("#bodyid", "JavaScript", "javascriptButton", 300, 400, "btn-lg", cb);
addTextField("#bodyid", "100px", "Test Placeholder", "testPlaceholder", 0, 425);

addDropListener("#bodyId", "freeList")


var yPosition = document.getElementById("javascriptButton").offsetTop;
var xPosition = document.getElementById("javascriptButton").offsetLeft;
document.getElementById("demo").innerHTML = "X: " + xPosition + " " + "Y: " + yPosition;
// ^ This is the "X: _ Y:_" text on the screen. It's attached to the "Javascript" button


/*$('#dropButton').on('click', function (e){ //When button is clicked
    var inputText = document.getElementById('searchBar').value; //This gets value from <input>
    if(inputText != ""){
        addItems("#drop", inputText);
    }
});

$(function() {
    var change = function( txt ) {
        $("#ID").append( '<li>' + txt + '</li>' );
    };
    change("this is the first change");
    change("this is the second change");
});*/

