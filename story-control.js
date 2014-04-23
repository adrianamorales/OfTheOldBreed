$(document).ready( function()
{
    $("#linkButton").click( function skipSection() {
        
        var currentPage = Flowtime.getPage();
        
        var currentSection = Flowtime.getSection();
        //get element/page the user is currently only
        
        // skip to the next section of the story
        
        // skip to the previous section of the story 
        
        // after user determines next location start the 
        
    });
                   
});


/*

Consier giving the user the option to update the menu/story on their own
*/

var shouldChange = true;

if(shouldChange) {
    //call this method after the DOM manipulation
    Flowtime.updateNavigation();
    
}

function skipSection(){
    var pageId = document.getElementById("#pageNum");
    var nextPage = document.getElementById("");
    
    
}