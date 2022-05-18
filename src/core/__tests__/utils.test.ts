import { CSSResult, CSSResultArray } from 'lit';

import { asArray, get, getUUID, merge, set } from '../utils';

/**
 * get
 */
describe('get', () => {
    it('should retrieve value of simple path', () => {
        // given, when, then.
        const obj = { foo: 'bar' };
        expect(get('foo', obj)).toBe('bar');
    });

    it('should retrieve value of nested path', () => {
        // given, when, then.
        const obj = { nested: { number: 13 } };
        expect(get('nested.number', obj)).toBe(13);
    });

    it('should retrieve value of path that returns falsy', () => {
        // given, when, then.
        const obj = { falsy: false };
        expect(get('falsy', obj)).toBe(false);
    });

    it('should retrieve undefined when the property does not exist', () => {
        // given, when, then.
        const obj = {};
        expect(get('__unknown.__prop', obj)).toBe(undefined);
    });
});

/**
 * set
 */
describe('set', () => {
    it('should set value of simple path', () => {
        // given, when.
        const obj = { foo: 'Hello' };
        set('foo', obj, 'Good bye');

        // then.
        expect(obj.foo).toBe('Good bye');
    });

    it('should set value of nested path', () => {
        // given, when.
        const obj = { nested: { number: 13 } };
        set('nested.number', obj, 101);

        // then.
        expect(obj.nested.number).toBe(101);
    });

    it('should add value of simple path', () => {
        // given, when.
        const obj: Record<string, unknown> = {};
        set('foo', obj, 'bar');

        // then.
        expect(obj.foo).toBe('bar');
    });

    it('should add value of nested path', () => {
        // given, when.
        const obj: Record<string, Record<string, unknown>> = { nested: {} };
        set('nested.number', obj, 13);

        // then.
        expect(obj.nested.number).toBe(13);
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

/**
 * merge
 */
describe('merge', () => {
    type MergeTestObject = DeepPartial<{
        foo: string;
        other: boolean;
        nested: {
            item: number;
            other: boolean;
        };
    }>;

    it('should add top-level properties', () => {
        // given.
        const target: MergeTestObject = {
            foo: 'bar',
            nested: {
                item: 13
            }
        };

        // when.
        merge(target, { other: true });

        // then.
        expect(target.foo).toBe('bar');
        expect(target.other).toBe(true);
        expect(target.nested?.item).toBe(13);
    });

    it('should update top-level properties', () => {
        // given.
        const target: MergeTestObject = {
            foo: 'bar',
            other: false,
            nested: {
                item: 13
            }
        };

        // when.
        merge(target, {
            foo: 'Hello world',
            other: true
        });

        // then.
        expect(target.foo).toBe('Hello world');
        expect(target.other).toBe(true);
        expect(target.nested?.item).toBe(13);
    });

    it('should add nested properties', () => {
        // given.
        const target: MergeTestObject = {
            foo: 'bar'
        };

        // when.
        merge(target, {
            nested: {
                other: false
            }
        });

        // then.
        expect(target.foo).toBe('bar');
        expect(target.nested?.other).toBe(false);
    });

    it('should update nested properties', () => {
        // given.
        const target: MergeTestObject = {
            foo: 'bar',
            other: false,
            nested: {
                item: 13,
                other: true
            }
        };

        // when.
        merge(target, {
            nested: {
                other: false
            }
        });

        // then.
        expect(target.foo).toBe('bar');
        expect(target.nested?.item).toBe(13);
        expect(target.nested?.other).toBe(false);
    });
});
