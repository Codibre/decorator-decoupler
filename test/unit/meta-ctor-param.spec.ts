import {
	applyMetaCtorParam,
	MetaCtorParam,
	prepareMetaCtorParam,
} from '../../src';
import { Container, inject, injectable } from 'inversify';

describe('MetaCtorParam', () => {
	it('should allow decoupled third party decorators appliance', () => {
		const mySymbol = Symbol('my-symbol');
		@injectable()
		class MyClass {
			constructor(@MetaCtorParam(mySymbol) public value: string) {}
		}

		applyMetaCtorParam(inject as any);
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(mySymbol).toConstantValue('something');
		const instance = container.get(MyClass);

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.value).toBe('something');
	});

	it('should allow decoupled third party decorators appliance with prepared behavior reference by MetaCtorParam symbol', () => {
		const mySymbol = Symbol('my-symbol');
		const mySymbol2 = Symbol('my-symbol2');
		const mySymbol3 = Symbol('my-symbol3');
		@injectable()
		class MyClass {
			constructor(
				@MetaCtorParam(mySymbol) public value: string,
				@MetaCtorParam(mySymbol2) public value2: number,
			) {}
		}

		prepareMetaCtorParam(MyClass, mySymbol2, inject(mySymbol3) as any);
		applyMetaCtorParam(inject as any);
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(mySymbol).toConstantValue('something');
		container.bind(mySymbol2).toConstantValue(123);
		container.bind(mySymbol3).toConstantValue(456);
		const instance = container.get(MyClass);

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.value).toBe('something');
		expect(instance.value2).toBe(456);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior reference by parameter index', () => {
		const mySymbol = Symbol('my-symbol');
		const mySymbol2 = Symbol('my-symbol2');
		const mySymbol3 = Symbol('my-symbol3');
		@injectable()
		class MyClass {
			constructor(
				@MetaCtorParam(mySymbol) public value: string,
				@MetaCtorParam(mySymbol2) public value2: number,
			) {}
		}

		prepareMetaCtorParam(MyClass, 1, inject(mySymbol3) as any);
		applyMetaCtorParam(inject as any);
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(mySymbol).toConstantValue('something');
		container.bind(mySymbol2).toConstantValue(123);
		container.bind(mySymbol3).toConstantValue(456);
		const instance = container.get(MyClass);

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.value).toBe('something');
		expect(instance.value2).toBe(456);
	});

	it('should throw an error when used as method param decorator', () => {
		let thrownErr: any;

		try {
			class MyClass {
				test(@MetaCtorParam(1) value: string) {
					return value;
				}
			}
			new MyClass();
		} catch (err) {
			thrownErr = err;
		}

		expect(thrownErr).toBeInstanceOf(TypeError);
	});
});
