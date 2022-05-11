import { PromiseCompletionSource } from '../promises';

describe('promise completion source', () => {
    let pcs: PromiseCompletionSource<string>;
    beforeEach(() => (pcs = new PromiseCompletionSource<string>()));

    test('should not be resolved upon initialization', () => {
        expect(getPromiseState(pcs.promise)).resolves.toBe('pending');
    });

    test('should complete after setting result', () => {
        pcs.setResult('foo');
        expect(getPromiseState(pcs.promise)).resolves.toBe('complete');
    });

    test('should resolve with value', async () => {
        pcs.setResult('foo');
        expect(await pcs.promise).toBe('foo');
    });

    test('should complete after failing', () => {
        pcs.setException();
        expect(getPromiseState(pcs.promise)).resolves.toBe('error');
    });

    test('should error after failing', () => {
        pcs.setException('Mock error');
        expect(async () => await pcs.promise).rejects.toMatch('Mock error');
    });
});

async function getPromiseState<T>(promise: Promise<T>): Promise<'pending' | 'complete' | 'error'> {
    const other = {};
    try {
        const winner = await Promise.race([promise, other]);
        return winner == other ? 'pending' : 'complete';
    } catch {
        return 'error';
    }
}
