/**
 * Hello world page
 */
BN.addDecl('hello-world', 'page', {
    route: /^\/$/
}).staticProp({
    init: function () {
        return this.out('hello world');
    }
});
