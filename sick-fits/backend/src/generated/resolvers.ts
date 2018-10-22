/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export interface ResolverFn<Root, Args, Ctx, Payload> {
  (root: Root, args: Args, ctx: Ctx, info: GraphQLResolveInfo):
    | Payload
    | Promise<Payload>;
}

export interface ITypes {
  Context: any;

  QueryRoot: any;
  MutationsRoot: any;
  ItemRoot: any;
  UserRoot: any;
}

export namespace IQuery {
  export type ItemsResolver<T extends ITypes> = ResolverFn<
    T["QueryRoot"],
    {},
    T["Context"],
    T["ItemRoot"][]
  >;

  export interface Resolver<T extends ITypes> {
    items: ItemsResolver<T>;
  }
}

export namespace IMutations {
  export interface ArgsCreateItem {
    title: string;
    description: string;
    price: number;
    image: string;
    largeImage: string;
  }

  export type CreateItemResolver<T extends ITypes> = ResolverFn<
    T["MutationsRoot"],
    {},
    T["Context"],
    T["ItemRoot"]
  >;

  export interface Resolver<T extends ITypes> {
    createItem: CreateItemResolver<T>;
  }
}

export namespace IItem {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type TitleResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type DescriptionResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type ImageResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type LargeImageResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type PriceResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    number
  >;

  export type CreateAtResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export type UpdatedAtResolver<T extends ITypes> = ResolverFn<
    T["ItemRoot"],
    {},
    T["Context"],
    string
  >;

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>;
    title: TitleResolver<T>;
    description: DescriptionResolver<T>;
    image: ImageResolver<T>;
    largeImage: LargeImageResolver<T>;
    price: PriceResolver<T>;
    createAt: CreateAtResolver<T>;
    updatedAt: UpdatedAtResolver<T>;
  }
}

export namespace IUser {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T["UserRoot"],
    {},
    T["Context"],
    string
  >;

  export type NameResolver<T extends ITypes> = ResolverFn<
    T["UserRoot"],
    {},
    T["Context"],
    string
  >;

  export type EmailResolver<T extends ITypes> = ResolverFn<
    T["UserRoot"],
    {},
    T["Context"],
    string
  >;

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>;
    name: NameResolver<T>;
    email: EmailResolver<T>;
  }
}

export interface IResolvers<T extends ITypes> {
  Query: IQuery.Resolver<T>;
  Mutations: IMutations.Resolver<T>;
  Item: IItem.Resolver<T>;
  User: IUser.Resolver<T>;
}
