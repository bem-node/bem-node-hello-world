/**
 * Node docs page
 */
BN.addDecl('node-doc', 'page', {
    route: /^\/node-doc\/?(.+)?$/
}).staticProp({
    init: function () {
        return this.out({
            block: 'node-doc',
            content: [
                {elem: 'toc', content: {block: 'node-doc-toc'}},
                {elem: 'section', content: {block: 'node-doc-section'}}
            ]
        });
    }
});
