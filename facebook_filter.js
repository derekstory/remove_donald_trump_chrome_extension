(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {

                // Main User Feed
                var nodes = document.getElementsByClassName('userContentWrapper');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++)
                {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('donald') >= 0 && text.indexOf('trump') >= 0)
                    {
                        nodes[ii].style.display = 'none';
                    }
                }

                // Trending Now Sidebar
                var sidebar = document.getElementsByClassName('_5my2');
                for (var ii = 0, nn = sidebar.length; ii < nn; ii++)
                {
                    var text = sidebar[ii] ? sidebar[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('donald') >= 0 && text.indexOf('trump') >= 0)
                    {
                        sidebar[ii].style.display = 'none';
                    }
                }
                
                // Trending Now within Feed
                var trending = document.getElementsByClassName('_4qjp');
                for (var ii = 0, nn = trending.length; ii < nn; ii++)
                {
                    var text = trending[ii] ? trending[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('donald') >= 0 && text.indexOf('trump') >= 0)
                    {
                        trending[ii].style.display = 'none';
                    }
                }

                // Top Header of Trending Page
                var header = document.getElementsByClassName('_2kg4');
                for (var ii = 0, nn = header.length; ii < nn; ii++)
                {
                    var text = header[ii] ? header[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('donald') >= 0 && text.indexOf('trump') >= 0)
                    {
                        header[ii].style.display = 'none';
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
