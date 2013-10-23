/**
 * Node documentation table of context
 */
BN.addDecl('node-doc-toc').blockTemplate(function (ctx) {
    //block template
    ctx.mix([{block: 'island'}]).content([
        {elem: 'item', url: 'item-1', text: 'item 1'},
        {elem: 'item', url: 'item-1', text: 'item 2'}
    ]);
}).elemTemplate({
    'item': function (ctx) {
        //element template
        var json = ctx.json();
        ctx.mix([{block: 'island', elem: 'item'}]).content({
            block: 'b-link',
            url: json.url,
            content: json.text
        });
    }
});