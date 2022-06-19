
/**
 * @description
 *
 * Represents a type that a object is instances of.
 *
 * @publicApi
 */
export const Type = Function;

export function isType(v: any): v is Type<any> {
    return typeof v === 'function';
}

/**
 * @description
 *
 * Represents an abstract class `T`, if applied to a concrete class it would stop being
 * instantiable.
 *
 * @publicApi
 */
export interface AbstractType<T> extends Function {
    prototype: T;
}

export interface Type<T> extends Function {
    new(...args: any[]): T;
}

export type Mutable<T extends { [x: string]: any }, K extends string> = {
    [P in K]: T[P];
};

export type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};