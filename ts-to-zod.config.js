/**
 * ts-to-zod configuration.
 *
 * @type {import("./src/config").TsToZodConfig}
 */
module.exports = [
  {
    name: "prisma",
    input: "./node_modules/.prisma/client/index.d.ts",
    output: "./app/models/types.ts",
    nameFilter(name) {
      return ["User", "Password", "Note"].includes(name);
    },
  },
];
