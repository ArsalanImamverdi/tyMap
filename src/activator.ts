import { Type } from "./type";

export class Activator {
    static createInstance<T>(type: Type<T>): T {
        return new type();
    }
}