import { createConnection, getConnectionManager } from "typeorm";

export const connect = async () => {
  const manager = getConnectionManager();
  const hasDefaultConnection = manager.has('default');
  const isConnected = hasDefaultConnection && manager.get('default').isConnected;
  if (!isConnected) {
    await createConnection();
  }
};
