import { AbstractClass } from 'is-this-a-pigeon';
import { MetaClass } from './decorators';
import { getList } from './get-map';

const exceptionMap = new Map<Object, ClassDecorator[]>();

export function prepareMetaClass<T>(
	cls: AbstractClass<T>,
	decorator: ClassDecorator,
) {
	const list = getList(exceptionMap, cls);
	list.push(decorator);
}

export function applyMetaClass(defaultDecorator?: () => ClassDecorator) {
	for (const item of MetaClass) {
		const exception = exceptionMap.get(item.target);
		if (exception) {
			exception.forEach((x) => x(item.target));
		} else {
			defaultDecorator?.()(item.target);
		}
	}
}
