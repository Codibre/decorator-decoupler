/* eslint-disable @typescript-eslint/no-explicit-any */
import { IterableDecorator } from 'decorator-builder';
import { Func, IterableItem } from 'is-this-a-pigeon';
import { applyMeta } from './apply-meta';

export function baseApplyProperty<
	T extends Func,
	P extends IterableDecorator<any>
>(
	map: Map<Object, Map<string | number | symbol, T[]>>,
	params: P,
	defaultDecorator: (() => T) | undefined,
	callback: (item: IterableItem<P>, x: T) => void,
) {
	for (const item of params) {
		const exceptions = map.get(item.target);
		const methods = exceptions?.get(item.name);
		applyMeta(callback, item, defaultDecorator, methods);
	}
	params.clear();
	map.clear();
}
