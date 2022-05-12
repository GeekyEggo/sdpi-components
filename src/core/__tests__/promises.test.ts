import { PromiseCompletionSource } from '../promises';

describe('PromiseCompletionSource<T>', () => {
    it('should not be resolved upon initialization', () => {
        // given, when, then.
        const pcs = new PromiseCompletionSource<string>();
        expect(getPromiseState(pcs.promise)).resolves.toBe('pending');
    });

    it('should complete after setting result', () => {
        // given, when.
        const pcs = new PromiseCompletionSource<string>();
        pcs.setResult('foo');

        // then.
        expect(getPromiseState(pcs.promise)).resolves.toBe('complete');
    });

    it('should resolve with value', async () => {
        // given, when.
        const pcs = new PromiseCompletionSource<string>();
        pcs.setResult('foo');

        // then.
        expect(await pcs.promise).toBe('foo');
    });

    it('should complete after failing', () => {
        // given, when.
        const pcs = new PromiseCompletionSource<string>();
        pcs.setException();

        // then.
        expect(getPromiseState(pcs.promise)).resolves.toBe('error');
    });

    it('should error after failing', () => {
        // given, when.
        const pcs = new PromiseCompletionSource<string>();
        pcs.setException('Mock error');

        // then.
        expect(async () => await pcs.promise).rejects.toMatch('Mock error');
    });
});

/**
 * Gets the state of the promise.
 * @param promise The promise.
 * @returns The state of the promise, either 'pending', 'complete' or 'error'.
 */
async function getPromiseState<T>(promise: Promise<T>): Promise<'pending' | 'complete' | 'error'> {
    const other = {};
    try {
        const winner = await Promise.race([promise, other]);
        return winner == other ? 'pending' : 'complete';
    } catch {
        return 'error';
    }
}
