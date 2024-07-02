import { getLocale } from "@seifato/db";
import { extendContext } from "seyfert";

export const SeifatoContext = extendContext((ctx) => {
	return {
		developers: {
			"@chewawi": "852970774067544165",
			"@mentallyillbassist": "788869971073040454",
			"@kingbcats": "1125490330679115847",
		},
		locale: getLocale(ctx),
	};
});
