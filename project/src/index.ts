import { User } from "./user";
import { MikroORM, ReflectMetadataProvider } from "mikro-orm";

module.exports = {
  handler: async () => {
    const orm = await MikroORM.init({
      type: "postgresql",
      entities: [User],
      dbName: "test",
      host: "localhost",
      port: 5432,
      metadataProvider: ReflectMetadataProvider,
      discovery: { disableDynamicFileAccess: true }
    });

    console.log("Connecting...");
    await orm.connect();
    console.log("Connected.");

    console.log("Counting users...");
    console.log("User count: ", await orm.em.count("User"));

    console.log("Closing connection...");
    await orm.close();
  }
};
