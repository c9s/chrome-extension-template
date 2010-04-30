// vim:fdm=marker:et:sw=4:
(function() {
    // chrome request handlers
    var __handler =  { };
    var extHook = function(eventName,callback) {
        __handler[  eventName ] = callback ;
    };

    var extURL = function( url ) {
        return chrome.extension.getURL( url );
    };

    // }}}
    // EVENT HANDLERS {{{
    extHook( 'fetch-flickr-images' , function(e,sender,sendResponse) {
        sendResponse( { succ: 1 } );
    });
    extHook( 'eventName' , function(e,ender,sendResponse) {
        sendResponse({ succ: 1 });
    });

    // EXTENSION LISTENER INIT {{{
    chrome.extension.onRequest.addListener( function(request, sender, sendResponse) {
        console.log( 'context-script onRequest', request );
        var h = __handler[ request.action ];
        if( h ) {
            console.log( request.action , request );
            h(request, sender, sendResponse);
        }
        else {
            console.error( "Context-core: Handler not found."  );
        }
    });
    // }}}
})();
