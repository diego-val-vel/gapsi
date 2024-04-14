export default class ProviderFactory {
    static createProvider({ name, razonSocial, direccion, contacto, telefono }, id) {
      return {
        id,
        name,
        razonSocial,
        direccion,
        contacto,
        telefono
      };
    }
}
