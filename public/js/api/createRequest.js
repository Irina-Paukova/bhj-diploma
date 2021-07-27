const createRequest = ( options = {} ) => {

    const xhr = new XMLHttpRequest;

    if (!options.callback) {
        options.callback = function() {};
    };

    try {
        let URL = options.url;

        if ( options.method === 'GET' ) {
            URL += encodeURL( options.data );

            xhr.open( 'GET', `${URL}` );
            xhr.responseType = 'json';
            xhr.send();
        } else {
            const  formData = new FormData;

            for (const [key, value] of Object.entries(options.data)) {
                formData.append( `${key}`, `${value}` );
                console.log(`${key}: ${value}`);
            };

            xhr.open( `${options.method}`, `${options.url}` );
            xhr.responseType = 'json'; 
            xhr.send( formData );  

        };

        if (xhr.readystatechange === 4) {
            options.callback( null, xhr.response );
        };

    } catch(e) {
        options.callback( e, xhr.response );
        console.log(e);
    };

console.log(xhr);

};

createRequest({
    url: '',
    data: {
      mail: 'ivan@biz.pro',
      password: 'odinodin',
    },
    method: 'GET',
    callback: function() { console.log("ghghg") }
  });

function encodeURL ( data ) {
    return '?' + Object.entries( data )
    .map(([ key, value ]) => `${ key }=${ value }` )
    .join( '&' );
};

