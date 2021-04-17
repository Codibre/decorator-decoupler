import { AbstractClass } from 'is-this-a-pigeon';
import { MetaMethod } from './decorators';

export function applyMetaMethod(
	defaultDecorator: (() => MethodDecorator) | undefined,
	...exceptions: [AbstractClass, ['string', MethodDecorator[]][]][]
) {
	const map = new Map(exceptions.map(([a, b]) => [a.prototype, b]));
	for (const item of MetaMethod) {
		const methods = map.get(item.target);
		if (methods) {
			const exception = methods.find(([x]) => x === item.name);
			if (exception) {
				exception[1].forEach((x) => x(item.target, item.name, item.descriptor));
				continue;
			}
		}
		defaultDecorator?.()(item.target, item.name, item.descriptor);
	}
}
