export const Mutation = {
  async createItem(parent: any, args: any, ctx: any, info: any) {
    // TODO: check if they are logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }
};
