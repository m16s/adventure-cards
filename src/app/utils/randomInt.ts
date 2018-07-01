export function randomInt(max: number): number;
export function randomInt(min: number, max: number): number;
export function randomInt(min: number, max?: number): number {
	if (max === undefined) {
		max = min;
		min = 0;
	}

	if (typeof min !== 'number') {
		throw new TypeError('min is NaN');
	}

	if (typeof max !== 'number') {
		throw new TypeError('max is NaN');
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
}
