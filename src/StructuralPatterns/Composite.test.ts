import {Component, Composite, Leaf} from './Composite';

describe('Composite', () => {
	it('should create basic Leaf', () => {
		const leaf:Component = new Leaf;

		expect(leaf.operation()).toBe('Leaf');
	});

	it('basic leaf cannot have children', () => {
		const leaf:Component = new Leaf;
		const leaf2:Component = new Leaf;
		leaf.add(leaf2);
		leaf.remove(leaf2);

		expect(leaf.operation()).toBe('Leaf');
	});

	it('should add component', () => {
		const branch:Composite = new Composite();
		const leaf:Component = new Leaf();
		branch.add(leaf);

		expect(branch.operation()).toBe('{Leaf}');
		expect(leaf.getParent()).toBe(branch);
	});

	it('should remove component', () => {
		const branch:Composite = new Composite();
		const leaf:Component = new Leaf();
		branch.add(leaf);
		branch.remove(leaf);

		expect(branch.operation()).toBe('{}');
		expect(leaf.getParent()).toBeNull();
	});

	it('should create complex tree', () => {
		const tree:Composite = new Composite();

		const branch1 = new Composite();
		tree.add(branch1);
		const branch2 = new Composite();
		tree.add(branch2);

		const leaf1 = new Leaf();
		const leaf2 = new Leaf();
		branch1.add(leaf1);
		branch1.add(leaf2);
		const leaf3 = new Leaf();
		branch2.add(leaf3);
		const leaf4 = new Leaf();
		tree.add(leaf4);

		expect(tree.operation()).toBe('{{Leaf,Leaf},{Leaf},Leaf}');
	});
});
