/* eslint-disable @typescript-eslint/no-explicit-any */
function getItem<T, R, F extends R>(
	map: Map<T, R>,
	cls: T,
	fallback: () => F,
): R {
	let item = map.get(cls);
	if (!item) {
		item = fallback();
		map.set(cls, item);
	}
	return item;
}

export function getMap<T, R extends Map<any, any>>(map: Map<T, R>, key: T) {
	return getItem(map, key, () => new Map() as R);
}

export function getList<T, R extends any[]>(map: Map<T, R>, key: T) {
	return getItem(map, key, () => [] as any);
}
