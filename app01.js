

// const http = require('node:http');

// //'Req' es lo que estan solicitando por parte del cliente y el 'res' es la respuesta del servidor
// http.createServer( ( req, res ) => {


//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
//     res.writeHead(200, { 'Content-Type': 'application/csv' });
//     const persona = {
//         id: 1,
//         nombre: 'Karewit'
//     };

//     // res.write( JSON.stringify( persona ));

//     res.write( 'id, nombre\n' );
//     res.write( '1, Karewit\n' );
//     res.write( '2, Fernando\n' );
//     res.write( '3, Joaquin\n' );

//     res.end();
// })
// // .listen( 8080 );

// console.log('Escuchando el puerto: 8080');