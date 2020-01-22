// Solution for Shopify's lazyload, replace '{width}' with value from data-widths array
// purpose to eliminate the use of another plugin

/* 
let target = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example-{width}px.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 
*/

function lazySrc(target, i) {
    let dataArray = target.attr('data-widths') //string percieved as an array
                        .replace('[', '')
                        .replace(']', '')
                        .split(', ');

    let dataSelect = dataArray[i].toString(); // whatever you want from the array! :)
    let newSrc = target.attr('data-src').replace(`{width}`, dataSelect);
    
    target.attr('src', newSrc);
}

/*
lazySrc(target, 3); // 3 = 1080
console.log(target.attr('src'));

Result:
> "//cdn.shopify.com/s/files/path/to/example-1080px.jpg"
*/
