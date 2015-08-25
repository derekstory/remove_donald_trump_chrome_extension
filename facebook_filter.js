(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {

                var nodes = document.getElementsByClassName('userContentWrapper');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++)
                {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('donald') >= 0 && text.indexOf('trump') >= 0)
                    {
                        nodes[ii].style.display = 'none';
                    }
                }
            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
    
})();
