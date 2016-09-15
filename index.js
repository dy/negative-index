/** @module negative-index */
module.exports = function negIdx (idx, length) {

	return idx <= -length ? 0 : idx < 0 ? (length + (idx % length)) : Math.min(length, idx);
}
