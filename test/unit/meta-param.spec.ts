import { applyMetaParam, MetaParam, prepareMetaParam } from '../../src';
import { createParameterDecorator } from 'decorator-builder';

describe('MetaParam', () => {
	it('should allow decoupled third party decorators appliance', () => {
		const mySymbol = Symbol('my-symbol');
		const metaInfo = Symbol('meta-info');
		const myDecorator = createParameterDecorator((item) => {
			Reflect.defineMetadata(metaInfo, item.index + 1, item.target, item.name);
		});
		class MyClass {
			test(@MetaParam(mySymbol) value: string) {
				return value;
			}
		}

		applyMetaParam(myDecorator);
		const instance = new MyClass();

		expect(instance).toBeInstanceOf(MyClass);
		expect(Reflect.getMetadata(metaInfo, MyClass.prototype, 'test')).toBe(1);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior reference by MetaParam symbol', () => {
		const mySymbol = Symbol('my-symbol');
		const metaInfo = Symbol('meta-info');
		const metaInfo2 = Symbol('meta-info2');
		const myDecorator = createParameterDecorator((item) => {
			Reflect.defineMetadata(metaInfo, item.index + 1, item.target, item.name);
		});
		const myDecorator2 = createParameterDecorator((item) => {
			Reflect.defineMetadata(
				metaInfo2,
				`a${item.index}`,
				item.target,
				item.name,
			);
		});
		class MyClass {
			test(@MetaParam(mySymbol) value: string, @MetaParam() value2: string) {
				return value + value2;
			}
		}

		prepareMetaParam(MyClass, 1, myDecorator2());
		applyMetaParam(myDecorator);
		const instance = new MyClass();

		expect(instance).toBeInstanceOf(MyClass);
		expect(Reflect.getMetadata(metaInfo, MyClass.prototype, 'test')).toBe(1);
		expect(Reflect.getMetadata(metaInfo2, MyClass.prototype, 'test')).toBe(
			'a1',
		);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior reference by MetaParam symbol with no default decorator', () => {
		const mySymbol = Symbol('my-symbol');
		const metaInfo = Symbol('meta-info');
		const metaInfo2 = Symbol('meta-info2');
		const myDecorator2 = createParameterDecorator((item) => {
			Reflect.defineMetadata(
				metaInfo2,
				`a${item.index}`,
				item.target,
				item.name,
			);
		});
		class MyClass {
			test(@MetaParam(mySymbol) value: string, @MetaParam() value2: string) {
				return value + value2;
			}
		}

		prepareMetaParam(MyClass, 1, myDecorator2());
		applyMetaParam();
		const instance = new MyClass();

		expect(instance).toBeInstanceOf(MyClass);
		expect(
			Reflect.getMetadata(metaInfo, MyClass.prototype, 'test'),
		).toBeUndefined();
		expect(Reflect.getMetadata(metaInfo2, MyClass.prototype, 'test')).toBe(
			'a1',
		);
	});

	it('should throw an error when used as method param decorator', () => {
		let thrownErr: any;

		try {
			class MyClass {
				constructor(@MetaParam(1) value: string) {
					return value;
				}
			}
			new MyClass('1');
		} catch (err) {
			thrownErr = err;
		}

		expect(thrownErr).toBeInstanceOf(TypeError);
	});
});
