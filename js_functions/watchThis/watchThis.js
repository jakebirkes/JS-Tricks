const watchThis = (target, time = 1000) => {
    if (!target)
        return;
    setTimeout(() => {
        const observer = new MutationObserver(mutations => mutations.forEach(mutation => {
            console.log(mutation);
            debugger;
        }));
        let t = document.querySelectorAll(target);
        if (!t.length) {
            console.log(`%cMutationObserver: '${target}' not found`, 'color:#00FF7F');
            return;
        }
        t.forEach(e => {
            observer.observe(e, {
                childList: true,
            });
            console.log(`%cMutationObserver: observing '${target}'`, 'color:#00FF7F');
        });
    }, time);
};
