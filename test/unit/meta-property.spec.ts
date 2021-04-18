import {
	applyMetaProperty,
	MetaProperty,
	prepareMetaProperty,
} from '../../src';
import { createPropertyDecorator } from 'decorator-builder';

describe('MetaProperty', () => {
	it('should allow decoupled third party decorators appliance', () => {
		const myDecorator = createPropertyDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 2;
			};
		});
		class MyClass {
			@MetaProperty()
			test() {
				return 1;
			}
		}

		applyMetaProperty(myDecorator);

		expect(new MyClass().test()).toBe(3);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior', () => {
		const myDecorator = createPropertyDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 2;
			};
		});
		const myDecorator2 = createPropertyDecorator((item) => {
			const previous: any = item.target[item.name as keyof Object];
			item.target[item.name as keyof Object] = () => {
				return previous() + 3;
			};
		});
		class MyClass {
			@MetaProperty()
			test() {
				return 1;
			}
			@MetaProperty()
			test2() {
				return 1;
			}
		}

		prepareMetaProperty(MyClass, 'test2', myDecorator2());
		applyMetaProperty(myDecorator);

		expect(new MyClass().test()).toBe(3);
		expect(new MyClass().test2()).toBe(4);
	});
});
