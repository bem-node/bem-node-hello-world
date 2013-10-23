/**
 * Node docs page
 */
BN.addDecl('node-doc', 'page', {
    route: /^\/node-doc\/?(.+)?$/
}).staticProp({
    init: function () {
        return this.out('node doc');
    }
});
