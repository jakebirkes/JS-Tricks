function partition(arr, length) {
    return [].concat.apply([], arr.map(i => i % length ? [] : [arr.slice(i, i + length)]));
}
