import {ProxySubject, Subject} from './Proxy';

describe('Proxy', () => {
	it('should create proxy', () => {
		const proxy:Subject = new ProxySubject();

		expect(proxy).toBeDefined();
	});

	it('should call operation on proxy', () => {
		const proxy:Subject = new ProxySubject();

		expect(proxy.operation()).toBe('A');
	});
});
