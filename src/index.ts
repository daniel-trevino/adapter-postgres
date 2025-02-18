import { postgresAdapter } from "./client";

const postgresPlugin = {
	name: "postgres",
	description: "Custom PostgreSQL database adapter plugin",
	adapters: [postgresAdapter],
};
export default postgresPlugin;
