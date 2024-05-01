import zod from "zod";

export const createtodo = zod
  .object({
    title: zod.string(),
  })
  .strict();

export const modifytodo = zod
  .object({
    id: zod.string(),
  })
  .strict();
