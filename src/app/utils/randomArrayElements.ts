import { randomInt } from "./randomInt";

export function randomArrayElements<T>(list: T[], count: number = 1): T[] {
	if (list.length < count) {
		throw new TypeError('too short array');
	}

  // optimizations
	if (list.length === count) {
		return list;
  }  
  if (count === 1) {
    return [list[randomInt(list.length - 1)]];
  }

  let bucket = list.slice();
  const results: T[] = [];

  for (let i=0; i<count; i++) {
    const index = randomInt(bucket.length - 1);
    results.push(bucket[index]);
    bucket.splice(index, 1);
  }

  return results;
}
