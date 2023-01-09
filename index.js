export default function nidx (idx, length) {
	return idx == null ? 0 :
		idx < 0 ? Math.max(idx + length, 0) :
		idx > 0 ? Math.min(length, idx) :
		Object.is(idx, -0) ? length : 0
}