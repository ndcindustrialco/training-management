
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model CourseDescription
 * 
 */
export type CourseDescription = $Result.DefaultSelection<Prisma.$CourseDescriptionPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model TrainingRecord
 * 
 */
export type TrainingRecord = $Result.DefaultSelection<Prisma.$TrainingRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseDescription`: Exposes CRUD operations for the **CourseDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseDescriptions
    * const courseDescriptions = await prisma.courseDescription.findMany()
    * ```
    */
  get courseDescription(): Prisma.CourseDescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingRecord`: Exposes CRUD operations for the **TrainingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingRecords
    * const trainingRecords = await prisma.trainingRecord.findMany()
    * ```
    */
  get trainingRecord(): Prisma.TrainingRecordDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Employee: 'Employee',
    CourseDescription: 'CourseDescription',
    Course: 'Course',
    TrainingRecord: 'TrainingRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "courseDescription" | "course" | "trainingRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      CourseDescription: {
        payload: Prisma.$CourseDescriptionPayload<ExtArgs>
        fields: Prisma.CourseDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          findFirst: {
            args: Prisma.CourseDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          findMany: {
            args: Prisma.CourseDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>[]
          }
          create: {
            args: Prisma.CourseDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          createMany: {
            args: Prisma.CourseDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          update: {
            args: Prisma.CourseDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.CourseDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseDescriptionPayload>
          }
          aggregate: {
            args: Prisma.CourseDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseDescription>
          }
          groupBy: {
            args: Prisma.CourseDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<CourseDescriptionCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      TrainingRecord: {
        payload: Prisma.$TrainingRecordPayload<ExtArgs>
        fields: Prisma.TrainingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          findFirst: {
            args: Prisma.TrainingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          findMany: {
            args: Prisma.TrainingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>[]
          }
          create: {
            args: Prisma.TrainingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          createMany: {
            args: Prisma.TrainingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrainingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          update: {
            args: Prisma.TrainingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          deleteMany: {
            args: Prisma.TrainingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrainingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingRecordPayload>
          }
          aggregate: {
            args: Prisma.TrainingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingRecord>
          }
          groupBy: {
            args: Prisma.TrainingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    courseDescription?: CourseDescriptionOmit
    course?: CourseOmit
    trainingRecord?: TrainingRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    training_records: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    training_records?: boolean | EmployeeCountOutputTypeCountTraining_recordsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTraining_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    descriptions: number
    training_records: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    descriptions?: boolean | CourseCountOutputTypeCountDescriptionsArgs
    training_records?: boolean | CourseCountOutputTypeCountTraining_recordsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseDescriptionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTraining_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
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
    id: number
    username: string
    password: string
    role: string
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
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    employee_code: string | null
    employee_name_th: string | null
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    employee_code: string | null
    employee_name_th: string | null
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    employee_code: number
    employee_name_th: number
    employee_name_en: number
    gender: number
    position: number
    department: number
    work_location: number
    supervisor_name: number
    start_date: number
    end_date: number
    status: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    employee_code?: true
    employee_name_th?: true
    employee_name_en?: true
    gender?: true
    position?: true
    department?: true
    work_location?: true
    supervisor_name?: true
    start_date?: true
    end_date?: true
    status?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    employee_code: string
    employee_name_th: string
    employee_name_en: string | null
    gender: string | null
    position: string | null
    department: string | null
    work_location: string | null
    supervisor_name: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    training_records?: boolean | Employee$training_recordsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    employee_code?: boolean
    employee_name_th?: boolean
    employee_name_en?: boolean
    gender?: boolean
    position?: boolean
    department?: boolean
    work_location?: boolean
    supervisor_name?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_code" | "employee_name_th" | "employee_name_en" | "gender" | "position" | "department" | "work_location" | "supervisor_name" | "start_date" | "end_date" | "status", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    training_records?: boolean | Employee$training_recordsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      training_records: Prisma.$TrainingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_code: string
      employee_name_th: string
      employee_name_en: string | null
      gender: string | null
      position: string | null
      department: string | null
      work_location: string | null
      supervisor_name: string | null
      start_date: Date | null
      end_date: Date | null
      status: string | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    training_records<T extends Employee$training_recordsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$training_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly employee_code: FieldRef<"Employee", 'String'>
    readonly employee_name_th: FieldRef<"Employee", 'String'>
    readonly employee_name_en: FieldRef<"Employee", 'String'>
    readonly gender: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly work_location: FieldRef<"Employee", 'String'>
    readonly supervisor_name: FieldRef<"Employee", 'String'>
    readonly start_date: FieldRef<"Employee", 'DateTime'>
    readonly end_date: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.training_records
   */
  export type Employee$training_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    cursor?: TrainingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model CourseDescription
   */

  export type AggregateCourseDescription = {
    _count: CourseDescriptionCountAggregateOutputType | null
    _avg: CourseDescriptionAvgAggregateOutputType | null
    _sum: CourseDescriptionSumAggregateOutputType | null
    _min: CourseDescriptionMinAggregateOutputType | null
    _max: CourseDescriptionMaxAggregateOutputType | null
  }

  export type CourseDescriptionAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
  }

  export type CourseDescriptionSumAggregateOutputType = {
    id: number | null
    course_id: number | null
  }

  export type CourseDescriptionMinAggregateOutputType = {
    id: number | null
    course_id: number | null
    description: string | null
  }

  export type CourseDescriptionMaxAggregateOutputType = {
    id: number | null
    course_id: number | null
    description: string | null
  }

  export type CourseDescriptionCountAggregateOutputType = {
    id: number
    course_id: number
    description: number
    _all: number
  }


  export type CourseDescriptionAvgAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type CourseDescriptionSumAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type CourseDescriptionMinAggregateInputType = {
    id?: true
    course_id?: true
    description?: true
  }

  export type CourseDescriptionMaxAggregateInputType = {
    id?: true
    course_id?: true
    description?: true
  }

  export type CourseDescriptionCountAggregateInputType = {
    id?: true
    course_id?: true
    description?: true
    _all?: true
  }

  export type CourseDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseDescription to aggregate.
     */
    where?: CourseDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDescriptions to fetch.
     */
    orderBy?: CourseDescriptionOrderByWithRelationInput | CourseDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseDescriptions
    **/
    _count?: true | CourseDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseDescriptionMaxAggregateInputType
  }

  export type GetCourseDescriptionAggregateType<T extends CourseDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseDescription[P]>
      : GetScalarType<T[P], AggregateCourseDescription[P]>
  }




  export type CourseDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseDescriptionWhereInput
    orderBy?: CourseDescriptionOrderByWithAggregationInput | CourseDescriptionOrderByWithAggregationInput[]
    by: CourseDescriptionScalarFieldEnum[] | CourseDescriptionScalarFieldEnum
    having?: CourseDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseDescriptionCountAggregateInputType | true
    _avg?: CourseDescriptionAvgAggregateInputType
    _sum?: CourseDescriptionSumAggregateInputType
    _min?: CourseDescriptionMinAggregateInputType
    _max?: CourseDescriptionMaxAggregateInputType
  }

  export type CourseDescriptionGroupByOutputType = {
    id: number
    course_id: number
    description: string
    _count: CourseDescriptionCountAggregateOutputType | null
    _avg: CourseDescriptionAvgAggregateOutputType | null
    _sum: CourseDescriptionSumAggregateOutputType | null
    _min: CourseDescriptionMinAggregateOutputType | null
    _max: CourseDescriptionMaxAggregateOutputType | null
  }

  type GetCourseDescriptionGroupByPayload<T extends CourseDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], CourseDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type CourseDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    description?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseDescription"]>



  export type CourseDescriptionSelectScalar = {
    id?: boolean
    course_id?: boolean
    description?: boolean
  }

  export type CourseDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "description", ExtArgs["result"]["courseDescription"]>
  export type CourseDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseDescription"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course_id: number
      description: string
    }, ExtArgs["result"]["courseDescription"]>
    composites: {}
  }

  type CourseDescriptionGetPayload<S extends boolean | null | undefined | CourseDescriptionDefaultArgs> = $Result.GetResult<Prisma.$CourseDescriptionPayload, S>

  type CourseDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseDescriptionCountAggregateInputType | true
    }

  export interface CourseDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseDescription'], meta: { name: 'CourseDescription' } }
    /**
     * Find zero or one CourseDescription that matches the filter.
     * @param {CourseDescriptionFindUniqueArgs} args - Arguments to find a CourseDescription
     * @example
     * // Get one CourseDescription
     * const courseDescription = await prisma.courseDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseDescriptionFindUniqueArgs>(args: SelectSubset<T, CourseDescriptionFindUniqueArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseDescriptionFindUniqueOrThrowArgs} args - Arguments to find a CourseDescription
     * @example
     * // Get one CourseDescription
     * const courseDescription = await prisma.courseDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionFindFirstArgs} args - Arguments to find a CourseDescription
     * @example
     * // Get one CourseDescription
     * const courseDescription = await prisma.courseDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseDescriptionFindFirstArgs>(args?: SelectSubset<T, CourseDescriptionFindFirstArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionFindFirstOrThrowArgs} args - Arguments to find a CourseDescription
     * @example
     * // Get one CourseDescription
     * const courseDescription = await prisma.courseDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseDescriptions
     * const courseDescriptions = await prisma.courseDescription.findMany()
     * 
     * // Get first 10 CourseDescriptions
     * const courseDescriptions = await prisma.courseDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseDescriptionWithIdOnly = await prisma.courseDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseDescriptionFindManyArgs>(args?: SelectSubset<T, CourseDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseDescription.
     * @param {CourseDescriptionCreateArgs} args - Arguments to create a CourseDescription.
     * @example
     * // Create one CourseDescription
     * const CourseDescription = await prisma.courseDescription.create({
     *   data: {
     *     // ... data to create a CourseDescription
     *   }
     * })
     * 
     */
    create<T extends CourseDescriptionCreateArgs>(args: SelectSubset<T, CourseDescriptionCreateArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseDescriptions.
     * @param {CourseDescriptionCreateManyArgs} args - Arguments to create many CourseDescriptions.
     * @example
     * // Create many CourseDescriptions
     * const courseDescription = await prisma.courseDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseDescriptionCreateManyArgs>(args?: SelectSubset<T, CourseDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseDescription.
     * @param {CourseDescriptionDeleteArgs} args - Arguments to delete one CourseDescription.
     * @example
     * // Delete one CourseDescription
     * const CourseDescription = await prisma.courseDescription.delete({
     *   where: {
     *     // ... filter to delete one CourseDescription
     *   }
     * })
     * 
     */
    delete<T extends CourseDescriptionDeleteArgs>(args: SelectSubset<T, CourseDescriptionDeleteArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseDescription.
     * @param {CourseDescriptionUpdateArgs} args - Arguments to update one CourseDescription.
     * @example
     * // Update one CourseDescription
     * const courseDescription = await prisma.courseDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseDescriptionUpdateArgs>(args: SelectSubset<T, CourseDescriptionUpdateArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseDescriptions.
     * @param {CourseDescriptionDeleteManyArgs} args - Arguments to filter CourseDescriptions to delete.
     * @example
     * // Delete a few CourseDescriptions
     * const { count } = await prisma.courseDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDescriptionDeleteManyArgs>(args?: SelectSubset<T, CourseDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseDescriptions
     * const courseDescription = await prisma.courseDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseDescriptionUpdateManyArgs>(args: SelectSubset<T, CourseDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseDescription.
     * @param {CourseDescriptionUpsertArgs} args - Arguments to update or create a CourseDescription.
     * @example
     * // Update or create a CourseDescription
     * const courseDescription = await prisma.courseDescription.upsert({
     *   create: {
     *     // ... data to create a CourseDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseDescription we want to update
     *   }
     * })
     */
    upsert<T extends CourseDescriptionUpsertArgs>(args: SelectSubset<T, CourseDescriptionUpsertArgs<ExtArgs>>): Prisma__CourseDescriptionClient<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionCountArgs} args - Arguments to filter CourseDescriptions to count.
     * @example
     * // Count the number of CourseDescriptions
     * const count = await prisma.courseDescription.count({
     *   where: {
     *     // ... the filter for the CourseDescriptions we want to count
     *   }
     * })
    **/
    count<T extends CourseDescriptionCountArgs>(
      args?: Subset<T, CourseDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseDescriptionAggregateArgs>(args: Subset<T, CourseDescriptionAggregateArgs>): Prisma.PrismaPromise<GetCourseDescriptionAggregateType<T>>

    /**
     * Group by CourseDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseDescriptionGroupByArgs} args - Group by arguments.
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
      T extends CourseDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: CourseDescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseDescription model
   */
  readonly fields: CourseDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CourseDescription model
   */
  interface CourseDescriptionFieldRefs {
    readonly id: FieldRef<"CourseDescription", 'Int'>
    readonly course_id: FieldRef<"CourseDescription", 'Int'>
    readonly description: FieldRef<"CourseDescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseDescription findUnique
   */
  export type CourseDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which CourseDescription to fetch.
     */
    where: CourseDescriptionWhereUniqueInput
  }

  /**
   * CourseDescription findUniqueOrThrow
   */
  export type CourseDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which CourseDescription to fetch.
     */
    where: CourseDescriptionWhereUniqueInput
  }

  /**
   * CourseDescription findFirst
   */
  export type CourseDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which CourseDescription to fetch.
     */
    where?: CourseDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDescriptions to fetch.
     */
    orderBy?: CourseDescriptionOrderByWithRelationInput | CourseDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseDescriptions.
     */
    cursor?: CourseDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseDescriptions.
     */
    distinct?: CourseDescriptionScalarFieldEnum | CourseDescriptionScalarFieldEnum[]
  }

  /**
   * CourseDescription findFirstOrThrow
   */
  export type CourseDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which CourseDescription to fetch.
     */
    where?: CourseDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDescriptions to fetch.
     */
    orderBy?: CourseDescriptionOrderByWithRelationInput | CourseDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseDescriptions.
     */
    cursor?: CourseDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseDescriptions.
     */
    distinct?: CourseDescriptionScalarFieldEnum | CourseDescriptionScalarFieldEnum[]
  }

  /**
   * CourseDescription findMany
   */
  export type CourseDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which CourseDescriptions to fetch.
     */
    where?: CourseDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseDescriptions to fetch.
     */
    orderBy?: CourseDescriptionOrderByWithRelationInput | CourseDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseDescriptions.
     */
    cursor?: CourseDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseDescriptions.
     */
    skip?: number
    distinct?: CourseDescriptionScalarFieldEnum | CourseDescriptionScalarFieldEnum[]
  }

  /**
   * CourseDescription create
   */
  export type CourseDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseDescription.
     */
    data: XOR<CourseDescriptionCreateInput, CourseDescriptionUncheckedCreateInput>
  }

  /**
   * CourseDescription createMany
   */
  export type CourseDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseDescriptions.
     */
    data: CourseDescriptionCreateManyInput | CourseDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseDescription update
   */
  export type CourseDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseDescription.
     */
    data: XOR<CourseDescriptionUpdateInput, CourseDescriptionUncheckedUpdateInput>
    /**
     * Choose, which CourseDescription to update.
     */
    where: CourseDescriptionWhereUniqueInput
  }

  /**
   * CourseDescription updateMany
   */
  export type CourseDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseDescriptions.
     */
    data: XOR<CourseDescriptionUpdateManyMutationInput, CourseDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which CourseDescriptions to update
     */
    where?: CourseDescriptionWhereInput
    /**
     * Limit how many CourseDescriptions to update.
     */
    limit?: number
  }

  /**
   * CourseDescription upsert
   */
  export type CourseDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseDescription to update in case it exists.
     */
    where: CourseDescriptionWhereUniqueInput
    /**
     * In case the CourseDescription found by the `where` argument doesn't exist, create a new CourseDescription with this data.
     */
    create: XOR<CourseDescriptionCreateInput, CourseDescriptionUncheckedCreateInput>
    /**
     * In case the CourseDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseDescriptionUpdateInput, CourseDescriptionUncheckedUpdateInput>
  }

  /**
   * CourseDescription delete
   */
  export type CourseDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    /**
     * Filter which CourseDescription to delete.
     */
    where: CourseDescriptionWhereUniqueInput
  }

  /**
   * CourseDescription deleteMany
   */
  export type CourseDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseDescriptions to delete
     */
    where?: CourseDescriptionWhereInput
    /**
     * Limit how many CourseDescriptions to delete.
     */
    limit?: number
  }

  /**
   * CourseDescription without action
   */
  export type CourseDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    course_code: string | null
    course_name: string | null
    course_category: string | null
    training_type: string | null
    organizing_agency: string | null
    certificate_required: boolean | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    course_code: string | null
    course_name: string | null
    course_category: string | null
    training_type: string | null
    organizing_agency: string | null
    certificate_required: boolean | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    course_code: number
    course_name: number
    course_category: number
    training_type: number
    organizing_agency: number
    certificate_required: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    course_code?: true
    course_name?: true
    course_category?: true
    training_type?: true
    organizing_agency?: true
    certificate_required?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    course_code?: true
    course_name?: true
    course_category?: true
    training_type?: true
    organizing_agency?: true
    certificate_required?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    course_code?: true
    course_name?: true
    course_category?: true
    training_type?: true
    organizing_agency?: true
    certificate_required?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    course_code: string
    course_name: string | null
    course_category: string | null
    training_type: string | null
    organizing_agency: string | null
    certificate_required: boolean
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_code?: boolean
    course_name?: boolean
    course_category?: boolean
    training_type?: boolean
    organizing_agency?: boolean
    certificate_required?: boolean
    descriptions?: boolean | Course$descriptionsArgs<ExtArgs>
    training_records?: boolean | Course$training_recordsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    course_code?: boolean
    course_name?: boolean
    course_category?: boolean
    training_type?: boolean
    organizing_agency?: boolean
    certificate_required?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_code" | "course_name" | "course_category" | "training_type" | "organizing_agency" | "certificate_required", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    descriptions?: boolean | Course$descriptionsArgs<ExtArgs>
    training_records?: boolean | Course$training_recordsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      descriptions: Prisma.$CourseDescriptionPayload<ExtArgs>[]
      training_records: Prisma.$TrainingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course_code: string
      course_name: string | null
      course_category: string | null
      training_type: string | null
      organizing_agency: string | null
      certificate_required: boolean
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    descriptions<T extends Course$descriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$descriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    training_records<T extends Course$training_recordsArgs<ExtArgs> = {}>(args?: Subset<T, Course$training_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly course_code: FieldRef<"Course", 'String'>
    readonly course_name: FieldRef<"Course", 'String'>
    readonly course_category: FieldRef<"Course", 'String'>
    readonly training_type: FieldRef<"Course", 'String'>
    readonly organizing_agency: FieldRef<"Course", 'String'>
    readonly certificate_required: FieldRef<"Course", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.descriptions
   */
  export type Course$descriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseDescription
     */
    select?: CourseDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseDescription
     */
    omit?: CourseDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseDescriptionInclude<ExtArgs> | null
    where?: CourseDescriptionWhereInput
    orderBy?: CourseDescriptionOrderByWithRelationInput | CourseDescriptionOrderByWithRelationInput[]
    cursor?: CourseDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseDescriptionScalarFieldEnum | CourseDescriptionScalarFieldEnum[]
  }

  /**
   * Course.training_records
   */
  export type Course$training_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    cursor?: TrainingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model TrainingRecord
   */

  export type AggregateTrainingRecord = {
    _count: TrainingRecordCountAggregateOutputType | null
    _avg: TrainingRecordAvgAggregateOutputType | null
    _sum: TrainingRecordSumAggregateOutputType | null
    _min: TrainingRecordMinAggregateOutputType | null
    _max: TrainingRecordMaxAggregateOutputType | null
  }

  export type TrainingRecordAvgAggregateOutputType = {
    id: number | null
    employee_id: number | null
    course_id: number | null
    training_hour: number | null
  }

  export type TrainingRecordSumAggregateOutputType = {
    id: number | null
    employee_id: number | null
    course_id: number | null
    training_hour: number | null
  }

  export type TrainingRecordMinAggregateOutputType = {
    id: number | null
    employee_id: number | null
    course_id: number | null
    training_date: Date | null
    training_hour: number | null
    training_result: string | null
    trainer_name: string | null
    location: string | null
    expire_date: Date | null
    attachment: string | null
    note: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type TrainingRecordMaxAggregateOutputType = {
    id: number | null
    employee_id: number | null
    course_id: number | null
    training_date: Date | null
    training_hour: number | null
    training_result: string | null
    trainer_name: string | null
    location: string | null
    expire_date: Date | null
    attachment: string | null
    note: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type TrainingRecordCountAggregateOutputType = {
    id: number
    employee_id: number
    course_id: number
    training_date: number
    training_hour: number
    training_result: number
    trainer_name: number
    location: number
    expire_date: number
    attachment: number
    note: number
    created_by: number
    created_at: number
    _all: number
  }


  export type TrainingRecordAvgAggregateInputType = {
    id?: true
    employee_id?: true
    course_id?: true
    training_hour?: true
  }

  export type TrainingRecordSumAggregateInputType = {
    id?: true
    employee_id?: true
    course_id?: true
    training_hour?: true
  }

  export type TrainingRecordMinAggregateInputType = {
    id?: true
    employee_id?: true
    course_id?: true
    training_date?: true
    training_hour?: true
    training_result?: true
    trainer_name?: true
    location?: true
    expire_date?: true
    attachment?: true
    note?: true
    created_by?: true
    created_at?: true
  }

  export type TrainingRecordMaxAggregateInputType = {
    id?: true
    employee_id?: true
    course_id?: true
    training_date?: true
    training_hour?: true
    training_result?: true
    trainer_name?: true
    location?: true
    expire_date?: true
    attachment?: true
    note?: true
    created_by?: true
    created_at?: true
  }

  export type TrainingRecordCountAggregateInputType = {
    id?: true
    employee_id?: true
    course_id?: true
    training_date?: true
    training_hour?: true
    training_result?: true
    trainer_name?: true
    location?: true
    expire_date?: true
    attachment?: true
    note?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type TrainingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRecord to aggregate.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingRecords
    **/
    _count?: true | TrainingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingRecordMaxAggregateInputType
  }

  export type GetTrainingRecordAggregateType<T extends TrainingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingRecord[P]>
      : GetScalarType<T[P], AggregateTrainingRecord[P]>
  }




  export type TrainingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingRecordWhereInput
    orderBy?: TrainingRecordOrderByWithAggregationInput | TrainingRecordOrderByWithAggregationInput[]
    by: TrainingRecordScalarFieldEnum[] | TrainingRecordScalarFieldEnum
    having?: TrainingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingRecordCountAggregateInputType | true
    _avg?: TrainingRecordAvgAggregateInputType
    _sum?: TrainingRecordSumAggregateInputType
    _min?: TrainingRecordMinAggregateInputType
    _max?: TrainingRecordMaxAggregateInputType
  }

  export type TrainingRecordGroupByOutputType = {
    id: number
    employee_id: number
    course_id: number
    training_date: Date
    training_hour: number | null
    training_result: string | null
    trainer_name: string | null
    location: string | null
    expire_date: Date | null
    attachment: string | null
    note: string | null
    created_by: string | null
    created_at: Date
    _count: TrainingRecordCountAggregateOutputType | null
    _avg: TrainingRecordAvgAggregateOutputType | null
    _sum: TrainingRecordSumAggregateOutputType | null
    _min: TrainingRecordMinAggregateOutputType | null
    _max: TrainingRecordMaxAggregateOutputType | null
  }

  type GetTrainingRecordGroupByPayload<T extends TrainingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingRecordGroupByOutputType[P]>
        }
      >
    >


  export type TrainingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_id?: boolean
    course_id?: boolean
    training_date?: boolean
    training_hour?: boolean
    training_result?: boolean
    trainer_name?: boolean
    location?: boolean
    expire_date?: boolean
    attachment?: boolean
    note?: boolean
    created_by?: boolean
    created_at?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingRecord"]>



  export type TrainingRecordSelectScalar = {
    id?: boolean
    employee_id?: boolean
    course_id?: boolean
    training_date?: boolean
    training_hour?: boolean
    training_result?: boolean
    trainer_name?: boolean
    location?: boolean
    expire_date?: boolean
    attachment?: boolean
    note?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type TrainingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employee_id" | "course_id" | "training_date" | "training_hour" | "training_result" | "trainer_name" | "location" | "expire_date" | "attachment" | "note" | "created_by" | "created_at", ExtArgs["result"]["trainingRecord"]>
  export type TrainingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TrainingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingRecord"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_id: number
      course_id: number
      training_date: Date
      training_hour: number | null
      training_result: string | null
      trainer_name: string | null
      location: string | null
      expire_date: Date | null
      attachment: string | null
      note: string | null
      created_by: string | null
      created_at: Date
    }, ExtArgs["result"]["trainingRecord"]>
    composites: {}
  }

  type TrainingRecordGetPayload<S extends boolean | null | undefined | TrainingRecordDefaultArgs> = $Result.GetResult<Prisma.$TrainingRecordPayload, S>

  type TrainingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingRecordCountAggregateInputType | true
    }

  export interface TrainingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingRecord'], meta: { name: 'TrainingRecord' } }
    /**
     * Find zero or one TrainingRecord that matches the filter.
     * @param {TrainingRecordFindUniqueArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingRecordFindUniqueArgs>(args: SelectSubset<T, TrainingRecordFindUniqueArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingRecordFindUniqueOrThrowArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindFirstArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingRecordFindFirstArgs>(args?: SelectSubset<T, TrainingRecordFindFirstArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindFirstOrThrowArgs} args - Arguments to find a TrainingRecord
     * @example
     * // Get one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingRecords
     * const trainingRecords = await prisma.trainingRecord.findMany()
     * 
     * // Get first 10 TrainingRecords
     * const trainingRecords = await prisma.trainingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingRecordWithIdOnly = await prisma.trainingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingRecordFindManyArgs>(args?: SelectSubset<T, TrainingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingRecord.
     * @param {TrainingRecordCreateArgs} args - Arguments to create a TrainingRecord.
     * @example
     * // Create one TrainingRecord
     * const TrainingRecord = await prisma.trainingRecord.create({
     *   data: {
     *     // ... data to create a TrainingRecord
     *   }
     * })
     * 
     */
    create<T extends TrainingRecordCreateArgs>(args: SelectSubset<T, TrainingRecordCreateArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingRecords.
     * @param {TrainingRecordCreateManyArgs} args - Arguments to create many TrainingRecords.
     * @example
     * // Create many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingRecordCreateManyArgs>(args?: SelectSubset<T, TrainingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrainingRecord.
     * @param {TrainingRecordDeleteArgs} args - Arguments to delete one TrainingRecord.
     * @example
     * // Delete one TrainingRecord
     * const TrainingRecord = await prisma.trainingRecord.delete({
     *   where: {
     *     // ... filter to delete one TrainingRecord
     *   }
     * })
     * 
     */
    delete<T extends TrainingRecordDeleteArgs>(args: SelectSubset<T, TrainingRecordDeleteArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingRecord.
     * @param {TrainingRecordUpdateArgs} args - Arguments to update one TrainingRecord.
     * @example
     * // Update one TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingRecordUpdateArgs>(args: SelectSubset<T, TrainingRecordUpdateArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingRecords.
     * @param {TrainingRecordDeleteManyArgs} args - Arguments to filter TrainingRecords to delete.
     * @example
     * // Delete a few TrainingRecords
     * const { count } = await prisma.trainingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingRecordDeleteManyArgs>(args?: SelectSubset<T, TrainingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingRecords
     * const trainingRecord = await prisma.trainingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingRecordUpdateManyArgs>(args: SelectSubset<T, TrainingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrainingRecord.
     * @param {TrainingRecordUpsertArgs} args - Arguments to update or create a TrainingRecord.
     * @example
     * // Update or create a TrainingRecord
     * const trainingRecord = await prisma.trainingRecord.upsert({
     *   create: {
     *     // ... data to create a TrainingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingRecord we want to update
     *   }
     * })
     */
    upsert<T extends TrainingRecordUpsertArgs>(args: SelectSubset<T, TrainingRecordUpsertArgs<ExtArgs>>): Prisma__TrainingRecordClient<$Result.GetResult<Prisma.$TrainingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordCountArgs} args - Arguments to filter TrainingRecords to count.
     * @example
     * // Count the number of TrainingRecords
     * const count = await prisma.trainingRecord.count({
     *   where: {
     *     // ... the filter for the TrainingRecords we want to count
     *   }
     * })
    **/
    count<T extends TrainingRecordCountArgs>(
      args?: Subset<T, TrainingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingRecordAggregateArgs>(args: Subset<T, TrainingRecordAggregateArgs>): Prisma.PrismaPromise<GetTrainingRecordAggregateType<T>>

    /**
     * Group by TrainingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingRecordGroupByArgs} args - Group by arguments.
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
      T extends TrainingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingRecordGroupByArgs['orderBy'] }
        : { orderBy?: TrainingRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingRecord model
   */
  readonly fields: TrainingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrainingRecord model
   */
  interface TrainingRecordFieldRefs {
    readonly id: FieldRef<"TrainingRecord", 'Int'>
    readonly employee_id: FieldRef<"TrainingRecord", 'Int'>
    readonly course_id: FieldRef<"TrainingRecord", 'Int'>
    readonly training_date: FieldRef<"TrainingRecord", 'DateTime'>
    readonly training_hour: FieldRef<"TrainingRecord", 'Float'>
    readonly training_result: FieldRef<"TrainingRecord", 'String'>
    readonly trainer_name: FieldRef<"TrainingRecord", 'String'>
    readonly location: FieldRef<"TrainingRecord", 'String'>
    readonly expire_date: FieldRef<"TrainingRecord", 'DateTime'>
    readonly attachment: FieldRef<"TrainingRecord", 'String'>
    readonly note: FieldRef<"TrainingRecord", 'String'>
    readonly created_by: FieldRef<"TrainingRecord", 'String'>
    readonly created_at: FieldRef<"TrainingRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingRecord findUnique
   */
  export type TrainingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord findUniqueOrThrow
   */
  export type TrainingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord findFirst
   */
  export type TrainingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRecords.
     */
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord findFirstOrThrow
   */
  export type TrainingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecord to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingRecords.
     */
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord findMany
   */
  export type TrainingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrainingRecords to fetch.
     */
    where?: TrainingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingRecords to fetch.
     */
    orderBy?: TrainingRecordOrderByWithRelationInput | TrainingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingRecords.
     */
    cursor?: TrainingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingRecords.
     */
    skip?: number
    distinct?: TrainingRecordScalarFieldEnum | TrainingRecordScalarFieldEnum[]
  }

  /**
   * TrainingRecord create
   */
  export type TrainingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingRecord.
     */
    data: XOR<TrainingRecordCreateInput, TrainingRecordUncheckedCreateInput>
  }

  /**
   * TrainingRecord createMany
   */
  export type TrainingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingRecords.
     */
    data: TrainingRecordCreateManyInput | TrainingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingRecord update
   */
  export type TrainingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingRecord.
     */
    data: XOR<TrainingRecordUpdateInput, TrainingRecordUncheckedUpdateInput>
    /**
     * Choose, which TrainingRecord to update.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord updateMany
   */
  export type TrainingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingRecords.
     */
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyInput>
    /**
     * Filter which TrainingRecords to update
     */
    where?: TrainingRecordWhereInput
    /**
     * Limit how many TrainingRecords to update.
     */
    limit?: number
  }

  /**
   * TrainingRecord upsert
   */
  export type TrainingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingRecord to update in case it exists.
     */
    where: TrainingRecordWhereUniqueInput
    /**
     * In case the TrainingRecord found by the `where` argument doesn't exist, create a new TrainingRecord with this data.
     */
    create: XOR<TrainingRecordCreateInput, TrainingRecordUncheckedCreateInput>
    /**
     * In case the TrainingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingRecordUpdateInput, TrainingRecordUncheckedUpdateInput>
  }

  /**
   * TrainingRecord delete
   */
  export type TrainingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
    /**
     * Filter which TrainingRecord to delete.
     */
    where: TrainingRecordWhereUniqueInput
  }

  /**
   * TrainingRecord deleteMany
   */
  export type TrainingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingRecords to delete
     */
    where?: TrainingRecordWhereInput
    /**
     * Limit how many TrainingRecords to delete.
     */
    limit?: number
  }

  /**
   * TrainingRecord without action
   */
  export type TrainingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingRecord
     */
    select?: TrainingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingRecord
     */
    omit?: TrainingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    employee_code: 'employee_code',
    employee_name_th: 'employee_name_th',
    employee_name_en: 'employee_name_en',
    gender: 'gender',
    position: 'position',
    department: 'department',
    work_location: 'work_location',
    supervisor_name: 'supervisor_name',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const CourseDescriptionScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    description: 'description'
  };

  export type CourseDescriptionScalarFieldEnum = (typeof CourseDescriptionScalarFieldEnum)[keyof typeof CourseDescriptionScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    course_code: 'course_code',
    course_name: 'course_name',
    course_category: 'course_category',
    training_type: 'training_type',
    organizing_agency: 'organizing_agency',
    certificate_required: 'certificate_required'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TrainingRecordScalarFieldEnum: {
    id: 'id',
    employee_id: 'employee_id',
    course_id: 'course_id',
    training_date: 'training_date',
    training_hour: 'training_hour',
    training_result: 'training_result',
    trainer_name: 'trainer_name',
    location: 'location',
    expire_date: 'expire_date',
    attachment: 'attachment',
    note: 'note',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type TrainingRecordScalarFieldEnum = (typeof TrainingRecordScalarFieldEnum)[keyof typeof TrainingRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployeeOrderByRelevanceFieldEnum: {
    employee_code: 'employee_code',
    employee_name_th: 'employee_name_th',
    employee_name_en: 'employee_name_en',
    gender: 'gender',
    position: 'position',
    department: 'department',
    work_location: 'work_location',
    supervisor_name: 'supervisor_name',
    status: 'status'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const CourseDescriptionOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type CourseDescriptionOrderByRelevanceFieldEnum = (typeof CourseDescriptionOrderByRelevanceFieldEnum)[keyof typeof CourseDescriptionOrderByRelevanceFieldEnum]


  export const CourseOrderByRelevanceFieldEnum: {
    course_code: 'course_code',
    course_name: 'course_name',
    course_category: 'course_category',
    training_type: 'training_type',
    organizing_agency: 'organizing_agency'
  };

  export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum]


  export const TrainingRecordOrderByRelevanceFieldEnum: {
    training_result: 'training_result',
    trainer_name: 'trainer_name',
    location: 'location',
    attachment: 'attachment',
    note: 'note',
    created_by: 'created_by'
  };

  export type TrainingRecordOrderByRelevanceFieldEnum = (typeof TrainingRecordOrderByRelevanceFieldEnum)[keyof typeof TrainingRecordOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    employee_code?: StringFilter<"Employee"> | string
    employee_name_th?: StringFilter<"Employee"> | string
    employee_name_en?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    work_location?: StringNullableFilter<"Employee"> | string | null
    supervisor_name?: StringNullableFilter<"Employee"> | string | null
    start_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    training_records?: TrainingRecordListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    work_location?: SortOrderInput | SortOrder
    supervisor_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    training_records?: TrainingRecordOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employee_code?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employee_name_th?: StringFilter<"Employee"> | string
    employee_name_en?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    work_location?: StringNullableFilter<"Employee"> | string | null
    supervisor_name?: StringNullableFilter<"Employee"> | string | null
    start_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    training_records?: TrainingRecordListRelationFilter
  }, "id" | "employee_code">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    work_location?: SortOrderInput | SortOrder
    supervisor_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    employee_code?: StringWithAggregatesFilter<"Employee"> | string
    employee_name_th?: StringWithAggregatesFilter<"Employee"> | string
    employee_name_en?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    work_location?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    supervisor_name?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Employee"> | string | null
  }

  export type CourseDescriptionWhereInput = {
    AND?: CourseDescriptionWhereInput | CourseDescriptionWhereInput[]
    OR?: CourseDescriptionWhereInput[]
    NOT?: CourseDescriptionWhereInput | CourseDescriptionWhereInput[]
    id?: IntFilter<"CourseDescription"> | number
    course_id?: IntFilter<"CourseDescription"> | number
    description?: StringFilter<"CourseDescription"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    description?: SortOrder
    course?: CourseOrderByWithRelationInput
    _relevance?: CourseDescriptionOrderByRelevanceInput
  }

  export type CourseDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseDescriptionWhereInput | CourseDescriptionWhereInput[]
    OR?: CourseDescriptionWhereInput[]
    NOT?: CourseDescriptionWhereInput | CourseDescriptionWhereInput[]
    course_id?: IntFilter<"CourseDescription"> | number
    description?: StringFilter<"CourseDescription"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    description?: SortOrder
    _count?: CourseDescriptionCountOrderByAggregateInput
    _avg?: CourseDescriptionAvgOrderByAggregateInput
    _max?: CourseDescriptionMaxOrderByAggregateInput
    _min?: CourseDescriptionMinOrderByAggregateInput
    _sum?: CourseDescriptionSumOrderByAggregateInput
  }

  export type CourseDescriptionScalarWhereWithAggregatesInput = {
    AND?: CourseDescriptionScalarWhereWithAggregatesInput | CourseDescriptionScalarWhereWithAggregatesInput[]
    OR?: CourseDescriptionScalarWhereWithAggregatesInput[]
    NOT?: CourseDescriptionScalarWhereWithAggregatesInput | CourseDescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseDescription"> | number
    course_id?: IntWithAggregatesFilter<"CourseDescription"> | number
    description?: StringWithAggregatesFilter<"CourseDescription"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    course_code?: StringFilter<"Course"> | string
    course_name?: StringNullableFilter<"Course"> | string | null
    course_category?: StringNullableFilter<"Course"> | string | null
    training_type?: StringNullableFilter<"Course"> | string | null
    organizing_agency?: StringNullableFilter<"Course"> | string | null
    certificate_required?: BoolFilter<"Course"> | boolean
    descriptions?: CourseDescriptionListRelationFilter
    training_records?: TrainingRecordListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    course_code?: SortOrder
    course_name?: SortOrderInput | SortOrder
    course_category?: SortOrderInput | SortOrder
    training_type?: SortOrderInput | SortOrder
    organizing_agency?: SortOrderInput | SortOrder
    certificate_required?: SortOrder
    descriptions?: CourseDescriptionOrderByRelationAggregateInput
    training_records?: TrainingRecordOrderByRelationAggregateInput
    _relevance?: CourseOrderByRelevanceInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    course_code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    course_name?: StringNullableFilter<"Course"> | string | null
    course_category?: StringNullableFilter<"Course"> | string | null
    training_type?: StringNullableFilter<"Course"> | string | null
    organizing_agency?: StringNullableFilter<"Course"> | string | null
    certificate_required?: BoolFilter<"Course"> | boolean
    descriptions?: CourseDescriptionListRelationFilter
    training_records?: TrainingRecordListRelationFilter
  }, "id" | "course_code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    course_code?: SortOrder
    course_name?: SortOrderInput | SortOrder
    course_category?: SortOrderInput | SortOrder
    training_type?: SortOrderInput | SortOrder
    organizing_agency?: SortOrderInput | SortOrder
    certificate_required?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    course_code?: StringWithAggregatesFilter<"Course"> | string
    course_name?: StringNullableWithAggregatesFilter<"Course"> | string | null
    course_category?: StringNullableWithAggregatesFilter<"Course"> | string | null
    training_type?: StringNullableWithAggregatesFilter<"Course"> | string | null
    organizing_agency?: StringNullableWithAggregatesFilter<"Course"> | string | null
    certificate_required?: BoolWithAggregatesFilter<"Course"> | boolean
  }

  export type TrainingRecordWhereInput = {
    AND?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    OR?: TrainingRecordWhereInput[]
    NOT?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    id?: IntFilter<"TrainingRecord"> | number
    employee_id?: IntFilter<"TrainingRecord"> | number
    course_id?: IntFilter<"TrainingRecord"> | number
    training_date?: DateTimeFilter<"TrainingRecord"> | Date | string
    training_hour?: FloatNullableFilter<"TrainingRecord"> | number | null
    training_result?: StringNullableFilter<"TrainingRecord"> | string | null
    trainer_name?: StringNullableFilter<"TrainingRecord"> | string | null
    location?: StringNullableFilter<"TrainingRecord"> | string | null
    expire_date?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    attachment?: StringNullableFilter<"TrainingRecord"> | string | null
    note?: StringNullableFilter<"TrainingRecord"> | string | null
    created_by?: StringNullableFilter<"TrainingRecord"> | string | null
    created_at?: DateTimeFilter<"TrainingRecord"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type TrainingRecordOrderByWithRelationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_date?: SortOrder
    training_hour?: SortOrderInput | SortOrder
    training_result?: SortOrderInput | SortOrder
    trainer_name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    expire_date?: SortOrderInput | SortOrder
    attachment?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    _relevance?: TrainingRecordOrderByRelevanceInput
  }

  export type TrainingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    OR?: TrainingRecordWhereInput[]
    NOT?: TrainingRecordWhereInput | TrainingRecordWhereInput[]
    employee_id?: IntFilter<"TrainingRecord"> | number
    course_id?: IntFilter<"TrainingRecord"> | number
    training_date?: DateTimeFilter<"TrainingRecord"> | Date | string
    training_hour?: FloatNullableFilter<"TrainingRecord"> | number | null
    training_result?: StringNullableFilter<"TrainingRecord"> | string | null
    trainer_name?: StringNullableFilter<"TrainingRecord"> | string | null
    location?: StringNullableFilter<"TrainingRecord"> | string | null
    expire_date?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    attachment?: StringNullableFilter<"TrainingRecord"> | string | null
    note?: StringNullableFilter<"TrainingRecord"> | string | null
    created_by?: StringNullableFilter<"TrainingRecord"> | string | null
    created_at?: DateTimeFilter<"TrainingRecord"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type TrainingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_date?: SortOrder
    training_hour?: SortOrderInput | SortOrder
    training_result?: SortOrderInput | SortOrder
    trainer_name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    expire_date?: SortOrderInput | SortOrder
    attachment?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: TrainingRecordCountOrderByAggregateInput
    _avg?: TrainingRecordAvgOrderByAggregateInput
    _max?: TrainingRecordMaxOrderByAggregateInput
    _min?: TrainingRecordMinOrderByAggregateInput
    _sum?: TrainingRecordSumOrderByAggregateInput
  }

  export type TrainingRecordScalarWhereWithAggregatesInput = {
    AND?: TrainingRecordScalarWhereWithAggregatesInput | TrainingRecordScalarWhereWithAggregatesInput[]
    OR?: TrainingRecordScalarWhereWithAggregatesInput[]
    NOT?: TrainingRecordScalarWhereWithAggregatesInput | TrainingRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainingRecord"> | number
    employee_id?: IntWithAggregatesFilter<"TrainingRecord"> | number
    course_id?: IntWithAggregatesFilter<"TrainingRecord"> | number
    training_date?: DateTimeWithAggregatesFilter<"TrainingRecord"> | Date | string
    training_hour?: FloatNullableWithAggregatesFilter<"TrainingRecord"> | number | null
    training_result?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    trainer_name?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    location?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    expire_date?: DateTimeNullableWithAggregatesFilter<"TrainingRecord"> | Date | string | null
    attachment?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    note?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"TrainingRecord"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"TrainingRecord"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role?: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    training_records?: TrainingRecordCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
    training_records?: TrainingRecordUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    training_records?: TrainingRecordUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    training_records?: TrainingRecordUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseDescriptionCreateInput = {
    description: string
    course: CourseCreateNestedOneWithoutDescriptionsInput
  }

  export type CourseDescriptionUncheckedCreateInput = {
    id?: number
    course_id: number
    description: string
  }

  export type CourseDescriptionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutDescriptionsNestedInput
  }

  export type CourseDescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseDescriptionCreateManyInput = {
    id?: number
    course_id: number
    description: string
  }

  export type CourseDescriptionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseDescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    descriptions?: CourseDescriptionCreateNestedManyWithoutCourseInput
    training_records?: TrainingRecordCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    descriptions?: CourseDescriptionUncheckedCreateNestedManyWithoutCourseInput
    training_records?: TrainingRecordUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    descriptions?: CourseDescriptionUpdateManyWithoutCourseNestedInput
    training_records?: TrainingRecordUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    descriptions?: CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInput
    training_records?: TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
  }

  export type CourseUpdateManyMutationInput = {
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrainingRecordCreateInput = {
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutTraining_recordsInput
    course: CourseCreateNestedOneWithoutTraining_recordsInput
  }

  export type TrainingRecordUncheckedCreateInput = {
    id?: number
    employee_id: number
    course_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type TrainingRecordUpdateInput = {
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTraining_recordsNestedInput
    course?: CourseUpdateOneRequiredWithoutTraining_recordsNestedInput
  }

  export type TrainingRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordCreateManyInput = {
    id?: number
    employee_id: number
    course_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type TrainingRecordUpdateManyMutationInput = {
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TrainingRecordListRelationFilter = {
    every?: TrainingRecordWhereInput
    some?: TrainingRecordWhereInput
    none?: TrainingRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    employee_name_th?: SortOrder
    employee_name_en?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    department?: SortOrder
    work_location?: SortOrder
    supervisor_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseDescriptionOrderByRelevanceInput = {
    fields: CourseDescriptionOrderByRelevanceFieldEnum | CourseDescriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    description?: SortOrder
  }

  export type CourseDescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
  }

  export type CourseDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    description?: SortOrder
  }

  export type CourseDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    description?: SortOrder
  }

  export type CourseDescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseDescriptionListRelationFilter = {
    every?: CourseDescriptionWhereInput
    some?: CourseDescriptionWhereInput
    none?: CourseDescriptionWhereInput
  }

  export type CourseDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelevanceInput = {
    fields: CourseOrderByRelevanceFieldEnum | CourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    course_code?: SortOrder
    course_name?: SortOrder
    course_category?: SortOrder
    training_type?: SortOrder
    organizing_agency?: SortOrder
    certificate_required?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    course_code?: SortOrder
    course_name?: SortOrder
    course_category?: SortOrder
    training_type?: SortOrder
    organizing_agency?: SortOrder
    certificate_required?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    course_code?: SortOrder
    course_name?: SortOrder
    course_category?: SortOrder
    training_type?: SortOrder
    organizing_agency?: SortOrder
    certificate_required?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type TrainingRecordOrderByRelevanceInput = {
    fields: TrainingRecordOrderByRelevanceFieldEnum | TrainingRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrainingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_date?: SortOrder
    training_hour?: SortOrder
    training_result?: SortOrder
    trainer_name?: SortOrder
    location?: SortOrder
    expire_date?: SortOrder
    attachment?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type TrainingRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_hour?: SortOrder
  }

  export type TrainingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_date?: SortOrder
    training_hour?: SortOrder
    training_result?: SortOrder
    trainer_name?: SortOrder
    location?: SortOrder
    expire_date?: SortOrder
    attachment?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type TrainingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_date?: SortOrder
    training_hour?: SortOrder
    training_result?: SortOrder
    trainer_name?: SortOrder
    location?: SortOrder
    expire_date?: SortOrder
    attachment?: SortOrder
    note?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type TrainingRecordSumOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    course_id?: SortOrder
    training_hour?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainingRecordCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput> | TrainingRecordCreateWithoutEmployeeInput[] | TrainingRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutEmployeeInput | TrainingRecordCreateOrConnectWithoutEmployeeInput[]
    createMany?: TrainingRecordCreateManyEmployeeInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type TrainingRecordUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput> | TrainingRecordCreateWithoutEmployeeInput[] | TrainingRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutEmployeeInput | TrainingRecordCreateOrConnectWithoutEmployeeInput[]
    createMany?: TrainingRecordCreateManyEmployeeInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TrainingRecordUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput> | TrainingRecordCreateWithoutEmployeeInput[] | TrainingRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutEmployeeInput | TrainingRecordCreateOrConnectWithoutEmployeeInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutEmployeeInput | TrainingRecordUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TrainingRecordCreateManyEmployeeInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutEmployeeInput | TrainingRecordUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutEmployeeInput | TrainingRecordUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type TrainingRecordUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput> | TrainingRecordCreateWithoutEmployeeInput[] | TrainingRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutEmployeeInput | TrainingRecordCreateOrConnectWithoutEmployeeInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutEmployeeInput | TrainingRecordUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TrainingRecordCreateManyEmployeeInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutEmployeeInput | TrainingRecordUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutEmployeeInput | TrainingRecordUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutDescriptionsInput = {
    create?: XOR<CourseCreateWithoutDescriptionsInput, CourseUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDescriptionsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutDescriptionsNestedInput = {
    create?: XOR<CourseCreateWithoutDescriptionsInput, CourseUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDescriptionsInput
    upsert?: CourseUpsertWithoutDescriptionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutDescriptionsInput, CourseUpdateWithoutDescriptionsInput>, CourseUncheckedUpdateWithoutDescriptionsInput>
  }

  export type CourseDescriptionCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput> | CourseDescriptionCreateWithoutCourseInput[] | CourseDescriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseDescriptionCreateOrConnectWithoutCourseInput | CourseDescriptionCreateOrConnectWithoutCourseInput[]
    createMany?: CourseDescriptionCreateManyCourseInputEnvelope
    connect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
  }

  export type TrainingRecordCreateNestedManyWithoutCourseInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type CourseDescriptionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput> | CourseDescriptionCreateWithoutCourseInput[] | CourseDescriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseDescriptionCreateOrConnectWithoutCourseInput | CourseDescriptionCreateOrConnectWithoutCourseInput[]
    createMany?: CourseDescriptionCreateManyCourseInputEnvelope
    connect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
  }

  export type TrainingRecordUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseDescriptionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput> | CourseDescriptionCreateWithoutCourseInput[] | CourseDescriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseDescriptionCreateOrConnectWithoutCourseInput | CourseDescriptionCreateOrConnectWithoutCourseInput[]
    upsert?: CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput | CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseDescriptionCreateManyCourseInputEnvelope
    set?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    disconnect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    delete?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    connect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    update?: CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput | CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseDescriptionUpdateManyWithWhereWithoutCourseInput | CourseDescriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseDescriptionScalarWhereInput | CourseDescriptionScalarWhereInput[]
  }

  export type TrainingRecordUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCourseInput | TrainingRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCourseInput | TrainingRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCourseInput | TrainingRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput> | CourseDescriptionCreateWithoutCourseInput[] | CourseDescriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseDescriptionCreateOrConnectWithoutCourseInput | CourseDescriptionCreateOrConnectWithoutCourseInput[]
    upsert?: CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput | CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseDescriptionCreateManyCourseInputEnvelope
    set?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    disconnect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    delete?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    connect?: CourseDescriptionWhereUniqueInput | CourseDescriptionWhereUniqueInput[]
    update?: CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput | CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseDescriptionUpdateManyWithWhereWithoutCourseInput | CourseDescriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseDescriptionScalarWhereInput | CourseDescriptionScalarWhereInput[]
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput> | TrainingRecordCreateWithoutCourseInput[] | TrainingRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TrainingRecordCreateOrConnectWithoutCourseInput | TrainingRecordCreateOrConnectWithoutCourseInput[]
    upsert?: TrainingRecordUpsertWithWhereUniqueWithoutCourseInput | TrainingRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TrainingRecordCreateManyCourseInputEnvelope
    set?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    disconnect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    delete?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    connect?: TrainingRecordWhereUniqueInput | TrainingRecordWhereUniqueInput[]
    update?: TrainingRecordUpdateWithWhereUniqueWithoutCourseInput | TrainingRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TrainingRecordUpdateManyWithWhereWithoutCourseInput | TrainingRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutTraining_recordsInput = {
    create?: XOR<EmployeeCreateWithoutTraining_recordsInput, EmployeeUncheckedCreateWithoutTraining_recordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTraining_recordsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutTraining_recordsInput = {
    create?: XOR<CourseCreateWithoutTraining_recordsInput, CourseUncheckedCreateWithoutTraining_recordsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTraining_recordsInput
    connect?: CourseWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutTraining_recordsNestedInput = {
    create?: XOR<EmployeeCreateWithoutTraining_recordsInput, EmployeeUncheckedCreateWithoutTraining_recordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTraining_recordsInput
    upsert?: EmployeeUpsertWithoutTraining_recordsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTraining_recordsInput, EmployeeUpdateWithoutTraining_recordsInput>, EmployeeUncheckedUpdateWithoutTraining_recordsInput>
  }

  export type CourseUpdateOneRequiredWithoutTraining_recordsNestedInput = {
    create?: XOR<CourseCreateWithoutTraining_recordsInput, CourseUncheckedCreateWithoutTraining_recordsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTraining_recordsInput
    upsert?: CourseUpsertWithoutTraining_recordsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTraining_recordsInput, CourseUpdateWithoutTraining_recordsInput>, CourseUncheckedUpdateWithoutTraining_recordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TrainingRecordCreateWithoutEmployeeInput = {
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
    course: CourseCreateNestedOneWithoutTraining_recordsInput
  }

  export type TrainingRecordUncheckedCreateWithoutEmployeeInput = {
    id?: number
    course_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type TrainingRecordCreateOrConnectWithoutEmployeeInput = {
    where: TrainingRecordWhereUniqueInput
    create: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput>
  }

  export type TrainingRecordCreateManyEmployeeInputEnvelope = {
    data: TrainingRecordCreateManyEmployeeInput | TrainingRecordCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TrainingRecordUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: TrainingRecordWhereUniqueInput
    update: XOR<TrainingRecordUpdateWithoutEmployeeInput, TrainingRecordUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TrainingRecordCreateWithoutEmployeeInput, TrainingRecordUncheckedCreateWithoutEmployeeInput>
  }

  export type TrainingRecordUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: TrainingRecordWhereUniqueInput
    data: XOR<TrainingRecordUpdateWithoutEmployeeInput, TrainingRecordUncheckedUpdateWithoutEmployeeInput>
  }

  export type TrainingRecordUpdateManyWithWhereWithoutEmployeeInput = {
    where: TrainingRecordScalarWhereInput
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type TrainingRecordScalarWhereInput = {
    AND?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
    OR?: TrainingRecordScalarWhereInput[]
    NOT?: TrainingRecordScalarWhereInput | TrainingRecordScalarWhereInput[]
    id?: IntFilter<"TrainingRecord"> | number
    employee_id?: IntFilter<"TrainingRecord"> | number
    course_id?: IntFilter<"TrainingRecord"> | number
    training_date?: DateTimeFilter<"TrainingRecord"> | Date | string
    training_hour?: FloatNullableFilter<"TrainingRecord"> | number | null
    training_result?: StringNullableFilter<"TrainingRecord"> | string | null
    trainer_name?: StringNullableFilter<"TrainingRecord"> | string | null
    location?: StringNullableFilter<"TrainingRecord"> | string | null
    expire_date?: DateTimeNullableFilter<"TrainingRecord"> | Date | string | null
    attachment?: StringNullableFilter<"TrainingRecord"> | string | null
    note?: StringNullableFilter<"TrainingRecord"> | string | null
    created_by?: StringNullableFilter<"TrainingRecord"> | string | null
    created_at?: DateTimeFilter<"TrainingRecord"> | Date | string
  }

  export type CourseCreateWithoutDescriptionsInput = {
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    training_records?: TrainingRecordCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDescriptionsInput = {
    id?: number
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    training_records?: TrainingRecordUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDescriptionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDescriptionsInput, CourseUncheckedCreateWithoutDescriptionsInput>
  }

  export type CourseUpsertWithoutDescriptionsInput = {
    update: XOR<CourseUpdateWithoutDescriptionsInput, CourseUncheckedUpdateWithoutDescriptionsInput>
    create: XOR<CourseCreateWithoutDescriptionsInput, CourseUncheckedCreateWithoutDescriptionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutDescriptionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutDescriptionsInput, CourseUncheckedUpdateWithoutDescriptionsInput>
  }

  export type CourseUpdateWithoutDescriptionsInput = {
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    training_records?: TrainingRecordUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDescriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    training_records?: TrainingRecordUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseDescriptionCreateWithoutCourseInput = {
    description: string
  }

  export type CourseDescriptionUncheckedCreateWithoutCourseInput = {
    id?: number
    description: string
  }

  export type CourseDescriptionCreateOrConnectWithoutCourseInput = {
    where: CourseDescriptionWhereUniqueInput
    create: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput>
  }

  export type CourseDescriptionCreateManyCourseInputEnvelope = {
    data: CourseDescriptionCreateManyCourseInput | CourseDescriptionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TrainingRecordCreateWithoutCourseInput = {
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutTraining_recordsInput
  }

  export type TrainingRecordUncheckedCreateWithoutCourseInput = {
    id?: number
    employee_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type TrainingRecordCreateOrConnectWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    create: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput>
  }

  export type TrainingRecordCreateManyCourseInputEnvelope = {
    data: TrainingRecordCreateManyCourseInput | TrainingRecordCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseDescriptionUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseDescriptionWhereUniqueInput
    update: XOR<CourseDescriptionUpdateWithoutCourseInput, CourseDescriptionUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseDescriptionCreateWithoutCourseInput, CourseDescriptionUncheckedCreateWithoutCourseInput>
  }

  export type CourseDescriptionUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseDescriptionWhereUniqueInput
    data: XOR<CourseDescriptionUpdateWithoutCourseInput, CourseDescriptionUncheckedUpdateWithoutCourseInput>
  }

  export type CourseDescriptionUpdateManyWithWhereWithoutCourseInput = {
    where: CourseDescriptionScalarWhereInput
    data: XOR<CourseDescriptionUpdateManyMutationInput, CourseDescriptionUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseDescriptionScalarWhereInput = {
    AND?: CourseDescriptionScalarWhereInput | CourseDescriptionScalarWhereInput[]
    OR?: CourseDescriptionScalarWhereInput[]
    NOT?: CourseDescriptionScalarWhereInput | CourseDescriptionScalarWhereInput[]
    id?: IntFilter<"CourseDescription"> | number
    course_id?: IntFilter<"CourseDescription"> | number
    description?: StringFilter<"CourseDescription"> | string
  }

  export type TrainingRecordUpsertWithWhereUniqueWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    update: XOR<TrainingRecordUpdateWithoutCourseInput, TrainingRecordUncheckedUpdateWithoutCourseInput>
    create: XOR<TrainingRecordCreateWithoutCourseInput, TrainingRecordUncheckedCreateWithoutCourseInput>
  }

  export type TrainingRecordUpdateWithWhereUniqueWithoutCourseInput = {
    where: TrainingRecordWhereUniqueInput
    data: XOR<TrainingRecordUpdateWithoutCourseInput, TrainingRecordUncheckedUpdateWithoutCourseInput>
  }

  export type TrainingRecordUpdateManyWithWhereWithoutCourseInput = {
    where: TrainingRecordScalarWhereInput
    data: XOR<TrainingRecordUpdateManyMutationInput, TrainingRecordUncheckedUpdateManyWithoutCourseInput>
  }

  export type EmployeeCreateWithoutTraining_recordsInput = {
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
  }

  export type EmployeeUncheckedCreateWithoutTraining_recordsInput = {
    id?: number
    employee_code: string
    employee_name_th: string
    employee_name_en?: string | null
    gender?: string | null
    position?: string | null
    department?: string | null
    work_location?: string | null
    supervisor_name?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string | null
  }

  export type EmployeeCreateOrConnectWithoutTraining_recordsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTraining_recordsInput, EmployeeUncheckedCreateWithoutTraining_recordsInput>
  }

  export type CourseCreateWithoutTraining_recordsInput = {
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    descriptions?: CourseDescriptionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTraining_recordsInput = {
    id?: number
    course_code: string
    course_name?: string | null
    course_category?: string | null
    training_type?: string | null
    organizing_agency?: string | null
    certificate_required?: boolean
    descriptions?: CourseDescriptionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTraining_recordsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTraining_recordsInput, CourseUncheckedCreateWithoutTraining_recordsInput>
  }

  export type EmployeeUpsertWithoutTraining_recordsInput = {
    update: XOR<EmployeeUpdateWithoutTraining_recordsInput, EmployeeUncheckedUpdateWithoutTraining_recordsInput>
    create: XOR<EmployeeCreateWithoutTraining_recordsInput, EmployeeUncheckedCreateWithoutTraining_recordsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTraining_recordsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTraining_recordsInput, EmployeeUncheckedUpdateWithoutTraining_recordsInput>
  }

  export type EmployeeUpdateWithoutTraining_recordsInput = {
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateWithoutTraining_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: StringFieldUpdateOperationsInput | string
    employee_name_th?: StringFieldUpdateOperationsInput | string
    employee_name_en?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    work_location?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpsertWithoutTraining_recordsInput = {
    update: XOR<CourseUpdateWithoutTraining_recordsInput, CourseUncheckedUpdateWithoutTraining_recordsInput>
    create: XOR<CourseCreateWithoutTraining_recordsInput, CourseUncheckedCreateWithoutTraining_recordsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTraining_recordsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTraining_recordsInput, CourseUncheckedUpdateWithoutTraining_recordsInput>
  }

  export type CourseUpdateWithoutTraining_recordsInput = {
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    descriptions?: CourseDescriptionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTraining_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_code?: StringFieldUpdateOperationsInput | string
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    course_category?: NullableStringFieldUpdateOperationsInput | string | null
    training_type?: NullableStringFieldUpdateOperationsInput | string | null
    organizing_agency?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_required?: BoolFieldUpdateOperationsInput | boolean
    descriptions?: CourseDescriptionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type TrainingRecordCreateManyEmployeeInput = {
    id?: number
    course_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type TrainingRecordUpdateWithoutEmployeeInput = {
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTraining_recordsNestedInput
  }

  export type TrainingRecordUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseDescriptionCreateManyCourseInput = {
    id?: number
    description: string
  }

  export type TrainingRecordCreateManyCourseInput = {
    id?: number
    employee_id: number
    training_date: Date | string
    training_hour?: number | null
    training_result?: string | null
    trainer_name?: string | null
    location?: string | null
    expire_date?: Date | string | null
    attachment?: string | null
    note?: string | null
    created_by?: string | null
    created_at?: Date | string
  }

  export type CourseDescriptionUpdateWithoutCourseInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseDescriptionUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CourseDescriptionUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingRecordUpdateWithoutCourseInput = {
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTraining_recordsNestedInput
  }

  export type TrainingRecordUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingRecordUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    training_date?: DateTimeFieldUpdateOperationsInput | Date | string
    training_hour?: NullableFloatFieldUpdateOperationsInput | number | null
    training_result?: NullableStringFieldUpdateOperationsInput | string | null
    trainer_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    expire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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