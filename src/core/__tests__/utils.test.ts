import { get, set } from '../utils';

const TEST_OBJ: TestObject = {
    hello: 'world',
    negative: false,
    nested: {
        prop: 13
    }
};

/**
 * get
 */
describe('get', () => {
    let __testObj: TestObject;
    beforeEach(() => (__testObj = { ...TEST_OBJ }));

    test('should retrieve value of simple path', () => {
        expect(get('hello', __testObj)).toBe(TEST_OBJ.hello);
    });

    test('should retrieve value of nested path', () => {
        expect(get('nested.prop', __testObj)).toBe(13);
    });

    test('should retrieve value of path that returns falsy', () => {
        expect(get('negative', __testObj)).toBe(false);
    });

    test('should retrieve undefined when the property does not exist', () => {
        expect(get('__unknown.__prop', __testObj)).toBe(undefined);
    });
});

/**
 * set
 */
describe('set', () => {
    let __testObj: TestObject;
    beforeEach(() => (__testObj = { ...TEST_OBJ }));

    test('should set value of simple path', () => {
        set('hello', __testObj, 'good bye');
        expect(__testObj.hello).toBe('good bye');
    });

    test('should set value of nested path', () => {
        set('nested.prop', __testObj, 101);
        expect(__testObj.nested.prop).toBe(101);
    });

    test('should add value of simple path', () => {
        expect(__testObj.foo).toBe(undefined);
        set('foo', __testObj, 'bar');
        expect(__testObj.foo).toBe('bar');
    });

    test('should add value of nested path', () => {
        expect(__testObj.bar?.prop).toBe(undefined);
        set('bar.prop', __testObj, 13);
        expect(__testObj.bar?.prop).toBe(13);
    });
});

type TestObject = {
    hello: string;
    negative: boolean;
    nested: {
        prop: number;
    };
    foo?: string;
    bar?: {
        prop: number;
    };
};
