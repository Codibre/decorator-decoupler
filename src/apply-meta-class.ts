import { AbstractClass } from 'is-this-a-pigeon';
import { applyMeta } from './apply-meta';
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
		const exceptions = exceptionMap.get(item.target);
		applyMeta((it, x) => x(it.target), item, defaultDecorator, exceptions);
	}
	exceptionMap.clear();
	MetaClass.clear();
}
