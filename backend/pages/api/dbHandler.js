import fs from 'fs';
import path from 'path';
import providers from '../../bd.json';

class DBHandler {
    constructor() {
        if (!DBHandler.instance) {
            this.data = providers;
            this.bdJsonPath = path.resolve('bd.json');
            DBHandler.instance = this;
        }
        return DBHandler.instance;
    }

    getData() {
        return this.data;
    }

    saveData() {
        fs.writeFileSync(this.bdJsonPath, JSON.stringify(this.data, null, 2));
    }

    addProvider(provider) {
        this.data.providers.push(provider);
        this.saveData();
    }

    deleteProvider(index) {
        this.data.providers.splice(index, 1);
        this.saveData();
    }

    isDuplicate(name) {
        return this.data.providers.some(provider => provider.name === name);
    }
}

const instance = new DBHandler();
Object.freeze(instance);

export default instance;
