/**
 * Node docs page
 */
BN.addDecl('node-doc', 'page', {
    route: /^\/node-doc\/?(.+)?$/
}).staticProp({
    //calls on page render
    init: function (matches) {
        var section = this._getSectionName(matches);
        this.setTitle(section + ' – node.js api'); //set page title
        //output page layout
        return this.out({
            block: 'node-doc',
            content: [
                {elem: 'toc', content: {block: 'node-doc-toc'}},
                {elem: 'section', content: {block: 'node-doc-section', section: section}}
            ]
        });
    },

    _getSectionName: function (matches) {
        return matches[1] || 'documentation'; //set section from url
    },

    //update page on client
    update: function (matches) {
        var section = this._getSectionName(matches);
        return BN('node-doc-section').updateSection(section);
    }
});
