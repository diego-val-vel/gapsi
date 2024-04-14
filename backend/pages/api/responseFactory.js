export default class ResponseFactory {
    static createResponse(res, type, payload) {
      switch (type) {
        case 'SUCCESS':
          return res.status(200).json(payload);
        case 'CREATED':
          return res.status(201).json(payload);
        case 'NOT_FOUND':
          return res.status(404).json(payload);
        case 'CONFLICT':
          return res.status(409).json(payload);
        case 'METHOD_NOT_ALLOWED':
          return res.status(405).end();
        default:
          return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
}