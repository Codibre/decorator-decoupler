/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractClass, Func, KeysOfType } from 'is-this-a-pigeon';
import { baseApplyProperty } from './base-apply-property';
import { MetaMethod } from './decorators';
import { getList, getMap } from './get-map';

export const exceptionMap = new Map<
	Object,
	Map<string | symbol | number, MethodDecorator[]>
>();

export function prepareMetaMethod<T>(
	cls: AbstractClass<T>,
	methodName: KeysOfType<T, Func>,
	decorator: MethodDecorator,
) {
	const map = getMap(exceptionMap, cls.prototype);
	const list = getList(map, methodName);
	list.push(decorator);
}

export function applyMetaMethod(defaultDecorator?: () => MethodDecorator) {
	baseApplyProperty(exceptionMap, MetaMethod, defaultDecorator, (item, x) =>
		x(item.target, item.name, item.descriptor),
	);
}
