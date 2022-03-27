const createRequest = ( options = {data: {}} ) => {

    const xhr = new XMLHttpRequest;

    if (!options.callback) {
        options.callback = function() {
            console.log('нет коллбека')
        };
    };

    let URL = options.url;
    let data;

    if ( options.method === 'GET' && options.data) {
        URL += encodeURL( options.data )
    } else if (options.data) {
        data = new FormData;
        
        for (const [key, value] of Object.entries(options.data)) {
             data.append( `${key}`, `${value}` );
        };
    };

    xhr.responseType = 'json';

    try {
        xhr.open( options.method, URL );
        xhr.send(data);
    } catch(err) {
        options.callback( err, xhr.response );
        console.log("Error")
    };

    xhr.addEventListener("load", function() {
        options.callback( null, xhr.response );
        console.log("All resources finished loading!");
    });
};

function encodeURL ( data ) {
    return '?' + Object.entries( data )
    .map(([ key, value ]) => `${ key }=${ value }` )
    .join( '&' );
};