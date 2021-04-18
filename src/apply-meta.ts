/* eslint-disable @typescript-eslint/no-explicit-any */
import { IterableDecorator } from 'decorator-builder';
import { Func, identity, IterableItem } from 'is-this-a-pigeon';

export function applyMeta<T extends Func, P extends IterableDecorator<any>>(
	methods: T[] | undefined,
	callback: (item: IterableItem<P>, x: T) => void,
	item: any,
	defaultDecorator: (() => T) | undefined,
	...others: (T[] | undefined)[]
) {
	if (methods || others.some(identity)) {
		[methods, ...others].forEach((values) =>
			values?.forEach((x) => callback(item, x)),
		);
	} else if (defaultDecorator) {
		callback(item, defaultDecorator());
	}
}
