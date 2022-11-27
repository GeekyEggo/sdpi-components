import { CSSResult, CSSResultArray } from 'lit';

import { asArray, format, get, getUUID, merge, parseBoolean, parseNumber, set } from '../utils';

/**
 * format
 */
describe('format', () => {
    it('should not format without args', () => {
        // given, when, then.
        const value = format('Hello {target}, the purpose of this test is "{test.purpose}".');
        expect(value).toBe('Hello {target}, the purpose of this test is "{test.purpose}".');
    });

    it('should format with object', () => {
        // given.
        const args = {
            target: 'everyone',
            test: {
                purpose: 'formatting with objects'
            }
        };

        // when, then.
        const value = format('Hello {target}, the purpose of this test is "{test.purpose}".', args);
        expect(value).toBe('Hello everyone, the purpose of this test is "formatting with objects".');
    });

    it('should format with array', () => {
        // given.
        const args = ['everyone', 'formatting with objects'];

        // when, then.
        const value = format('Hello {0}, the purpose of this test is "{1}".', args);
        expect(value).toBe('Hello everyone, the purpose of this test is "formatting with objects".');
    });

    it('should format with strings as arguments', () => {
        // given, when, then.
        const value = format('Hello {0}, the purpose of this test is "{1}".', 'everyone', 'formatting with objects');
        expect(value).toBe('Hello everyone, the purpose of this test is "formatting with objects".');
    });

    it('should format a zero value', () => {
        // given, when, then.
        const value = format('{0}', 0);
        expect(value).toBe('0');
    });
});

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
            cssText: '',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...({} as any)
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

/*
 * parseBoolean
 */
describe('parseBoolean', () => {
    it('should parse true', () => expect(parseBoolean(true)).toBe(true));
    it('should parse false', () => expect(parseBoolean(false)).toBe(false));
    it('should parse 1', () => expect(parseBoolean(1)).toBe(true));
    it('should parse 0', () => expect(parseBoolean(0)).toBe(false));
    it('should parse "true"', () => expect(parseBoolean('true')).toBe(true));
    it('should parse "foo"', () => expect(parseBoolean('foo')).toBe(true));
    it('should parse "FALSE"', () => expect(parseBoolean('FALSE')).toBe(false));
    it('should parse "false"', () => expect(parseBoolean('false')).toBe(false));
    it('should parse "0"', () => expect(parseBoolean('0')).toBe(false));
});

/*
 * parseNumber
 */
describe('parseNumber', () => {
    it('should parse true', () => expect(parseNumber(true)).toBe(1));
    it('should parse false', () => expect(parseNumber(false)).toBe(0));
    it('should parse 1', () => expect(parseNumber(1)).toBe(1));
    it('should parse 0', () => expect(parseNumber(0)).toBe(0));
    it('should parse "13"', () => expect(parseNumber('13')).toBe(13));
    it('should parse "1.3"', () => expect(parseNumber('1.3')).toBe(1.3));
    it('should parse "0"', () => expect(parseNumber('0')).toBe(0));
});
