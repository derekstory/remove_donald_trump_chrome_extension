$(document).ready(function() {

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) { 
                $('.userContentWrapper').each(function() {
                    var post = $(this);
                    var postText = post.text();
                    var postMatch = postText.toLowerCase().indexOf("donald") >= 0 && postText.toLowerCase().indexOf("trump") >= 0;
                    if(postMatch) {
                        post.hide();
                    }
                });
            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
    
});
