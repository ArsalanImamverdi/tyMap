import { Activator } from '../src/activator';

describe(
    'Test TestClass creation', () => {
        let instance: TestClass;
        beforeAll(() => {
            instance = Activator.createInstance(TestClass);
        });
        it('should not be null', () => {
            expect(instance).not.toBeNull();
        });
        it('should have `a` in property a', () => {
            expect(instance.a).toBe('a');
        });
        it('should have 10 in property b', () => {
            expect(instance.b).toBe(10);
        });
        it('should not have `b` in property a', () => {
            expect(instance.a).not.toBe('b');
        })
    }
)

class TestClass {
    public a: string = 'a';
    public b: number;

    constructor() {
        this.b = 10;
    }
}