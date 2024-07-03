import { env } from "@seifato/env";
import { config } from "seyfert";

export default config.bot({
	token: env.DISCORD_APP_TOKEN,
	intents: ["Guilds", "MessageContent", "GuildMessages", "GuildMembers", "GuildPresences"],
	locations: {
		base: "src",
		output: "dist",
		langs: "locales",
		commands: "commands",
		events: "events",
		components: "components",
	},
	debug: env.NODE_ENV === "development",
});
