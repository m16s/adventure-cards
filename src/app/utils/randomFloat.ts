export function randomFloat(max: number): number;
export function randomFloat(min: number, max: number): number;
export function randomFloat(min: number, max?: number): number {
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

	return Math.random() * (max - min) + min;
}
