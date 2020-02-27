function partition(arr:Array<number>, length:number) {
  return [].concat.apply([], arr.map(i => i % length ? [] : [arr.slice(i, i + length)]));
}