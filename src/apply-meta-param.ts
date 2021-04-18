import { AbstractClass } from 'is-this-a-pigeon';
import { MetaParam } from './decorators';
import { getList, getMap } from './get-map';

const exceptionMap = new Map<Object, Map<unknown, ParameterDecorator[]>>();

export function prepareMetaParam<T>(
	cls: AbstractClass<T>,
	indexOrDecoratedSymbol: unknown,
	decorator: ParameterDecorator,
) {
	const map = getMap(exceptionMap, cls);
	const list = getList(map, indexOrDecoratedSymbol);
	list.push(decorator);
}

export function applyMetaParam(defaultDecorator: () => ParameterDecorator) {
	for (const item of MetaParam) {
		const exceptions = exceptionMap.get(item.target);
		const byIndex = exceptions?.get(item.index);
		const byDecorator = exceptions?.get(item.args[0]);
		if (byIndex || byDecorator) {
			byIndex?.forEach((x) => x(item.target, item.name, item.index));
			byDecorator?.forEach((x) => x(item.target, item.name, item.index));
		} else {
			defaultDecorator?.()(item.target, item.name, item.index);
		}
	}
}
