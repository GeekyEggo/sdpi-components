import '../connect';
import streamDeckClient from '../stream-deck-client';

jest.mock('../stream-deck-client', () => {
    return {
        connect: jest.fn()
    };
});

// mock args.
const args = {
    port: '13',
    propertyInspectorUUID: 'abc123',
    registerEvent: 'registerPropertyInspector',
    info: '{"info":"Hello"}',
    actionInfo: '{"actionInfo":"World"}'
};

describe('connectElgatoStreamDeckSocket', () => {
    it('should exist on the window', () => {
        // given, when then.
        expect(window.connectElgatoStreamDeckSocket).not.toBe(undefined);
    });

    it('should connect to the Stream Deck client', () => {
        // given, when.
        if (window.connectElgatoStreamDeckSocket !== undefined) {
            window.connectElgatoStreamDeckSocket(args.port, args.propertyInspectorUUID, args.registerEvent, args.info, args.actionInfo);
        }

        // then.
        expect(streamDeckClient.connect).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.connect).toHaveBeenCalledWith(args.port, args.propertyInspectorUUID, args.registerEvent, { info: 'Hello' }, { actionInfo: 'World' });
    });

    it('should wrap an existing connectElgatoStreamDeckSocket', () => {
        jest.resetModules(); // we reset modules to ensure that we can re-require the connect module.

        // given.
        const existing = jest.fn();
        window.connectElgatoStreamDeckSocket = existing;

        // when.
        require('../connect'); // this mimics referencing the sdpi-components library after assigning connectElgatoStreamDeckSocket.
        window.connectElgatoStreamDeckSocket(args.port, args.propertyInspectorUUID, args.registerEvent, args.info, args.actionInfo);

        // then.
        expect(existing).toHaveBeenCalledTimes(1);
        expect(existing).toHaveBeenCalledWith(args.port, args.propertyInspectorUUID, args.registerEvent, args.info, args.actionInfo);

        expect(streamDeckClient.connect).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.connect).toHaveBeenCalledWith(args.port, args.propertyInspectorUUID, args.registerEvent, { info: 'Hello' }, { actionInfo: 'World' });
    });
});
