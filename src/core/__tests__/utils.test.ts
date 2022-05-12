import { CSSResult, CSSResultArray } from 'lit';

import { asArray, get, getUUID, set } from '../utils';

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
    it('should retrieve value of simple path', () => {
        // given, when, then.
        const __testObj = { ...TEST_OBJ };
        expect(get('hello', __testObj)).toBe(TEST_OBJ.hello);
    });

    it('should retrieve value of nested path', () => {
        // given, when, then.
        const __testObj = { ...TEST_OBJ };
        expect(get('nested.prop', __testObj)).toBe(13);
    });

    it('should retrieve value of path that returns falsy', () => {
        // given, when, then.
        const __testObj = { ...TEST_OBJ };
        expect(get('negative', __testObj)).toBe(false);
    });

    it('should retrieve undefined when the property does not exist', () => {
        // given, when, then.
        const __testObj = { ...TEST_OBJ };
        expect(get('__unknown.__prop', __testObj)).toBe(undefined);
    });
});

/**
 * set
 */
describe('set', () => {
    it('should set value of simple path', () => {
        // given, when.
        const __testObj = { ...TEST_OBJ };
        set('hello', __testObj, 'good bye');

        // then.
        expect(__testObj.hello).toBe('good bye');
    });

    it('should set value of nested path', () => {
        // given, when.
        const __testObj = { ...TEST_OBJ };
        set('nested.prop', __testObj, 101);

        // then.
        expect(__testObj.nested.prop).toBe(101);
    });

    it('should add value of simple path', () => {
        // given, when.
        const __testObj = { ...TEST_OBJ };
        expect(__testObj.foo).toBe(undefined);
        set('foo', __testObj, 'bar');

        // then.
        expect(__testObj.foo).toBe('bar');
    });

    it('should add value of nested path', () => {
        // given, when.
        const __testObj = { ...TEST_OBJ };
        expect(__testObj.bar?.prop).toBe(undefined);
        set('bar.prop', __testObj, 13);

        // then.
        expect(__testObj.bar?.prop).toBe(13);
    });
});

/**
 * getUUID
 */
describe('getUUID', () => {
    it('should be acceptable format', () => {
        // given, when.
        const uuidPattern = new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
        const uuid = getUUID();

        // then.
        expect(uuidPattern.test(uuid)).toBe(true);
    });
});

/**
 * asArray
 */
describe('asArray', () => {
    it('should return an empty array when nothing is specified', () => {
        // given, when, then.
        expect(asArray()).toStrictEqual([]);
    });

    it('should return array when array specified', () => {
        // given, when, then.
        const arr: CSSResultArray = [getCssItem()];
        expect(asArray(arr)).toStrictEqual([arr[0]]);
    });

    it('should return array when array specified', () => {
        // given, when, then.
        const item = getCssItem();
        expect(asArray(item)).toStrictEqual([item]);
    });

    const getCssItem = (): CSSResult => {
        return {
            ['_$cssResult$']: false,
            cssText: '',
            styleSheet: undefined
        };
    };
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
