const parseCombine = (str, regex) => {
    let arr = str.split(''), i = 0;
    arr.forEach(e => {
        if (regex.test(e)) {
            let j = i - 1;
            arr.splice(j, 1, arr[j] + arr[i]);
            arr.splice(i, 1);
        }
        i++;
    });
    return (arr);
};
