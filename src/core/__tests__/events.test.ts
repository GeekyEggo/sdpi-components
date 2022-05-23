import { EventManager } from '../events';

describe('EventManager<T>', () => {
    it('should dispatch all subscriptions in order', () => {
        // given.
        const evManager = new EventManager<string>();
        const dispatches: string[] = [];

        // when.
        evManager.subscribe((value) => dispatches.push(`One: ${value}`));
        evManager.subscribe((value) => dispatches.push(`Two: ${value}`));

        evManager.dispatch('Foo');

        // then.
        expect(dispatches.length).toBe(2);
        expect(dispatches[0]).toBe('One: Foo');
        expect(dispatches[1]).toBe('Two: Foo');
    });

    it('should allow unsubscribing', () => {
        // given.
        const evManager = new EventManager<string>();
        const dispatches: string[] = [];

        // when.
        const listener = (value: string) => dispatches.push(`One: ${value}`);
        evManager.subscribe(listener);
        evManager.subscribe((value) => dispatches.push(`Two: ${value}`));
        evManager.unsubscribe(listener);

        evManager.dispatch('Foo');

        // then.
        expect(dispatches.length).toBe(1);
        expect(dispatches[0]).toBe('Two: Foo');
    });
});
