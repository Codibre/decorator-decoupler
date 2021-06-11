/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createClassDecorator,
	createMethodDecorator,
	createParameterDecorator,
	createPropertyDecorator,
} from 'decorator-builder';

export const MetaClass = createClassDecorator();
export const MetaCtorParam = createParameterDecorator<
	<T>(identifier?: T) => void
>((item) => {
	if (item.name) {
		throw new TypeError(
			'This decorator must only be used in constructor parameters!',
		);
	}
});
export const MetaParam = createParameterDecorator<<T>(identifier?: T) => void>(
	(item) => {
		if (!item.name) {
			throw new TypeError(
				'This decorator must not be used in constructor parameters!',
			);
		}
	},
);
export const MetaMethod = createMethodDecorator((item) => {
	if (!item.descriptor) {
		throw new TypeError('This decorator must only be used in methods!');
	}
});
export const MetaProperty = createPropertyDecorator<(meta?: unknown) => void>();
