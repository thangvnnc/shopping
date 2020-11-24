function logOut() {
    AjaxReq({
        url: URL_API_LOGOUT,
        success: function (data) {
            if (data.code !== R.DEF.OK.code) {
                md.showBottomCenterMessage(data.message);
                return;
            }
            Href(URL_HTML_LOGIN);
        },
        error: function (err) {
            md.showBottomCenterMessage(err.message);
            console.error(err);
        }
    })
}
