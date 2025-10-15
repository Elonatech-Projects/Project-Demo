import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let cachedClient = global._mongoClient;

if (!cachedClient) {
  cachedClient = { client: null };
  global._mongoClient = cachedClient;
}

export async function getMongoClient() {
  if (cachedClient.client) return cachedClient.client;
  if (!uri) throw new Error('Please define the MONGODB_URI environment variable');
  const client = new MongoClient(uri, {});
  await client.connect();
  cachedClient.client = client;
  return client;
}

export async function getDb(dbName) {
  const client = await getMongoClient();
  return client.db(dbName || undefined);
}
