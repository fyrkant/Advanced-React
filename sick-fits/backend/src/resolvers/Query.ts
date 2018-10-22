import { forwardTo } from 'prisma-binding';

export const Query = {
  // async items(parent: any, args: any, ctx: any, info: any) {
  //   const items = await ctx.db.query.items();

  //   return items;
  // }
  items: forwardTo('db')
};
