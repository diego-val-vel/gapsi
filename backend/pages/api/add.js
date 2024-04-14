import DBHandler from './dbHandler';
import ResponseFactory from './responseFactory';
import ProviderFactory from './providerFactory';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const providerData = req.body;
    if (DBHandler.isDuplicate(providerData.name)) {
      return ResponseFactory.createResponse(res, 'CONFLICT', { message: 'Proveedor duplicado' });
    }

    const newId = DBHandler.getData().providers.length + 1;
    // Utiliza ProviderFactory para crear el nuevo proveedor
    const newProvider = ProviderFactory.createProvider(providerData, newId);

    DBHandler.addProvider(newProvider);
    return ResponseFactory.createResponse(res, 'CREATED', { message: 'Proveedor agregado', provider: newProvider });
  } else {
    return ResponseFactory.createResponse(res, 'METHOD_NOT_ALLOWED');
  }
}
