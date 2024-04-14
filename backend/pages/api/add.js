import DBHandler from './dbHandler';
import ResponseFactory from './responseFactory';
import ProviderFactory from './providerFactory';

export default function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).end();
    return;
  }

  if (req.method === 'POST') {
    const providerData = req.body;

    if (DBHandler.isDuplicate(providerData.name)) {
      ResponseFactory.createResponse(res, 'CONFLICT', { message: 'Proveedor duplicado' });
    } else {
      const newId = DBHandler.getData().providers.length + 1;
      const newProvider = ProviderFactory.createProvider(providerData, newId);
      DBHandler.addProvider(newProvider);
      ResponseFactory.createResponse(res, 'CREATED', { message: 'Proveedor agregado', provider: newProvider });
    }
  } else {
    ResponseFactory.createResponse(res, 'METHOD_NOT_ALLOWED');
  }
}
