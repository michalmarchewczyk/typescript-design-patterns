import {Caretaker, Originator} from './Memento';

describe('Memento', () => {
	it('should create originator', ()=> {
		const originator = new Originator('A');

		expect(originator).toBeDefined();
	});

	it('should save initial state', () => {
		const originator = new Originator('A');
		const state = originator.save();

		expect(state.getState()).toBe(originator.getState());
	});

	it('should save originator states', () => {
		const originator = new Originator('A');
		const state1 = originator.save();
		originator.operation();
		const state2 = originator.save();

		expect(state1.getState()).toBe('A');
		expect(state2.getState()).toBe(originator.getState());
	});

	it('should restore originator state', () => {
		const originator = new Originator('A');
		const state1 = originator.save();
		originator.operation();
		originator.restore(state1);

		expect(originator.getState()).toBe('A');
	});

	it('should save date', () => {
		const originator = new Originator('A');
		const state1 = originator.save();
		const date1:Date = state1.getDate();

		expect( Date.now() - date1.getTime()).toBeLessThan(10);
	});

	it('should create caretaker', () => {
		const originator = new Originator('A');
		const caretaker = new Caretaker(originator);

		expect(caretaker).toBeDefined();
	});

	it('should backup state', () => {
		const originator = new Originator('A');
		const caretaker = new Caretaker(originator);
		caretaker.backup();

		expect(caretaker.showHistory()).toHaveLength(1);
		expect(caretaker.showHistory()[0].getState()).toBe('A');
	});

	it('should backup multiple states', () => {
		const originator = new Originator('A');
		const caretaker = new Caretaker(originator);
		caretaker.backup();
		originator.operation();
		const state2 = originator.save();
		caretaker.backup();
		originator.operation();
		const state3 = originator.save();
		caretaker.backup();

		expect(caretaker.showHistory()).toHaveLength(3);
		expect(caretaker.showHistory()[0].getState()).toBe('A');
		expect(caretaker.showHistory()[1].getState()).toBe(state2.getState());
		expect(caretaker.showHistory()[2].getState()).toBe(state3.getState());
	});

	it('should undo history', () => {
		const originator = new Originator('A');
		const caretaker = new Caretaker(originator);
		caretaker.backup();
		originator.operation();
		caretaker.undo();

		expect(caretaker.showHistory()).toHaveLength(0);
		expect(originator.getState()).toBe('A');
	});

	it('should not undo empty history', () => {
		const originator = new Originator('A');
		const caretaker = new Caretaker(originator);
		originator.operation();
		caretaker.undo();

		expect(caretaker.showHistory()).toHaveLength(0);
		expect(originator.getState()).not.toBe('A');
	});
});
