import { applyMetaClass, MetaClass, prepareMetaClass } from '../../src';
import { Container, injectable } from 'inversify';
import { createClassDecorator } from 'decorator-builder';

describe('MetaClass', () => {
	it('should allow decoupled third party decorators appliance', () => {
		@MetaClass()
		class MyService {}

		@MetaClass()
		class MyClass {
			constructor(public service: MyService) {}
		}

		applyMetaClass(injectable);
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(MyService).toSelf();
		const instance = container.get(MyClass);

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.service).toBeInstanceOf(MyService);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior', () => {
		const myDecorator = createClassDecorator((item) => {
			item.target.prototype.test = () => 1;
		});

		@MetaClass()
		class MyService {}

		@MetaClass()
		class MyClass {
			constructor(public service: MyService) {}
		}

		prepareMetaClass(MyService, injectable());
		prepareMetaClass(MyService, myDecorator());
		applyMetaClass(injectable);
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(MyService).toSelf();
		const instance = container.get(MyClass);

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.service).toBeInstanceOf(MyService);
		expect((instance.service as any).test()).toBe(1);
	});

	it('should allow decoupled third party decorators appliance with prepared behavior and no default decorator', () => {
		const myDecorator = createClassDecorator((item) => {
			item.target.prototype.test = () => 1;
		});

		@MetaClass()
		class MyService {}

		@MetaClass()
		class MyClass {
			constructor(public service: MyService) {}
		}
		@MetaClass()
		class MyClass2 {
			constructor(public service: MyService) {}
		}
		let thrownError: any;

		prepareMetaClass(MyService, injectable());
		prepareMetaClass(MyService, myDecorator());
		prepareMetaClass(MyClass, injectable());
		applyMetaClass();
		const container = new Container();
		container.bind(MyClass).toSelf();
		container.bind(MyService).toSelf();
		const instance = container.get(MyClass);
		try {
			container.get(MyClass2);
		} catch (err) {
			thrownError = err;
		}

		expect(instance).toBeInstanceOf(MyClass);
		expect(instance.service).toBeInstanceOf(MyService);
		expect((instance.service as any).test()).toBe(1);
		expect(thrownError).toBeInstanceOf(Error);
	});
});
