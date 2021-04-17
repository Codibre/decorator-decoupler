import { AbstractClass } from 'is-this-a-pigeon';
import { MetaCtorParam } from './decorators';

export function applyMetaParam(
	defaultDecorator: (() => ParameterDecorator) | undefined,
	...exceptions: [AbstractClass, [number, ParameterDecorator[]][]][]
) {
	const map = new Map(exceptions);
	for (const item of MetaCtorParam) {
		const ctorParams = map.get(item.target as AbstractClass);
		if (ctorParams) {
			const exception = ctorParams.find(([x]) => x === item.index);
			if (exception) {
				exception[1].forEach((x) => x(item.target, item.name, item.index));
				continue;
			}
		}
		defaultDecorator?.()(item.target, item.name, item.index);
	}
}
