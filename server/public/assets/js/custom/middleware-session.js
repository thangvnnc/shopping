$(document).ready(function() {
    AjaxReq({
        url: URL_API_USER_SESSION_STATE,
        success: function (data) {
            if (data.code !== R.DEF.OK.code) {
                Href(URL_HTML_LOGIN);
                return;
            }
        },
        error: function (err) {
            md.showBottomCenterMessage(err.message);
        }
    })
})