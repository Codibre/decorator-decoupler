/* eslint-disable @typescript-eslint/no-explicit-any */
import { IterableParameterDecorator } from 'decorator-builder';
import { applyMeta } from './apply-meta';

export function baseApplyMetaParam(
	map: Map<Object, Map<unknown, ParameterDecorator[]>>,
	params: IterableParameterDecorator<
		Parameters<(identifider?: unknown) => void>
	>,
	defaultDecorator: ((identifier?: any) => ParameterDecorator) | undefined,
) {
	for (const item of params) {
		const exceptions = map.get(item.target);
		const byIndex = exceptions?.get(item.index);
		const byDecorator = exceptions?.get(item.args[0]);
		applyMeta(
			byIndex,
			(it, x) => x(it.target, it.name, it.index),
			item,
			defaultDecorator ? () => defaultDecorator(item.args[0]) : undefined,
			byDecorator,
		);
	}
	map.clear();
	params.clear();
}
