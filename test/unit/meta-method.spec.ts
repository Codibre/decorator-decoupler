import { applyMetaMethod, MetaMethod, prepareMetaMethod } from '../../src';
import { createMethodDecorator } from 'decorator-builder';

describe('MetaMethod', () => {
	it('should allow decoupled third party decorators appliance', () => {
		const myDecorator = createMethodDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 2;
			};
		});
		class MyClass {
			@MetaMethod()
			test() {
				return 1;
			}
		}

		applyMetaMethod(myDecorator);

		expect(new MyClass().test()).toBe(3);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior', () => {
		const myDecorator = createMethodDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 2;
			};
		});
		const myDecorator2 = createMethodDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 3;
			};
		});
		class MyClass {
			@MetaMethod()
			test() {
				return 1;
			}
			@MetaMethod()
			test2() {
				return 1;
			}
		}

		prepareMetaMethod(MyClass, 'test2', myDecorator2());
		applyMetaMethod(myDecorator);

		expect(new MyClass().test()).toBe(3);
		expect(new MyClass().test2()).toBe(4);
	});

	it('should throw an error when used as property decorator', () => {
		let thrownErr: any;

		try {
			class MyClass {
				@((MetaMethod as any)())
				public test = 1;
			}
			new MyClass();
		} catch (err) {
			thrownErr = err;
		}

		expect(thrownErr).toBeInstanceOf(TypeError);
	});
});
