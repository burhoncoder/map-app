import { DBSchema, openDB, IDBPDatabase, StoreNames } from "idb";
import { toast } from "react-toastify";

export class Storage<Schema extends DBSchema> {
  dbWrapper: Promise<IDBPDatabase<Schema>>;

  constructor(databaseName: string, storeName: StoreNames<Schema>) {
    this.dbWrapper = this.initDB(databaseName, storeName);
    this.dbWrapper.catch(() => {
      toast.error("There is an error in database operation");
    });
  }

  async initDB(databaseName: string, storeName: StoreNames<Schema>) {
    return openDB<Schema>(databaseName, 1, {
      upgrade(database) {
        database.createObjectStore(storeName);
      },
    });
  }
}
