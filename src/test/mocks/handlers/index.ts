import { rest } from "msw";
import { nanoid } from "nanoid";

export const handlers = [
  rest.get("https://my.backend/example", (req, res, ctx) => {
    return res(
      ctx.json({
        title: nanoid(),
        imageUrl: "/book-cover.jpg",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),
];
