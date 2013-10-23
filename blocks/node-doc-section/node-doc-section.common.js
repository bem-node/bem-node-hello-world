/**
 * Node documentation section
 */
BN.addDecl('node-doc-section').blockTemplate(function (ctx) {
    //block template
    var json = ctx.json();
    ctx.mix([{block: 'island'}]).content(
        this._convertDocToBemjson(json.sectionDocs)
    );
}).dataTemplate(function (ctx) {
    //get data for block
    var json = ctx.json();
    return BN('node-doc-api').get(json.section).then(function (sectionDocs) {
        ctx.param('sectionDocs', sectionDocs);
        return Vow.fulfill();
    }, function (err) {
        //if error occurs we should show error page
        BN('i-response').error(err);
        return Vow.reject(err);
    });
}).staticProp({
    /**
     * Convert data json to bemjson
     */
    _convertDocToBemjson: function (docObj, bemjsonAr, headerLevel) {
        var _this = this;
        bemjsonAr = bemjsonAr || [];
        headerLevel = headerLevel || 1;
        Object.keys(docObj).forEach(function (docKey) {
            var docObjItem = docObj[docKey];
            if (Array.isArray(docObjItem)) {
                docObjItem.forEach(function (item) {
                    if (typeof item === 'object') {
                        _this._convertDocToBemjson(item, bemjsonAr, headerLevel < 3 ? headerLevel + 1 : 4);
                    }
                });
            }
            if (docKey === 'textRaw') {
                bemjsonAr.push('<h' + headerLevel + '>' + docObjItem + '</h' + headerLevel + '>');
            }
            if (docKey === 'desc') {
                bemjsonAr.push(docObjItem);
            }
        });
        return bemjsonAr;
    }
});