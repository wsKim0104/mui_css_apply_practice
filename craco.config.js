/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				tsConfigPath: "tsconfig.json",
			},
		},
	],
	babel: {
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
					alias: {
						"@apis": "./src/apis",
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@interfaces": "./src/interfaces",
						"@pages": "./src/pages",
						"@stores": "./src/stores",
						"@typings": "./src/typings",
						"@utils": "./src/utils",
						"@routes": "./src/routes",
						"@": "./src",
					},
				},
			],
		],
	},
};
