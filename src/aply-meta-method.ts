import { AbstractClass, Func, KeysOfType } from 'is-this-a-pigeon';
import { MetaMethod } from './decorators';
import { getList, getMap } from './get-map';

const exceptionMap = new Map<
	Object,
	Map<string | symbol | number, MethodDecorator[]>
>();

export function prepareMetaMethod<T>(
	cls: AbstractClass<T>,
	methodName: KeysOfType<T, Func>,
	decorator: MethodDecorator,
) {
	const map = getMap(exceptionMap, cls);
	const list = getList(map, methodName);
	list.push(decorator);
}

export function applyMetaMethod(defaultDecorator?: () => MethodDecorator) {
	for (const item of MetaMethod) {
		const exceptions = exceptionMap.get(item.target);
		const methods = exceptions?.get(item.name);
		if (methods) {
			methods.forEach((x) => x(item.target, item.name, item.descriptor));
		} else {
			defaultDecorator?.()(item.target, item.name, item.descriptor);
		}
	}
}
