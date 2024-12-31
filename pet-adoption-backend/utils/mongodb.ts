import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL!, {});

let clientPromise = client.connect();

if (process.env.NODE_ENV === "development") {
  let globalAny: any = global;
  if (!globalAny._mongoClientPromise) {
    globalAny._mongoClientPromise = clientPromise;
  }
  clientPromise = globalAny._mongoClientPromise;
}

export default clientPromise;
