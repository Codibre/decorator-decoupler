import { AbstractClass } from 'is-this-a-pigeon';
import { MetaMethod } from './decorators';
import { getList, getMap } from './get-map';

const exceptionMap = new Map<
	Object,
	Map<string | symbol | number, PropertyDecorator[]>
>();

export function prepareMetaProperty<T>(
	cls: AbstractClass<T>,
	propertyName: keyof T,
	decorator: PropertyDecorator,
) {
	const map = getMap(exceptionMap, cls);
	const list = getList(map, propertyName);
	list.push(decorator);
}

export function applyMetaProperty(defaultDecorator?: () => PropertyDecorator) {
	for (const item of MetaMethod) {
		const exceptions = exceptionMap.get(item.target);
		const methods = exceptions?.get(item.name);
		if (methods) {
			methods.forEach((x) => x(item.target, item.name));
		} else {
			defaultDecorator?.()(item.target, item.name);
		}
	}
}
