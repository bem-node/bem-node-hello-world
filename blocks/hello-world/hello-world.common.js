/**
 * Hello world page
 */
BN.addDecl('hello-world', 'page', {
    route: /^\/$/
}).staticProp({
    init: function () {
        return this.out([{
            block: this._name,
            content: [
                {
                    elem: 'title',
                    content: 'hello world',
                    tag: 'h1'
                },
                {
                    block: 'b-link',
                    content: 'node.js documentation',
                    url: '/node-doc'
                }
            ]
        }]);
    }
});
