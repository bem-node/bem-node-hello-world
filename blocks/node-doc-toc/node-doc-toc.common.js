/**
 * Node documentation table of context
 */
BN.addDecl('node-doc-toc').blockTemplate(function (ctx) {
    var json = ctx.json();
    //block template
    ctx.mix([{block: 'island'}]).content(json.index.desc.map(function (item) {
        //grab all links from json
        if (item.type === 'text') {
            var itemMatch = item.text.match(/\[(.+)\]\((.*)\.html\)/i);
            if (itemMatch.length >= 3) {
                //and map them to elements
                return {
                    elem: 'item',
                    text: itemMatch[1],
                    url: itemMatch[2]
                };
            }
        }
    }).filter(Boolean));
}).elemTemplate({
    'item': function (ctx) {
        //element template
        var json = ctx.json();
        ctx.mix([{block: 'island', elem: 'item'}]).content({
            block: 'b-link',
            url: '/node-doc/' + json.url,
            content: json.text
        });
    }
}).dataTemplate(function (ctx) {
    //request data for block
    return BN('node-doc-api').get('index').then(function (index) {
        ctx.param('index', index); //set data to index atribute
        return Vow.fulfill();
    });
});
