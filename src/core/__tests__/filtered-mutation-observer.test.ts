import { FilteredMutationObserver } from '../filtered-mutation-observer';
import { PromiseCompletionSource } from '../promises';

describe('FilteredMutationObserver', () => {
    it('should observe nodes of single type', async () => {
        // given.
        const nodesAwaiter = new PromiseCompletionSource<HTMLAnchorElement[]>();
        const [parent] = elems('div');

        // when.
        const observer = new FilteredMutationObserver(['a'], (items) => nodesAwaiter.setResult(items));
        observer.observe(parent);

        parent.append(...elems('h1', 'a', 'a', 'span')); // 2 anchors.
        const nodes = await nodesAwaiter.promise;

        // then.
        expect(nodes.length).toBe(2);
        expect(nodes).toStrictEqual(observer.items);
    });

    it('should observe nodes of multiple types', async () => {
        // given.
        const nodesAwaiter = new PromiseCompletionSource<(HTMLAnchorElement | HTMLSpanElement)[]>();
        const [parent] = elems('div');

        // when.
        const observer = new FilteredMutationObserver(['a', 'span'], (items) => nodesAwaiter.setResult(items));
        observer.observe(parent);

        parent.append(...elems('h1', 'a', 'a', 'span')); // 2 anchors, 1 span.
        const actual = await nodesAwaiter.promise;

        // then.
        expect(actual.length).toBe(3);
        expect(actual).toStrictEqual(observer.items);
    });

    it('should append to items when nodes added', async () => {
        // given.
        let index = 0;
        const awaiters = [new PromiseCompletionSource<void>(), new PromiseCompletionSource<void>()];
        const [parent] = elems('div');

        // when.
        const observer = new FilteredMutationObserver(['a'], () => awaiters[index++].setResult());
        observer.observe(parent);

        parent.append(...elems('h1', 'a', 'a', 'span')); // 2 anchors.
        await awaiters[0].promise;

        parent.append(...elems('h1', 'a', 'a', 'span')); // 2 anchors (total 4).
        await awaiters[1].promise;

        // then.
        expect(observer.items.length).toBe(4);
    });

    it('should remove items when nodes removed', async () => {
        // given.
        let index = 0;
        const awaiters = [new PromiseCompletionSource<void>(), new PromiseCompletionSource<void>()];
        const [parent] = elems('div');

        // when.
        const observer = new FilteredMutationObserver(['a'], () => awaiters[index++].setResult());
        observer.observe(parent);

        parent.append(...elems('h1', 'a', 'a', 'span')); // 2 anchors.
        await awaiters[0].promise;

        parent.removeChild(parent.querySelectorAll('a')[0]);
        parent.removeChild(parent.querySelectorAll('span')[0]);
        await awaiters[1].promise;

        // then.
        expect(observer.items.length).toBe(1);
    });

    it('should remove items on disconnect', async () => {
        // given.
        const awaiter = new PromiseCompletionSource<void>();
        const [parent] = elems('div');

        // when.
        const observer = new FilteredMutationObserver(['a'], () => awaiter.setResult());
        observer.observe(parent);

        parent.append(...elems('a', 'b'));
        await awaiter.promise;

        // then.
        expect(observer.items.length).toBe(1);

        // when, then.
        observer.disconnect();
        expect(observer.items.length).toBe(0);
    });
});

/**
 * Creates an array of elements for the tag names.
 * @param tagNames The tag names of the elements to create.
 * @returns The elements.
 */
const elems = <K extends keyof HTMLElementTagNameMap>(...tagNames: K[]): HTMLElement[] => {
    return tagNames.map((tagName) => document.createElement(tagName));
};
