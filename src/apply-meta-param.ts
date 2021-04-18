import { AbstractClass } from 'is-this-a-pigeon';
import { baseApplyMetaParam } from './base-apply-meta-param';
import { MetaParam } from './decorators';
import { getList, getMap } from './get-map';

const exceptionMap = new Map<Object, Map<unknown, ParameterDecorator[]>>();

export function prepareMetaParam<T>(
	cls: AbstractClass<T>,
	indexOrDecoratedSymbol: unknown,
	decorator: ParameterDecorator,
) {
	const map = getMap(exceptionMap, cls.prototype);
	const list = getList(map, indexOrDecoratedSymbol);
	list.push(decorator);
}

export function applyMetaParam(defaultDecorator?: () => ParameterDecorator) {
	baseApplyMetaParam(exceptionMap, MetaParam, defaultDecorator);
}
