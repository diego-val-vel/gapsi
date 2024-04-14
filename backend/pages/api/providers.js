import DBHandler from './dbHandler';
import ResponseFactory from './responseFactory';

export default function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const data = DBHandler.getData();
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Se usa el ResponseFactory para enviar la respuesta
  ResponseFactory.createResponse(res, 'SUCCESS', {
    data: data.providers.slice(startIndex, endIndex),
    page,
    limit
  });
}
