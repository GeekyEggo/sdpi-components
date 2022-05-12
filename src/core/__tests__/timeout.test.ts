import { performance } from 'perf_hooks';

import { PromiseCompletionSource } from '../promises';
import { delay } from '../timeout';

describe('timeout', () => {
    it('should only invoke the function once before completing', async () => {
        // given.
        let callCount = 0;
        const fn = delay(() => callCount++, 1);

        // when, then.
        await Promise.all([fn(), fn(), fn()]);
        expect(callCount).toBe(1);
    });

    it('should wait for the delay before invoking the callback', async () => {
        // given.
        const awaiter = new PromiseCompletionSource<void>();
        const fn = delay(() => awaiter.setResult(), 100);

        // when.
        const start = performance.now();

        await fn();
        await awaiter.promise;

        const elapsed = performance.now() - start;

        // then.
        expect(Math.round(elapsed)).toBeGreaterThanOrEqual(100);
    });

    it('should reset the promise after each callback', async () => {
        // given.
        let callCount = 0;
        const fn = delay(() => callCount++, 1);

        // when, then.
        await fn();
        expect(callCount).toBe(1);

        // when, then.
        await fn();
        expect(callCount).toBe(2);
    });
});
