function renderEjsJquery(file, data, obj) {
    renderEjs(file, data, function (html) {
        $(obj).html(html);
    })
}

function renderEjs(file, data, cb) {
    $.ajax({
        async: false,
        url:file,
        type:'GET',
        success: function(allText){
            var html = ejs.render(allText, data);
            cb(html);
        }
    });
}