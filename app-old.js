
const http = require('http');

http.createServer( (request, response) => {
    
    // response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' })


    // response.write('id, name\n');
    // response.write('1, Ivan\n');
    // response.write('2, Maria\n');
    // response.write('3, Juan\n');
    // response.write('4, Pedro\n');


    ///--------------------------------------
    

    response.writeHead(200, { 'Content-Type': 'application/json' })
    
    const people = {
        name: 'Ivan',
        age: 20
    }
    
    response.write(JSON.stringify( people ));
    response.end();
})
.listen( 8080 );

console.log('Corriendo en el puerto: ', 8080)