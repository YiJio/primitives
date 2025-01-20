export const Utils = {
	range(start, end) {
		if (start === end) return [start];
		return [start, ...this.range(start + 1, end)];
	},
	removeDuplicates(array) {
		return [...new Set(array)];
	},
	normalize(value, min, max) {
		return (value - min) / (max - min);
	},
	getFromIndex(array, fieldCheck, value, returnField = null) {
		const index = array.findIndex((a) => a[fieldCheck] == value);
		if (returnField) return array[index][returnField];
		return array[index];
	},
}