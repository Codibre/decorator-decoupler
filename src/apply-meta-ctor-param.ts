/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractClass } from 'is-this-a-pigeon';
import { baseApplyMetaParam } from './base-apply-meta-param';
import { MetaCtorParam } from './decorators';
import { getList, getMap } from './get-map';

const exceptionMap = new Map<Object, Map<unknown, ParameterDecorator[]>>();

export function prepareMetaCtorParam<T>(
	cls: AbstractClass<T>,
	indexOrDecoratedSymbol: unknown,
	decorator: ParameterDecorator,
) {
	const map = getMap(exceptionMap, cls);
	const list = getList(map, indexOrDecoratedSymbol);
	list.push(decorator);
}

export function applyMetaCtorParam(
	defaultDecorator?: (identifier?: any) => ParameterDecorator,
) {
	baseApplyMetaParam(exceptionMap, MetaCtorParam, defaultDecorator);
}
