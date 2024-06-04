import { getTag, updateUses } from "@konkon/db";
import {
	type CommandContext,
	Declare,
	LocalesT,
	Options,
	SubCommand,
	createStringOption,
} from "seyfert";
import { parseMessage } from "#lib/utils/akore";

const options = {
	tag: createStringOption({
		description: "The name of the tag.",
		required: true,
	}),
	guild_id: createStringOption({
		description: "The guild id of the tag.",
	}),
	owner_id: createStringOption({
		description: "The owner id of the tag.",
	}),
};

@Declare({
	name: "get",
	description: "Get a tag.",
	contexts: ["BOT_DM", "GUILD", "PRIVATE_CHANNEL"],
	integrationTypes: ["GUILD_INSTALL", "USER_INSTALL"],
})
@Options(options)
@LocalesT(void 0, "commands.tags.get.description")
export default class TagGetCommand extends SubCommand {
	async run(ctx: CommandContext<typeof options>) {
		const t = ctx.t.commands.tags.get(await ctx.locale()).get;

		const {
			options: { tag, guild_id, owner_id },
		} = ctx;

		const tagResult = await getTag(tag, guild_id && ctx.guildId, owner_id && ctx.author.id);

		if (!tagResult) {
			return t.errors(ctx).notFound(tag);
		}

		await updateUses(tagResult.id);
		await parseMessage(ctx, tagResult.content);
	}
}
