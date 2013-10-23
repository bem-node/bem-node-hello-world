/**
 * Fetching data from node.js doc api
 */
BN.addDecl('node-doc-api', 'ajax', {
    apiHost: 'http://nodejs.org/api/'
}).staticProp({
    /**
     * Add .json to resources
     * @overide
     */
    get: function (resource) {
        resource = resource + '.json';
        return this.__base(resource);
    }
});
