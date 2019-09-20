//Solution for Shopify's lazyload, replace '{width}' with value from data-widths array

/* 
let node = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example-{width}px.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 
*/

function lazySrc(obj, num) {

    let dataArray = obj.attr('data-widths') //string percieved as an array
                        .replace('[', '')
                        .replace(']', '')
                        .split(', ');

    let dataSelect = dataArray[num].toString(); // whatever you want from the array! :)

    let newSrc = obj.attr('data-src').replace(`{width}`, dataSelect);
    
    obj.attr('src', newSrc);
}

/*
lazySrc(node, 3); // 3 = 1080
console.log(node.attr('src'));

Result:
> "//cdn.shopify.com/s/files/path/to/example-1080px.jpg"
*/