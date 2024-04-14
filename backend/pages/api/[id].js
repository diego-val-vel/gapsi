import DBHandler from './dbHandler';
import ResponseFactory from './responseFactory';

export default function handler(req, res) {
  const { id } = req.query;
  const providerId = parseInt(id);
  const data = DBHandler.getData();

  if (req.method === 'DELETE') {
    const index = data.providers.findIndex(provider => provider.id === providerId);

    if (index === -1) {
      // Utiliza el ResponseFactory para enviar la respuesta de no encontrado
      return ResponseFactory.createResponse(res, 'NOT_FOUND', { message: 'Proveedor no encontrado' });
    }

    DBHandler.deleteProvider(index);
    // Utiliza el ResponseFactory para enviar la respuesta de éxito
    ResponseFactory.createResponse(res, 'SUCCESS', { message: 'Proveedor eliminado' });
  } else {
    // Utiliza el ResponseFactory para manejar métodos HTTP no permitidos
    ResponseFactory.createResponse(res, 'METHOD_NOT_ALLOWED');
  }
}
