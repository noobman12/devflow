
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TagQuestion
 * 
 */
export type TagQuestion = $Result.DefaultSelection<Prisma.$TagQuestionPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagQuestion`: Exposes CRUD operations for the **TagQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagQuestions
    * const tagQuestions = await prisma.tagQuestion.findMany()
    * ```
    */
  get tagQuestion(): Prisma.TagQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Question: 'Question',
    Answer: 'Answer',
    Tag: 'Tag',
    TagQuestion: 'TagQuestion',
    Collection: 'Collection',
    Interaction: 'Interaction',
    Vote: 'Vote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "question" | "answer" | "tag" | "tagQuestion" | "collection" | "interaction" | "vote"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AnswerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AnswerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TagFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TagAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TagQuestion: {
        payload: Prisma.$TagQuestionPayload<ExtArgs>
        fields: Prisma.TagQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          findFirst: {
            args: Prisma.TagQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          findMany: {
            args: Prisma.TagQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>[]
          }
          create: {
            args: Prisma.TagQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          createMany: {
            args: Prisma.TagQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          update: {
            args: Prisma.TagQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          deleteMany: {
            args: Prisma.TagQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagQuestionPayload>
          }
          aggregate: {
            args: Prisma.TagQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTagQuestion>
          }
          groupBy: {
            args: Prisma.TagQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagQuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TagQuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TagQuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TagQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<TagQuestionCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CollectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CollectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InteractionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InteractionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VoteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VoteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    tag?: TagOmit
    tagQuestion?: TagQuestionOmit
    collection?: CollectionOmit
    interaction?: InteractionOmit
    vote?: VoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    questions: number
    answers: number
    collections: number
    interactions: number
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    tags: number
    answer: number
    collections: number
    interactions: number
    votes: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | QuestionCountOutputTypeCountTagsArgs
    answer?: boolean | QuestionCountOutputTypeCountAnswerArgs
    collections?: boolean | QuestionCountOutputTypeCountCollectionsArgs
    interactions?: boolean | QuestionCountOutputTypeCountInteractionsArgs
    votes?: boolean | QuestionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagQuestionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    interactions: number
    votes: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | AnswerCountOutputTypeCountInteractionsArgs
    votes?: boolean | AnswerCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    Question: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | TagCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reputation: number | null
  }

  export type UserSumAggregateOutputType = {
    reputation: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    bio: string | null
    image: string | null
    location: string | null
    portfolio: string | null
    reputation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    bio: string | null
    image: string | null
    location: string | null
    portfolio: string | null
    reputation: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    bio: number
    image: number
    location: number
    portfolio: number
    reputation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reputation?: true
  }

  export type UserSumAggregateInputType = {
    reputation?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    bio?: true
    image?: true
    location?: true
    portfolio?: true
    reputation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    bio?: true
    image?: true
    location?: true
    portfolio?: true
    reputation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    bio?: true
    image?: true
    location?: true
    portfolio?: true
    reputation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    bio: string | null
    image: string | null
    location: string | null
    portfolio: string | null
    reputation: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    bio?: boolean
    image?: boolean
    location?: boolean
    portfolio?: boolean
    reputation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    bio?: boolean
    image?: boolean
    location?: boolean
    portfolio?: boolean
    reputation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "bio" | "image" | "location" | "portfolio" | "reputation" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      bio: string | null
      image: string | null
      location: string | null
      portfolio: string | null
      reputation: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly portfolio: FieldRef<"User", 'String'>
    readonly reputation: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    image: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    image: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    image: number
    password: number
    provider: number
    providerAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    image?: true
    password?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    name: string
    image: string | null
    password: string | null
    provider: string
    providerAccountId: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "image" | "password" | "provider" | "providerAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      image: string | null
      password: string | null
      provider: string
      providerAccountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly image: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    views: number | null
    answers: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type QuestionSumAggregateOutputType = {
    views: number | null
    answers: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    views: number | null
    answers: number | null
    upvotes: number | null
    downvotes: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    views: number | null
    answers: number | null
    upvotes: number | null
    downvotes: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    views: number
    answers: number
    upvotes: number
    downvotes: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    views?: true
    answers?: true
    upvotes?: true
    downvotes?: true
  }

  export type QuestionSumAggregateInputType = {
    views?: true
    answers?: true
    upvotes?: true
    downvotes?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    answers?: true
    upvotes?: true
    downvotes?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    answers?: true
    upvotes?: true
    downvotes?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    views?: true
    answers?: true
    upvotes?: true
    downvotes?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    title: string
    content: string
    views: number
    answers: number
    upvotes: number
    downvotes: number
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    answers?: boolean
    upvotes?: boolean
    downvotes?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    answer?: boolean | Question$answerArgs<ExtArgs>
    collections?: boolean | Question$collectionsArgs<ExtArgs>
    interactions?: boolean | Question$interactionsArgs<ExtArgs>
    votes?: boolean | Question$votesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    views?: boolean
    answers?: boolean
    upvotes?: boolean
    downvotes?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "views" | "answers" | "upvotes" | "downvotes" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    answer?: boolean | Question$answerArgs<ExtArgs>
    collections?: boolean | Question$collectionsArgs<ExtArgs>
    interactions?: boolean | Question$interactionsArgs<ExtArgs>
    votes?: boolean | Question$votesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagQuestionPayload<ExtArgs>[]
      answer: Prisma.$AnswerPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      views: number
      answers: number
      upvotes: number
      downvotes: number
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const question = await prisma.question.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Question.
     * @param {QuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const question = await prisma.question.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Question$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Question$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answer<T extends Question$answerArgs<ExtArgs> = {}>(args?: Subset<T, Question$answerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends Question$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends Question$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Question$votesArgs<ExtArgs> = {}>(args?: Subset<T, Question$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly title: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly views: FieldRef<"Question", 'Int'>
    readonly answers: FieldRef<"Question", 'Int'>
    readonly upvotes: FieldRef<"Question", 'Int'>
    readonly downvotes: FieldRef<"Question", 'Int'>
    readonly authorId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question findRaw
   */
  export type QuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question aggregateRaw
   */
  export type QuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question.tags
   */
  export type Question$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    where?: TagQuestionWhereInput
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    cursor?: TagQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagQuestionScalarFieldEnum | TagQuestionScalarFieldEnum[]
  }

  /**
   * Question.answer
   */
  export type Question$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.collections
   */
  export type Question$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Question.interactions
   */
  export type Question$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Question.votes
   */
  export type Question$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type AnswerSumAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    content: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    content: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    authorId: number
    questionId: number
    content: number
    upvotes: number
    downvotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type AnswerSumAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    content?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    content?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    content?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    authorId: string
    questionId: string
    content: string
    upvotes: number
    downvotes: number
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    interactions?: boolean | Answer$interactionsArgs<ExtArgs>
    votes?: boolean | Answer$votesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>



  export type AnswerSelectScalar = {
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "questionId" | "content" | "upvotes" | "downvotes" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    interactions?: boolean | Answer$interactionsArgs<ExtArgs>
    votes?: boolean | Answer$votesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      questionId: string
      content: string
      upvotes: number
      downvotes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * @param {AnswerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const answer = await prisma.answer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnswerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Answer.
     * @param {AnswerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const answer = await prisma.answer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AnswerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interactions<T extends Answer$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Answer$votesArgs<ExtArgs> = {}>(args?: Subset<T, Answer$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly authorId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly content: FieldRef<"Answer", 'String'>
    readonly upvotes: FieldRef<"Answer", 'Int'>
    readonly downvotes: FieldRef<"Answer", 'Int'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer findRaw
   */
  export type AnswerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Answer aggregateRaw
   */
  export type AnswerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Answer.interactions
   */
  export type Answer$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Answer.votes
   */
  export type Answer$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    questions: number | null
  }

  export type TagSumAggregateOutputType = {
    questions: number | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    questions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    questions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    questions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    questions?: true
  }

  export type TagSumAggregateInputType = {
    questions?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    questions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    questions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    questions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    questions: number
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    questions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Question?: boolean | Tag$QuestionArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    questions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "questions" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | Tag$QuestionArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      Question: Prisma.$TagQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      questions: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * @param {TagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tag = await prisma.tag.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TagFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tag.
     * @param {TagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tag = await prisma.tag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TagAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends Tag$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, Tag$QuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly questions: FieldRef<"Tag", 'Int'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag findRaw
   */
  export type TagFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tag aggregateRaw
   */
  export type TagAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tag.Question
   */
  export type Tag$QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    where?: TagQuestionWhereInput
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    cursor?: TagQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagQuestionScalarFieldEnum | TagQuestionScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TagQuestion
   */

  export type AggregateTagQuestion = {
    _count: TagQuestionCountAggregateOutputType | null
    _min: TagQuestionMinAggregateOutputType | null
    _max: TagQuestionMaxAggregateOutputType | null
  }

  export type TagQuestionMinAggregateOutputType = {
    id: string | null
    tagId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagQuestionMaxAggregateOutputType = {
    id: string | null
    tagId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagQuestionCountAggregateOutputType = {
    id: number
    tagId: number
    questionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagQuestionMinAggregateInputType = {
    id?: true
    tagId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagQuestionMaxAggregateInputType = {
    id?: true
    tagId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagQuestionCountAggregateInputType = {
    id?: true
    tagId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagQuestion to aggregate.
     */
    where?: TagQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagQuestions to fetch.
     */
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagQuestions
    **/
    _count?: true | TagQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagQuestionMaxAggregateInputType
  }

  export type GetTagQuestionAggregateType<T extends TagQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTagQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagQuestion[P]>
      : GetScalarType<T[P], AggregateTagQuestion[P]>
  }




  export type TagQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagQuestionWhereInput
    orderBy?: TagQuestionOrderByWithAggregationInput | TagQuestionOrderByWithAggregationInput[]
    by: TagQuestionScalarFieldEnum[] | TagQuestionScalarFieldEnum
    having?: TagQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagQuestionCountAggregateInputType | true
    _min?: TagQuestionMinAggregateInputType
    _max?: TagQuestionMaxAggregateInputType
  }

  export type TagQuestionGroupByOutputType = {
    id: string
    tagId: string
    questionId: string
    createdAt: Date
    updatedAt: Date
    _count: TagQuestionCountAggregateOutputType | null
    _min: TagQuestionMinAggregateOutputType | null
    _max: TagQuestionMaxAggregateOutputType | null
  }

  type GetTagQuestionGroupByPayload<T extends TagQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TagQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TagQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagQuestion"]>



  export type TagQuestionSelectScalar = {
    id?: boolean
    tagId?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagId" | "questionId" | "createdAt" | "updatedAt", ExtArgs["result"]["tagQuestion"]>
  export type TagQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $TagQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagQuestion"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tagId: string
      questionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tagQuestion"]>
    composites: {}
  }

  type TagQuestionGetPayload<S extends boolean | null | undefined | TagQuestionDefaultArgs> = $Result.GetResult<Prisma.$TagQuestionPayload, S>

  type TagQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagQuestionCountAggregateInputType | true
    }

  export interface TagQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagQuestion'], meta: { name: 'TagQuestion' } }
    /**
     * Find zero or one TagQuestion that matches the filter.
     * @param {TagQuestionFindUniqueArgs} args - Arguments to find a TagQuestion
     * @example
     * // Get one TagQuestion
     * const tagQuestion = await prisma.tagQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagQuestionFindUniqueArgs>(args: SelectSubset<T, TagQuestionFindUniqueArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TagQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagQuestionFindUniqueOrThrowArgs} args - Arguments to find a TagQuestion
     * @example
     * // Get one TagQuestion
     * const tagQuestion = await prisma.tagQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, TagQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionFindFirstArgs} args - Arguments to find a TagQuestion
     * @example
     * // Get one TagQuestion
     * const tagQuestion = await prisma.tagQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagQuestionFindFirstArgs>(args?: SelectSubset<T, TagQuestionFindFirstArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionFindFirstOrThrowArgs} args - Arguments to find a TagQuestion
     * @example
     * // Get one TagQuestion
     * const tagQuestion = await prisma.tagQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, TagQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TagQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagQuestions
     * const tagQuestions = await prisma.tagQuestion.findMany()
     * 
     * // Get first 10 TagQuestions
     * const tagQuestions = await prisma.tagQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagQuestionWithIdOnly = await prisma.tagQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagQuestionFindManyArgs>(args?: SelectSubset<T, TagQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TagQuestion.
     * @param {TagQuestionCreateArgs} args - Arguments to create a TagQuestion.
     * @example
     * // Create one TagQuestion
     * const TagQuestion = await prisma.tagQuestion.create({
     *   data: {
     *     // ... data to create a TagQuestion
     *   }
     * })
     * 
     */
    create<T extends TagQuestionCreateArgs>(args: SelectSubset<T, TagQuestionCreateArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TagQuestions.
     * @param {TagQuestionCreateManyArgs} args - Arguments to create many TagQuestions.
     * @example
     * // Create many TagQuestions
     * const tagQuestion = await prisma.tagQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagQuestionCreateManyArgs>(args?: SelectSubset<T, TagQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TagQuestion.
     * @param {TagQuestionDeleteArgs} args - Arguments to delete one TagQuestion.
     * @example
     * // Delete one TagQuestion
     * const TagQuestion = await prisma.tagQuestion.delete({
     *   where: {
     *     // ... filter to delete one TagQuestion
     *   }
     * })
     * 
     */
    delete<T extends TagQuestionDeleteArgs>(args: SelectSubset<T, TagQuestionDeleteArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TagQuestion.
     * @param {TagQuestionUpdateArgs} args - Arguments to update one TagQuestion.
     * @example
     * // Update one TagQuestion
     * const tagQuestion = await prisma.tagQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagQuestionUpdateArgs>(args: SelectSubset<T, TagQuestionUpdateArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TagQuestions.
     * @param {TagQuestionDeleteManyArgs} args - Arguments to filter TagQuestions to delete.
     * @example
     * // Delete a few TagQuestions
     * const { count } = await prisma.tagQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagQuestionDeleteManyArgs>(args?: SelectSubset<T, TagQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagQuestions
     * const tagQuestion = await prisma.tagQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagQuestionUpdateManyArgs>(args: SelectSubset<T, TagQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagQuestion.
     * @param {TagQuestionUpsertArgs} args - Arguments to update or create a TagQuestion.
     * @example
     * // Update or create a TagQuestion
     * const tagQuestion = await prisma.tagQuestion.upsert({
     *   create: {
     *     // ... data to create a TagQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagQuestion we want to update
     *   }
     * })
     */
    upsert<T extends TagQuestionUpsertArgs>(args: SelectSubset<T, TagQuestionUpsertArgs<ExtArgs>>): Prisma__TagQuestionClient<$Result.GetResult<Prisma.$TagQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TagQuestions that matches the filter.
     * @param {TagQuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tagQuestion = await prisma.tagQuestion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TagQuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TagQuestion.
     * @param {TagQuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tagQuestion = await prisma.tagQuestion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TagQuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TagQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionCountArgs} args - Arguments to filter TagQuestions to count.
     * @example
     * // Count the number of TagQuestions
     * const count = await prisma.tagQuestion.count({
     *   where: {
     *     // ... the filter for the TagQuestions we want to count
     *   }
     * })
    **/
    count<T extends TagQuestionCountArgs>(
      args?: Subset<T, TagQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagQuestionAggregateArgs>(args: Subset<T, TagQuestionAggregateArgs>): Prisma.PrismaPromise<GetTagQuestionAggregateType<T>>

    /**
     * Group by TagQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TagQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagQuestion model
   */
  readonly fields: TagQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TagQuestion model
   */
  interface TagQuestionFieldRefs {
    readonly id: FieldRef<"TagQuestion", 'String'>
    readonly tagId: FieldRef<"TagQuestion", 'String'>
    readonly questionId: FieldRef<"TagQuestion", 'String'>
    readonly createdAt: FieldRef<"TagQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"TagQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TagQuestion findUnique
   */
  export type TagQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TagQuestion to fetch.
     */
    where: TagQuestionWhereUniqueInput
  }

  /**
   * TagQuestion findUniqueOrThrow
   */
  export type TagQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TagQuestion to fetch.
     */
    where: TagQuestionWhereUniqueInput
  }

  /**
   * TagQuestion findFirst
   */
  export type TagQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TagQuestion to fetch.
     */
    where?: TagQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagQuestions to fetch.
     */
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagQuestions.
     */
    cursor?: TagQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagQuestions.
     */
    distinct?: TagQuestionScalarFieldEnum | TagQuestionScalarFieldEnum[]
  }

  /**
   * TagQuestion findFirstOrThrow
   */
  export type TagQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TagQuestion to fetch.
     */
    where?: TagQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagQuestions to fetch.
     */
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagQuestions.
     */
    cursor?: TagQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagQuestions.
     */
    distinct?: TagQuestionScalarFieldEnum | TagQuestionScalarFieldEnum[]
  }

  /**
   * TagQuestion findMany
   */
  export type TagQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TagQuestions to fetch.
     */
    where?: TagQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagQuestions to fetch.
     */
    orderBy?: TagQuestionOrderByWithRelationInput | TagQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagQuestions.
     */
    cursor?: TagQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagQuestions.
     */
    skip?: number
    distinct?: TagQuestionScalarFieldEnum | TagQuestionScalarFieldEnum[]
  }

  /**
   * TagQuestion create
   */
  export type TagQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a TagQuestion.
     */
    data: XOR<TagQuestionCreateInput, TagQuestionUncheckedCreateInput>
  }

  /**
   * TagQuestion createMany
   */
  export type TagQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagQuestions.
     */
    data: TagQuestionCreateManyInput | TagQuestionCreateManyInput[]
  }

  /**
   * TagQuestion update
   */
  export type TagQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a TagQuestion.
     */
    data: XOR<TagQuestionUpdateInput, TagQuestionUncheckedUpdateInput>
    /**
     * Choose, which TagQuestion to update.
     */
    where: TagQuestionWhereUniqueInput
  }

  /**
   * TagQuestion updateMany
   */
  export type TagQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagQuestions.
     */
    data: XOR<TagQuestionUpdateManyMutationInput, TagQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TagQuestions to update
     */
    where?: TagQuestionWhereInput
    /**
     * Limit how many TagQuestions to update.
     */
    limit?: number
  }

  /**
   * TagQuestion upsert
   */
  export type TagQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the TagQuestion to update in case it exists.
     */
    where: TagQuestionWhereUniqueInput
    /**
     * In case the TagQuestion found by the `where` argument doesn't exist, create a new TagQuestion with this data.
     */
    create: XOR<TagQuestionCreateInput, TagQuestionUncheckedCreateInput>
    /**
     * In case the TagQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagQuestionUpdateInput, TagQuestionUncheckedUpdateInput>
  }

  /**
   * TagQuestion delete
   */
  export type TagQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
    /**
     * Filter which TagQuestion to delete.
     */
    where: TagQuestionWhereUniqueInput
  }

  /**
   * TagQuestion deleteMany
   */
  export type TagQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagQuestions to delete
     */
    where?: TagQuestionWhereInput
    /**
     * Limit how many TagQuestions to delete.
     */
    limit?: number
  }

  /**
   * TagQuestion findRaw
   */
  export type TagQuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TagQuestion aggregateRaw
   */
  export type TagQuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TagQuestion without action
   */
  export type TagQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagQuestion
     */
    select?: TagQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagQuestion
     */
    omit?: TagQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    authorId: number
    questionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    authorId: string
    questionId: string
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>



  export type CollectionSelectScalar = {
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "questionId" | "createdAt" | "updatedAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      questionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * @param {CollectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const collection = await prisma.collection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CollectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Collection.
     * @param {CollectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const collection = await prisma.collection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CollectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly authorId: FieldRef<"Collection", 'String'>
    readonly questionId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection findRaw
   */
  export type CollectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Collection aggregateRaw
   */
  export type CollectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    questionId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    questionId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    questionId: number
    answerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InteractionMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: string
    userId: string
    action: string
    questionId: string | null
    answerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    questionId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | Interaction$questionArgs<ExtArgs>
    answer?: boolean | Interaction$answerArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>



  export type InteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    questionId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "questionId" | "answerId" | "createdAt" | "updatedAt", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | Interaction$questionArgs<ExtArgs>
    answer?: boolean | Interaction$answerArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs> | null
      answer: Prisma.$AnswerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      questionId: string | null
      answerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * @param {InteractionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const interaction = await prisma.interaction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InteractionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Interaction.
     * @param {InteractionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const interaction = await prisma.interaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InteractionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends Interaction$questionArgs<ExtArgs> = {}>(args?: Subset<T, Interaction$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    answer<T extends Interaction$answerArgs<ExtArgs> = {}>(args?: Subset<T, Interaction$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'String'>
    readonly userId: FieldRef<"Interaction", 'String'>
    readonly action: FieldRef<"Interaction", 'String'>
    readonly questionId: FieldRef<"Interaction", 'String'>
    readonly answerId: FieldRef<"Interaction", 'String'>
    readonly createdAt: FieldRef<"Interaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Interaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction findRaw
   */
  export type InteractionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Interaction aggregateRaw
   */
  export type InteractionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Interaction.question
   */
  export type Interaction$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Interaction.answer
   */
  export type Interaction$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    answerId: string | null
    voteType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    questionId: string | null
    answerId: string | null
    voteType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    authorId: number
    questionId: number
    answerId: number
    voteType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    answerId?: true
    voteType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    answerId?: true
    voteType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    authorId?: true
    questionId?: true
    answerId?: true
    voteType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    authorId: string
    questionId: string | null
    answerId: string | null
    voteType: string
    createdAt: Date
    updatedAt: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    answerId?: boolean
    voteType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | Vote$questionArgs<ExtArgs>
    answer?: boolean | Vote$answerArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>



  export type VoteSelectScalar = {
    id?: boolean
    authorId?: boolean
    questionId?: boolean
    answerId?: boolean
    voteType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "questionId" | "answerId" | "voteType" | "createdAt" | "updatedAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | Vote$questionArgs<ExtArgs>
    answer?: boolean | Vote$answerArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs> | null
      answer: Prisma.$AnswerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      questionId: string | null
      answerId: string | null
      voteType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * @param {VoteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vote = await prisma.vote.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VoteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vote.
     * @param {VoteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vote = await prisma.vote.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VoteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends Vote$questionArgs<ExtArgs> = {}>(args?: Subset<T, Vote$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    answer<T extends Vote$answerArgs<ExtArgs> = {}>(args?: Subset<T, Vote$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly authorId: FieldRef<"Vote", 'String'>
    readonly questionId: FieldRef<"Vote", 'String'>
    readonly answerId: FieldRef<"Vote", 'String'>
    readonly voteType: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
    readonly updatedAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote findRaw
   */
  export type VoteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vote aggregateRaw
   */
  export type VoteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vote.question
   */
  export type Vote$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Vote.answer
   */
  export type Vote$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    bio: 'bio',
    image: 'image',
    location: 'location',
    portfolio: 'portfolio',
    reputation: 'reputation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    image: 'image',
    password: 'password',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    views: 'views',
    answers: 'answers',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    questionId: 'questionId',
    content: 'content',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    questions: 'questions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TagQuestionScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    questionId: 'questionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagQuestionScalarFieldEnum = (typeof TagQuestionScalarFieldEnum)[keyof typeof TagQuestionScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    questionId: 'questionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    questionId: 'questionId',
    answerId: 'answerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    questionId: 'questionId',
    answerId: 'answerId',
    voteType: 'voteType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    portfolio?: StringNullableFilter<"User"> | string | null
    reputation?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    collections?: CollectionListRelationFilter
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    location?: SortOrder
    portfolio?: SortOrder
    reputation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    interactions?: InteractionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    portfolio?: StringNullableFilter<"User"> | string | null
    reputation?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    collections?: CollectionListRelationFilter
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    location?: SortOrder
    portfolio?: SortOrder
    reputation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"User"> | string | null
    reputation?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    image?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    image?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    image?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    views?: IntFilter<"Question"> | number
    answers?: IntFilter<"Question"> | number
    upvotes?: IntFilter<"Question"> | number
    downvotes?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagQuestionListRelationFilter
    answer?: AnswerListRelationFilter
    collections?: CollectionListRelationFilter
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    tags?: TagQuestionOrderByRelationAggregateInput
    answer?: AnswerOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    interactions?: InteractionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    views?: IntFilter<"Question"> | number
    answers?: IntFilter<"Question"> | number
    upvotes?: IntFilter<"Question"> | number
    downvotes?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagQuestionListRelationFilter
    answer?: AnswerListRelationFilter
    collections?: CollectionListRelationFilter
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    title?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    views?: IntWithAggregatesFilter<"Question"> | number
    answers?: IntWithAggregatesFilter<"Question"> | number
    upvotes?: IntWithAggregatesFilter<"Question"> | number
    downvotes?: IntWithAggregatesFilter<"Question"> | number
    authorId?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    authorId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    content?: StringFilter<"Answer"> | string
    upvotes?: IntFilter<"Answer"> | number
    downvotes?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    interactions?: InteractionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    authorId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    content?: StringFilter<"Answer"> | string
    upvotes?: IntFilter<"Answer"> | number
    downvotes?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    interactions?: InteractionListRelationFilter
    votes?: VoteListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    authorId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    content?: StringWithAggregatesFilter<"Answer"> | string
    upvotes?: IntWithAggregatesFilter<"Answer"> | number
    downvotes?: IntWithAggregatesFilter<"Answer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    questions?: IntFilter<"Tag"> | number
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    Question?: TagQuestionListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Question?: TagQuestionOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    questions?: IntFilter<"Tag"> | number
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    Question?: TagQuestionListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    questions?: IntWithAggregatesFilter<"Tag"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type TagQuestionWhereInput = {
    AND?: TagQuestionWhereInput | TagQuestionWhereInput[]
    OR?: TagQuestionWhereInput[]
    NOT?: TagQuestionWhereInput | TagQuestionWhereInput[]
    id?: StringFilter<"TagQuestion"> | string
    tagId?: StringFilter<"TagQuestion"> | string
    questionId?: StringFilter<"TagQuestion"> | string
    createdAt?: DateTimeFilter<"TagQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TagQuestion"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type TagQuestionOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tag?: TagOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type TagQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tagId_questionId?: TagQuestionTagIdQuestionIdCompoundUniqueInput
    AND?: TagQuestionWhereInput | TagQuestionWhereInput[]
    OR?: TagQuestionWhereInput[]
    NOT?: TagQuestionWhereInput | TagQuestionWhereInput[]
    tagId?: StringFilter<"TagQuestion"> | string
    questionId?: StringFilter<"TagQuestion"> | string
    createdAt?: DateTimeFilter<"TagQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TagQuestion"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "tagId_questionId">

  export type TagQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagQuestionCountOrderByAggregateInput
    _max?: TagQuestionMaxOrderByAggregateInput
    _min?: TagQuestionMinOrderByAggregateInput
  }

  export type TagQuestionScalarWhereWithAggregatesInput = {
    AND?: TagQuestionScalarWhereWithAggregatesInput | TagQuestionScalarWhereWithAggregatesInput[]
    OR?: TagQuestionScalarWhereWithAggregatesInput[]
    NOT?: TagQuestionScalarWhereWithAggregatesInput | TagQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TagQuestion"> | string
    tagId?: StringWithAggregatesFilter<"TagQuestion"> | string
    questionId?: StringWithAggregatesFilter<"TagQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TagQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TagQuestion"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    authorId?: StringFilter<"Collection"> | string
    questionId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authorId_questionId?: CollectionAuthorIdQuestionIdCompoundUniqueInput
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    authorId?: StringFilter<"Collection"> | string
    questionId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "authorId_questionId">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    authorId?: StringWithAggregatesFilter<"Collection"> | string
    questionId?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: StringFilter<"Interaction"> | string
    userId?: StringFilter<"Interaction"> | string
    action?: StringFilter<"Interaction"> | string
    questionId?: StringNullableFilter<"Interaction"> | string | null
    answerId?: StringNullableFilter<"Interaction"> | string | null
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    updatedAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    userId?: StringFilter<"Interaction"> | string
    action?: StringFilter<"Interaction"> | string
    questionId?: StringNullableFilter<"Interaction"> | string | null
    answerId?: StringNullableFilter<"Interaction"> | string | null
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    updatedAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interaction"> | string
    userId?: StringWithAggregatesFilter<"Interaction"> | string
    action?: StringWithAggregatesFilter<"Interaction"> | string
    questionId?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    answerId?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    authorId?: StringFilter<"Vote"> | string
    questionId?: StringNullableFilter<"Vote"> | string | null
    answerId?: StringNullableFilter<"Vote"> | string | null
    voteType?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    updatedAt?: DateTimeFilter<"Vote"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    authorId?: StringFilter<"Vote"> | string
    questionId?: StringNullableFilter<"Vote"> | string | null
    answerId?: StringNullableFilter<"Vote"> | string | null
    voteType?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    updatedAt?: DateTimeFilter<"Vote"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }, "id">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    authorId?: StringWithAggregatesFilter<"Vote"> | string
    questionId?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    answerId?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    voteType?: StringWithAggregatesFilter<"Vote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswerInput
    interactions?: InteractionCreateNestedManyWithoutAnswerInput
    votes?: VoteCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    authorId: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    interactions?: InteractionUncheckedCreateNestedManyWithoutAnswerInput
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    interactions?: InteractionUpdateManyWithoutAnswerNestedInput
    votes?: VoteUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: InteractionUncheckedUpdateManyWithoutAnswerNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    authorId: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    questions?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Question?: TagQuestionCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    questions?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Question?: TagQuestionUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: TagQuestionUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: TagQuestionUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    questions?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutQuestionInput
    question: QuestionCreateNestedOneWithoutTagsInput
  }

  export type TagQuestionUncheckedCreateInput = {
    id?: string
    tagId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutQuestionNestedInput
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagQuestionUncheckedUpdateInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionCreateManyInput = {
    id?: string
    tagId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionUncheckedUpdateManyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCollectionsInput
    question: QuestionCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    authorId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateManyInput = {
    id?: string
    authorId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateInput = {
    id?: string
    action: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
    question?: QuestionCreateNestedOneWithoutInteractionsInput
    answer?: AnswerCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
    question?: QuestionUpdateOneWithoutInteractionsNestedInput
    answer?: AnswerUpdateOneWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateManyInput = {
    id?: string
    userId: string
    action: string
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutVotesInput
    question?: QuestionCreateNestedOneWithoutVotesInput
    answer?: AnswerCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    authorId: string
    questionId?: string | null
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteUpdateInput = {
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    question?: QuestionUpdateOneWithoutVotesNestedInput
    answer?: AnswerUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    authorId: string
    questionId?: string | null
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    location?: SortOrder
    portfolio?: SortOrder
    reputation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    location?: SortOrder
    portfolio?: SortOrder
    reputation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    location?: SortOrder
    portfolio?: SortOrder
    reputation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TagQuestionListRelationFilter = {
    every?: TagQuestionWhereInput
    some?: TagQuestionWhereInput
    none?: TagQuestionWhereInput
  }

  export type TagQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    views?: SortOrder
    answers?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    questions?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    questions?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagQuestionTagIdQuestionIdCompoundUniqueInput = {
    tagId: string
    questionId: string
  }

  export type TagQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionAuthorIdQuestionIdCompoundUniqueInput = {
    authorId: string
    questionId: string
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionNullableScalarRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type AnswerNullableScalarRelationFilter = {
    is?: AnswerWhereInput | null
    isNot?: AnswerWhereInput | null
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type InteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput> | VoteCreateWithoutAuthorInput[] | VoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAuthorInput | VoteCreateOrConnectWithoutAuthorInput[]
    createMany?: VoteCreateManyAuthorInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput> | VoteCreateWithoutAuthorInput[] | VoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAuthorInput | VoteCreateOrConnectWithoutAuthorInput[]
    createMany?: VoteCreateManyAuthorInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAuthorInput | AnswerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAuthorInput | AnswerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAuthorInput | AnswerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutAuthorInput | CollectionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutAuthorInput | CollectionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutAuthorInput | CollectionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type InteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput> | VoteCreateWithoutAuthorInput[] | VoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAuthorInput | VoteCreateOrConnectWithoutAuthorInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutAuthorInput | VoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoteCreateManyAuthorInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutAuthorInput | VoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutAuthorInput | VoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput> | AnswerCreateWithoutAuthorInput[] | AnswerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput | AnswerCreateOrConnectWithoutAuthorInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAuthorInput | AnswerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnswerCreateManyAuthorInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAuthorInput | AnswerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAuthorInput | AnswerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput> | CollectionCreateWithoutAuthorInput[] | CollectionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutAuthorInput | CollectionCreateOrConnectWithoutAuthorInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutAuthorInput | CollectionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CollectionCreateManyAuthorInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutAuthorInput | CollectionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutAuthorInput | CollectionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput> | VoteCreateWithoutAuthorInput[] | VoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAuthorInput | VoteCreateOrConnectWithoutAuthorInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutAuthorInput | VoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoteCreateManyAuthorInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutAuthorInput | VoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutAuthorInput | VoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type TagQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput> | TagQuestionCreateWithoutQuestionInput[] | TagQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutQuestionInput | TagQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: TagQuestionCreateManyQuestionInputEnvelope
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput> | CollectionCreateWithoutQuestionInput[] | CollectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutQuestionInput | CollectionCreateOrConnectWithoutQuestionInput[]
    createMany?: CollectionCreateManyQuestionInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type InteractionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput> | InteractionCreateWithoutQuestionInput[] | InteractionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutQuestionInput | InteractionCreateOrConnectWithoutQuestionInput[]
    createMany?: InteractionCreateManyQuestionInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutQuestionInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type TagQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput> | TagQuestionCreateWithoutQuestionInput[] | TagQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutQuestionInput | TagQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: TagQuestionCreateManyQuestionInputEnvelope
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput> | CollectionCreateWithoutQuestionInput[] | CollectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutQuestionInput | CollectionCreateOrConnectWithoutQuestionInput[]
    createMany?: CollectionCreateManyQuestionInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput> | InteractionCreateWithoutQuestionInput[] | InteractionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutQuestionInput | InteractionCreateOrConnectWithoutQuestionInput[]
    createMany?: InteractionCreateManyQuestionInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type TagQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput> | TagQuestionCreateWithoutQuestionInput[] | TagQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutQuestionInput | TagQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: TagQuestionUpsertWithWhereUniqueWithoutQuestionInput | TagQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TagQuestionCreateManyQuestionInputEnvelope
    set?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    disconnect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    delete?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    update?: TagQuestionUpdateWithWhereUniqueWithoutQuestionInput | TagQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TagQuestionUpdateManyWithWhereWithoutQuestionInput | TagQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput> | CollectionCreateWithoutQuestionInput[] | CollectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutQuestionInput | CollectionCreateOrConnectWithoutQuestionInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutQuestionInput | CollectionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: CollectionCreateManyQuestionInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutQuestionInput | CollectionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutQuestionInput | CollectionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type InteractionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput> | InteractionCreateWithoutQuestionInput[] | InteractionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutQuestionInput | InteractionCreateOrConnectWithoutQuestionInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutQuestionInput | InteractionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: InteractionCreateManyQuestionInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutQuestionInput | InteractionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutQuestionInput | InteractionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutQuestionInput | VoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutQuestionInput | VoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutQuestionInput | VoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput> | TagQuestionCreateWithoutQuestionInput[] | TagQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutQuestionInput | TagQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: TagQuestionUpsertWithWhereUniqueWithoutQuestionInput | TagQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TagQuestionCreateManyQuestionInputEnvelope
    set?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    disconnect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    delete?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    update?: TagQuestionUpdateWithWhereUniqueWithoutQuestionInput | TagQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TagQuestionUpdateManyWithWhereWithoutQuestionInput | TagQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput> | CollectionCreateWithoutQuestionInput[] | CollectionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutQuestionInput | CollectionCreateOrConnectWithoutQuestionInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutQuestionInput | CollectionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: CollectionCreateManyQuestionInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutQuestionInput | CollectionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutQuestionInput | CollectionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput> | InteractionCreateWithoutQuestionInput[] | InteractionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutQuestionInput | InteractionCreateOrConnectWithoutQuestionInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutQuestionInput | InteractionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: InteractionCreateManyQuestionInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutQuestionInput | InteractionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutQuestionInput | InteractionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput> | VoteCreateWithoutQuestionInput[] | VoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutQuestionInput | VoteCreateOrConnectWithoutQuestionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutQuestionInput | VoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: VoteCreateManyQuestionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutQuestionInput | VoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutQuestionInput | VoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type InteractionCreateNestedManyWithoutAnswerInput = {
    create?: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput> | InteractionCreateWithoutAnswerInput[] | InteractionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutAnswerInput | InteractionCreateOrConnectWithoutAnswerInput[]
    createMany?: InteractionCreateManyAnswerInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutAnswerInput = {
    create?: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput> | VoteCreateWithoutAnswerInput[] | VoteUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAnswerInput | VoteCreateOrConnectWithoutAnswerInput[]
    createMany?: VoteCreateManyAnswerInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput> | InteractionCreateWithoutAnswerInput[] | InteractionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutAnswerInput | InteractionCreateOrConnectWithoutAnswerInput[]
    createMany?: InteractionCreateManyAnswerInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput> | VoteCreateWithoutAnswerInput[] | VoteUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAnswerInput | VoteCreateOrConnectWithoutAnswerInput[]
    createMany?: VoteCreateManyAnswerInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswerInput, QuestionUpdateWithoutAnswerInput>, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type InteractionUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput> | InteractionCreateWithoutAnswerInput[] | InteractionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutAnswerInput | InteractionCreateOrConnectWithoutAnswerInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutAnswerInput | InteractionUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: InteractionCreateManyAnswerInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutAnswerInput | InteractionUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutAnswerInput | InteractionUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput> | VoteCreateWithoutAnswerInput[] | VoteUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAnswerInput | VoteCreateOrConnectWithoutAnswerInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutAnswerInput | VoteUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: VoteCreateManyAnswerInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutAnswerInput | VoteUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutAnswerInput | VoteUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput> | InteractionCreateWithoutAnswerInput[] | InteractionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutAnswerInput | InteractionCreateOrConnectWithoutAnswerInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutAnswerInput | InteractionUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: InteractionCreateManyAnswerInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutAnswerInput | InteractionUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutAnswerInput | InteractionUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput> | VoteCreateWithoutAnswerInput[] | VoteUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutAnswerInput | VoteCreateOrConnectWithoutAnswerInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutAnswerInput | VoteUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: VoteCreateManyAnswerInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutAnswerInput | VoteUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutAnswerInput | VoteUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type TagQuestionCreateNestedManyWithoutTagInput = {
    create?: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput> | TagQuestionCreateWithoutTagInput[] | TagQuestionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutTagInput | TagQuestionCreateOrConnectWithoutTagInput[]
    createMany?: TagQuestionCreateManyTagInputEnvelope
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
  }

  export type TagQuestionUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput> | TagQuestionCreateWithoutTagInput[] | TagQuestionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutTagInput | TagQuestionCreateOrConnectWithoutTagInput[]
    createMany?: TagQuestionCreateManyTagInputEnvelope
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
  }

  export type TagQuestionUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput> | TagQuestionCreateWithoutTagInput[] | TagQuestionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutTagInput | TagQuestionCreateOrConnectWithoutTagInput[]
    upsert?: TagQuestionUpsertWithWhereUniqueWithoutTagInput | TagQuestionUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagQuestionCreateManyTagInputEnvelope
    set?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    disconnect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    delete?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    update?: TagQuestionUpdateWithWhereUniqueWithoutTagInput | TagQuestionUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagQuestionUpdateManyWithWhereWithoutTagInput | TagQuestionUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
  }

  export type TagQuestionUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput> | TagQuestionCreateWithoutTagInput[] | TagQuestionUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagQuestionCreateOrConnectWithoutTagInput | TagQuestionCreateOrConnectWithoutTagInput[]
    upsert?: TagQuestionUpsertWithWhereUniqueWithoutTagInput | TagQuestionUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagQuestionCreateManyTagInputEnvelope
    set?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    disconnect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    delete?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    connect?: TagQuestionWhereUniqueInput | TagQuestionWhereUniqueInput[]
    update?: TagQuestionUpdateWithWhereUniqueWithoutTagInput | TagQuestionUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagQuestionUpdateManyWithWhereWithoutTagInput | TagQuestionUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
  }

  export type TagCreateNestedOneWithoutQuestionInput = {
    create?: XOR<TagCreateWithoutQuestionInput, TagUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionInput
    connect?: TagWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutTagsInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    connect?: QuestionWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<TagCreateWithoutQuestionInput, TagUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionInput
    upsert?: TagUpsertWithoutQuestionInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutQuestionInput, TagUpdateWithoutQuestionInput>, TagUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    upsert?: QuestionUpsertWithoutTagsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTagsInput, QuestionUpdateWithoutTagsInput>, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<QuestionCreateWithoutCollectionsInput, QuestionUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCollectionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<QuestionCreateWithoutCollectionsInput, QuestionUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCollectionsInput
    upsert?: QuestionUpsertWithoutCollectionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutCollectionsInput, QuestionUpdateWithoutCollectionsInput>, QuestionUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<QuestionCreateWithoutInteractionsInput, QuestionUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutInteractionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<AnswerCreateWithoutInteractionsInput, AnswerUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutInteractionsInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type QuestionUpdateOneWithoutInteractionsNestedInput = {
    create?: XOR<QuestionCreateWithoutInteractionsInput, QuestionUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutInteractionsInput
    upsert?: QuestionUpsertWithoutInteractionsInput
    disconnect?: boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutInteractionsInput, QuestionUpdateWithoutInteractionsInput>, QuestionUncheckedUpdateWithoutInteractionsInput>
  }

  export type AnswerUpdateOneWithoutInteractionsNestedInput = {
    create?: XOR<AnswerCreateWithoutInteractionsInput, AnswerUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutInteractionsInput
    upsert?: AnswerUpsertWithoutInteractionsInput
    disconnect?: boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutInteractionsInput, AnswerUpdateWithoutInteractionsInput>, AnswerUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutVotesInput = {
    create?: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutVotesInput = {
    create?: XOR<AnswerCreateWithoutVotesInput, AnswerUncheckedCreateWithoutVotesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutVotesInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type QuestionUpdateOneWithoutVotesNestedInput = {
    create?: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput
    upsert?: QuestionUpsertWithoutVotesInput
    disconnect?: boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutVotesInput, QuestionUpdateWithoutVotesInput>, QuestionUncheckedUpdateWithoutVotesInput>
  }

  export type AnswerUpdateOneWithoutVotesNestedInput = {
    create?: XOR<AnswerCreateWithoutVotesInput, AnswerUncheckedCreateWithoutVotesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutVotesInput
    upsert?: AnswerUpsertWithoutVotesInput
    disconnect?: boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutVotesInput, AnswerUpdateWithoutVotesInput>, AnswerUncheckedUpdateWithoutVotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type QuestionCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionCreateManyAuthorInputEnvelope = {
    data: QuestionCreateManyAuthorInput | QuestionCreateManyAuthorInput[]
  }

  export type AnswerCreateWithoutAuthorInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswerInput
    interactions?: InteractionCreateNestedManyWithoutAnswerInput
    votes?: VoteCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAuthorInput = {
    id?: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    interactions?: InteractionUncheckedCreateNestedManyWithoutAnswerInput
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput>
  }

  export type AnswerCreateManyAuthorInputEnvelope = {
    data: AnswerCreateManyAuthorInput | AnswerCreateManyAuthorInput[]
  }

  export type CollectionCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutAuthorInput = {
    id?: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type CollectionCreateManyAuthorInputEnvelope = {
    data: CollectionCreateManyAuthorInput | CollectionCreateManyAuthorInput[]
  }

  export type InteractionCreateWithoutUserInput = {
    id?: string
    action: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question?: QuestionCreateNestedOneWithoutInteractionsInput
    answer?: AnswerCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateOrConnectWithoutUserInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionCreateManyUserInputEnvelope = {
    data: InteractionCreateManyUserInput | InteractionCreateManyUserInput[]
  }

  export type VoteCreateWithoutAuthorInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question?: QuestionCreateNestedOneWithoutVotesInput
    answer?: AnswerCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    questionId?: string | null
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutAuthorInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput>
  }

  export type VoteCreateManyAuthorInputEnvelope = {
    data: VoteCreateManyAuthorInput | VoteCreateManyAuthorInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    image?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
  }

  export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    views?: IntFilter<"Question"> | number
    answers?: IntFilter<"Question"> | number
    upvotes?: IntFilter<"Question"> | number
    downvotes?: IntFilter<"Question"> | number
    authorId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAuthorInput, AnswerUncheckedUpdateWithoutAuthorInput>
    create: XOR<AnswerCreateWithoutAuthorInput, AnswerUncheckedCreateWithoutAuthorInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAuthorInput, AnswerUncheckedUpdateWithoutAuthorInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    authorId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    content?: StringFilter<"Answer"> | string
    upvotes?: IntFilter<"Answer"> | number
    downvotes?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutAuthorInput, CollectionUncheckedUpdateWithoutAuthorInput>
    create: XOR<CollectionCreateWithoutAuthorInput, CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutAuthorInput, CollectionUncheckedUpdateWithoutAuthorInput>
  }

  export type CollectionUpdateManyWithWhereWithoutAuthorInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    authorId?: StringFilter<"Collection"> | string
    questionId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type InteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
  }

  export type InteractionUpdateManyWithWhereWithoutUserInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: StringFilter<"Interaction"> | string
    userId?: StringFilter<"Interaction"> | string
    action?: StringFilter<"Interaction"> | string
    questionId?: StringNullableFilter<"Interaction"> | string | null
    answerId?: StringNullableFilter<"Interaction"> | string | null
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    updatedAt?: DateTimeFilter<"Interaction"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutAuthorInput, VoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<VoteCreateWithoutAuthorInput, VoteUncheckedCreateWithoutAuthorInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutAuthorInput, VoteUncheckedUpdateWithoutAuthorInput>
  }

  export type VoteUpdateManyWithWhereWithoutAuthorInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    authorId?: StringFilter<"Vote"> | string
    questionId?: StringNullableFilter<"Vote"> | string | null
    answerId?: StringNullableFilter<"Vote"> | string | null
    voteType?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    updatedAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type TagQuestionCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutQuestionInput
  }

  export type TagQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionCreateOrConnectWithoutQuestionInput = {
    where: TagQuestionWhereUniqueInput
    create: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TagQuestionCreateManyQuestionInputEnvelope = {
    data: TagQuestionCreateManyQuestionInput | TagQuestionCreateManyQuestionInput[]
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutAnswersInput
    interactions?: InteractionCreateNestedManyWithoutAnswerInput
    votes?: VoteCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    authorId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    interactions?: InteractionUncheckedCreateNestedManyWithoutAnswerInput
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
  }

  export type CollectionCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutQuestionInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutQuestionInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput>
  }

  export type CollectionCreateManyQuestionInputEnvelope = {
    data: CollectionCreateManyQuestionInput | CollectionCreateManyQuestionInput[]
  }

  export type InteractionCreateWithoutQuestionInput = {
    id?: string
    action: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
    answer?: AnswerCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    action: string
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateOrConnectWithoutQuestionInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput>
  }

  export type InteractionCreateManyQuestionInputEnvelope = {
    data: InteractionCreateManyQuestionInput | InteractionCreateManyQuestionInput[]
  }

  export type VoteCreateWithoutQuestionInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutVotesInput
    answer?: AnswerCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutQuestionInput = {
    id?: string
    authorId: string
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput>
  }

  export type VoteCreateManyQuestionInputEnvelope = {
    data: VoteCreateManyQuestionInput | VoteCreateManyQuestionInput[]
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TagQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TagQuestionWhereUniqueInput
    update: XOR<TagQuestionUpdateWithoutQuestionInput, TagQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<TagQuestionCreateWithoutQuestionInput, TagQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TagQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TagQuestionWhereUniqueInput
    data: XOR<TagQuestionUpdateWithoutQuestionInput, TagQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type TagQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: TagQuestionScalarWhereInput
    data: XOR<TagQuestionUpdateManyMutationInput, TagQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TagQuestionScalarWhereInput = {
    AND?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
    OR?: TagQuestionScalarWhereInput[]
    NOT?: TagQuestionScalarWhereInput | TagQuestionScalarWhereInput[]
    id?: StringFilter<"TagQuestion"> | string
    tagId?: StringFilter<"TagQuestion"> | string
    questionId?: StringFilter<"TagQuestion"> | string
    createdAt?: DateTimeFilter<"TagQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TagQuestion"> | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type CollectionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutQuestionInput, CollectionUncheckedUpdateWithoutQuestionInput>
    create: XOR<CollectionCreateWithoutQuestionInput, CollectionUncheckedCreateWithoutQuestionInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutQuestionInput, CollectionUncheckedUpdateWithoutQuestionInput>
  }

  export type CollectionUpdateManyWithWhereWithoutQuestionInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type InteractionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutQuestionInput, InteractionUncheckedUpdateWithoutQuestionInput>
    create: XOR<InteractionCreateWithoutQuestionInput, InteractionUncheckedCreateWithoutQuestionInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutQuestionInput, InteractionUncheckedUpdateWithoutQuestionInput>
  }

  export type InteractionUpdateManyWithWhereWithoutQuestionInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutQuestionInput, VoteUncheckedUpdateWithoutQuestionInput>
    create: XOR<VoteCreateWithoutQuestionInput, VoteUncheckedCreateWithoutQuestionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutQuestionInput, VoteUncheckedUpdateWithoutQuestionInput>
  }

  export type VoteUpdateManyWithWhereWithoutQuestionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type InteractionCreateWithoutAnswerInput = {
    id?: string
    action: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
    question?: QuestionCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateWithoutAnswerInput = {
    id?: string
    userId: string
    action: string
    questionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateOrConnectWithoutAnswerInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput>
  }

  export type InteractionCreateManyAnswerInputEnvelope = {
    data: InteractionCreateManyAnswerInput | InteractionCreateManyAnswerInput[]
  }

  export type VoteCreateWithoutAnswerInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutVotesInput
    question?: QuestionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutAnswerInput = {
    id?: string
    authorId: string
    questionId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutAnswerInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
  }

  export type VoteCreateManyAnswerInputEnvelope = {
    data: VoteCreateManyAnswerInput | VoteCreateManyAnswerInput[]
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type InteractionUpsertWithWhereUniqueWithoutAnswerInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutAnswerInput, InteractionUncheckedUpdateWithoutAnswerInput>
    create: XOR<InteractionCreateWithoutAnswerInput, InteractionUncheckedCreateWithoutAnswerInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutAnswerInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutAnswerInput, InteractionUncheckedUpdateWithoutAnswerInput>
  }

  export type InteractionUpdateManyWithWhereWithoutAnswerInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutAnswerInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutAnswerInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutAnswerInput, VoteUncheckedUpdateWithoutAnswerInput>
    create: XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutAnswerInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutAnswerInput, VoteUncheckedUpdateWithoutAnswerInput>
  }

  export type VoteUpdateManyWithWhereWithoutAnswerInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutAnswerInput>
  }

  export type TagQuestionCreateWithoutTagInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutTagsInput
  }

  export type TagQuestionUncheckedCreateWithoutTagInput = {
    id?: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionCreateOrConnectWithoutTagInput = {
    where: TagQuestionWhereUniqueInput
    create: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput>
  }

  export type TagQuestionCreateManyTagInputEnvelope = {
    data: TagQuestionCreateManyTagInput | TagQuestionCreateManyTagInput[]
  }

  export type TagQuestionUpsertWithWhereUniqueWithoutTagInput = {
    where: TagQuestionWhereUniqueInput
    update: XOR<TagQuestionUpdateWithoutTagInput, TagQuestionUncheckedUpdateWithoutTagInput>
    create: XOR<TagQuestionCreateWithoutTagInput, TagQuestionUncheckedCreateWithoutTagInput>
  }

  export type TagQuestionUpdateWithWhereUniqueWithoutTagInput = {
    where: TagQuestionWhereUniqueInput
    data: XOR<TagQuestionUpdateWithoutTagInput, TagQuestionUncheckedUpdateWithoutTagInput>
  }

  export type TagQuestionUpdateManyWithWhereWithoutTagInput = {
    where: TagQuestionScalarWhereInput
    data: XOR<TagQuestionUpdateManyMutationInput, TagQuestionUncheckedUpdateManyWithoutTagInput>
  }

  export type TagCreateWithoutQuestionInput = {
    id?: string
    name: string
    questions?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutQuestionInput = {
    id?: string
    name: string
    questions?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutQuestionInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutQuestionInput, TagUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTagsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
  }

  export type TagUpsertWithoutQuestionInput = {
    update: XOR<TagUpdateWithoutQuestionInput, TagUncheckedUpdateWithoutQuestionInput>
    create: XOR<TagCreateWithoutQuestionInput, TagUncheckedCreateWithoutQuestionInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutQuestionInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutQuestionInput, TagUncheckedUpdateWithoutQuestionInput>
  }

  export type TagUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutTagsInput = {
    update: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTagsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type QuestionUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type QuestionCreateWithoutCollectionsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCollectionsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCollectionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCollectionsInput, QuestionUncheckedCreateWithoutCollectionsInput>
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type QuestionUpsertWithoutCollectionsInput = {
    update: XOR<QuestionUpdateWithoutCollectionsInput, QuestionUncheckedUpdateWithoutCollectionsInput>
    create: XOR<QuestionCreateWithoutCollectionsInput, QuestionUncheckedCreateWithoutCollectionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutCollectionsInput, QuestionUncheckedUpdateWithoutCollectionsInput>
  }

  export type QuestionUpdateWithoutCollectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCollectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    votes?: VoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    votes?: VoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type QuestionCreateWithoutInteractionsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    votes?: VoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutInteractionsInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutInteractionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutInteractionsInput, QuestionUncheckedCreateWithoutInteractionsInput>
  }

  export type AnswerCreateWithoutInteractionsInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswerInput
    votes?: VoteCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutInteractionsInput = {
    id?: string
    authorId: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutInteractionsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutInteractionsInput, AnswerUncheckedCreateWithoutInteractionsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    votes?: VoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type QuestionUpsertWithoutInteractionsInput = {
    update: XOR<QuestionUpdateWithoutInteractionsInput, QuestionUncheckedUpdateWithoutInteractionsInput>
    create: XOR<QuestionCreateWithoutInteractionsInput, QuestionUncheckedCreateWithoutInteractionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutInteractionsInput, QuestionUncheckedUpdateWithoutInteractionsInput>
  }

  export type QuestionUpdateWithoutInteractionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutInteractionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithoutInteractionsInput = {
    update: XOR<AnswerUpdateWithoutInteractionsInput, AnswerUncheckedUpdateWithoutInteractionsInput>
    create: XOR<AnswerCreateWithoutInteractionsInput, AnswerUncheckedCreateWithoutInteractionsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutInteractionsInput, AnswerUncheckedUpdateWithoutInteractionsInput>
  }

  export type AnswerUpdateWithoutInteractionsInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    votes?: VoteUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutInteractionsInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    answers?: AnswerCreateNestedManyWithoutAuthorInput
    collections?: CollectionCreateNestedManyWithoutAuthorInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    username: string
    email: string
    bio?: string | null
    image?: string | null
    location?: string | null
    portfolio?: string | null
    reputation?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput
    collections?: CollectionUncheckedCreateNestedManyWithoutAuthorInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type QuestionCreateWithoutVotesInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutQuestionsInput
    tags?: TagQuestionCreateNestedManyWithoutQuestionInput
    answer?: AnswerCreateNestedManyWithoutQuestionInput
    collections?: CollectionCreateNestedManyWithoutQuestionInput
    interactions?: InteractionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagQuestionUncheckedCreateNestedManyWithoutQuestionInput
    answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    collections?: CollectionUncheckedCreateNestedManyWithoutQuestionInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutVotesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
  }

  export type AnswerCreateWithoutVotesInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswerInput
    interactions?: InteractionCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutVotesInput = {
    id?: string
    authorId: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    interactions?: InteractionUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutVotesInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutVotesInput, AnswerUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutAuthorNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutVotesInput = {
    update: XOR<QuestionUpdateWithoutVotesInput, QuestionUncheckedUpdateWithoutVotesInput>
    create: XOR<QuestionCreateWithoutVotesInput, QuestionUncheckedCreateWithoutVotesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutVotesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutVotesInput, QuestionUncheckedUpdateWithoutVotesInput>
  }

  export type QuestionUpdateWithoutVotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutVotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithoutVotesInput = {
    update: XOR<AnswerUpdateWithoutVotesInput, AnswerUncheckedUpdateWithoutVotesInput>
    create: XOR<AnswerCreateWithoutVotesInput, AnswerUncheckedCreateWithoutVotesInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutVotesInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutVotesInput, AnswerUncheckedUpdateWithoutVotesInput>
  }

  export type AnswerUpdateWithoutVotesInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    interactions?: InteractionUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutVotesInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: InteractionUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    name: string
    image?: string | null
    password?: string | null
    provider: string
    providerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    views?: number
    answers?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyAuthorInput = {
    id?: string
    questionId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateManyAuthorInput = {
    id?: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateManyUserInput = {
    id?: string
    action: string
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateManyAuthorInput = {
    id?: string
    questionId?: string | null
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUpdateManyWithoutQuestionNestedInput
    votes?: VoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutQuestionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    answers?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    interactions?: InteractionUpdateManyWithoutAnswerNestedInput
    votes?: VoteUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: InteractionUncheckedUpdateManyWithoutAnswerNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneWithoutInteractionsNestedInput
    answer?: AnswerUpdateOneWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutAuthorInput = {
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneWithoutVotesNestedInput
    answer?: AnswerUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutAuthorInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutAuthorInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionCreateManyQuestionInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    authorId: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateManyQuestionInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionCreateManyQuestionInput = {
    id?: string
    userId: string
    action: string
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateManyQuestionInput = {
    id?: string
    authorId: string
    answerId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionUpdateWithoutQuestionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type TagQuestionUncheckedUpdateWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionUncheckedUpdateManyWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput
    interactions?: InteractionUpdateManyWithoutAnswerNestedInput
    votes?: VoteUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: InteractionUncheckedUpdateManyWithoutAnswerNestedInput
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutQuestionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUpdateWithoutQuestionInput = {
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
    answer?: AnswerUpdateOneWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutQuestionInput = {
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    answer?: AnswerUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateManyAnswerInput = {
    id?: string
    userId: string
    action: string
    questionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateManyAnswerInput = {
    id?: string
    authorId: string
    questionId?: string | null
    voteType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InteractionUpdateWithoutAnswerInput = {
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
    question?: QuestionUpdateOneWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateWithoutAnswerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyWithoutAnswerInput = {
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutAnswerInput = {
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    question?: QuestionUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutAnswerInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutAnswerInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionCreateManyTagInput = {
    id?: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagQuestionUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagQuestionUncheckedUpdateWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagQuestionUncheckedUpdateManyWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}