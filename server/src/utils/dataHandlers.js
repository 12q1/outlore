const removeDuplicateObjects = (array, keys) => {
    const filtered = array.filter(
        (s => o =>
            (k => !s.has(k) && s.add(k))
                (keys.map(k => o[k]).join('|'))
        )
            (new Set)
    );
    return filtered
}
//bastardized from https://stackoverflow.com/questions/53542882/es6-removing-duplicates-from-array-of-objects

module.exports = { removeDuplicateObjects }