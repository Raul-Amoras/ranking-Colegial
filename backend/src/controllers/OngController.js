/**
 * vai importar um objeto com metôdos.
 * precisar da conexao com o banco.
 */

 const connection = require('../database/connection');
 const crypto = require('crypto');
module.exports = {

    async List (request, response){
        const listOng = await connection('ongs').select('*');

        return response.json(listOng);

    },
    
    async create (request, response) {
        const id = crypto.randomBytes(4).toString('HEX');

        const { name, email, whatsapp, city, uf } = request.body;
    
   await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
};