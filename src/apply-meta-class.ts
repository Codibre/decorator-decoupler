import { AbstractClass } from 'is-this-a-pigeon';
import { MetaClass } from './decorators';

export function applyMetaClass(
	defaultDecorator: (() => ClassDecorator) | undefined,
	...exceptions: [AbstractClass, ClassDecorator[]][]
) {
	const map = new Map(exceptions);
	for (const item of MetaClass) {
		const exception = map.get(item.target as AbstractClass);
		if (exception) {
			exception.forEach((x) => x(item.target));
		} else {
			defaultDecorator?.()(item.target);
		}
	}
}
