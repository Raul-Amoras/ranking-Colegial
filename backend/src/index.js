/**
 *Tipos de Parâmentos:
 *  
 * Query Params: Parâmetro nomeado enviandis na rota após "?" (Filtros, paginação)
 * Route Params: Parâmento utilizados para identificar recursos
 * Request Body:
 */



const express = require ('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);