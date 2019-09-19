//Solution for Shopify's lazyload, replace '{width}' with value from data-widths array

/* 
let node = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example/{width}x.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 
*/

function lazySrc(obj) {

    let dataArray = obj.attr('data-widths') //string percieved as an array
                        .replace('[', '')
                        .replace(']', '')
                        .split(', ');

    let dataSelect = dataArray[3].toString(); // 3 = 1080px, your whatever you want :)

    let newSrc = obj.attr('data-src').replace(`{width}`, dataSelect);
    
    obj.attr('src', newSrc);
}

/*
lazySrc(node);
console.log(node.attr('src'));

Result:
> "//cdn.shopify.com/s/files/path/to/example/1080x.jpg"
*/