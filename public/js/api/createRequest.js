/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ( options = {} ) => {
    try {
       
        const xhr = new XMLHttpRequest;

        if ( options.method === 'GET' ) {
            xhr.open( 'GET', `${options.url} ? ${options.data.mail} & ${options.data.password}` );
            xhr.responseType = 'json';
            xhr.send();
        } else {
            const  formData = new FormData;

            formData.append( 'mail', `${options.data.mail}` );
            formData.append( 'password', `${options.data.password}` );

            xhr.open( `${options.method}`, `${options.url}` );
            xhr.responseType = 'json';
            xhr.send( formData );  
        };

        options.callback( null, xhr.response );

    } catch(e) {
        options.callback( e, xhr.response );
        console.log(e);
    };
};