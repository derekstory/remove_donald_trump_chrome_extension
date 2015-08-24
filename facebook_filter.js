$(document).ready(function() {
    
    //
    // INITIALIZE
    //
    removeTrump();

    
    //
    // Remove any post on the home page
    // that contain any combination of
    // "donald" && "trump"
    //
    function removeTrump() {
        $('.userContentWrapper').each(function() {
            var post = $(this);
            var postText = post.text();
            var postMatch = postText.toLowerCase().indexOf("donald") >= 0 && postText.toLowerCase().indexOf("trump") >= 0;
            if(postMatch) {
                post.hide();
            }
        });
    }


    //
    // Run function constantly due to infinite scroll
    //
    setInterval(removeTrump, 200);

});
