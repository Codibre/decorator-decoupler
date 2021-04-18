import { AbstractClass } from 'is-this-a-pigeon';
import { baseApplyProperty } from './base-apply-property';
import { MetaProperty } from './decorators';
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
	const map = getMap(exceptionMap, cls.prototype);
	const list = getList(map, propertyName);
	list.push(decorator);
}

export function applyMetaProperty(defaultDecorator?: () => PropertyDecorator) {
	baseApplyProperty(exceptionMap, MetaProperty, defaultDecorator, (item, x) =>
		x(item.target, item.name),
	);
}
