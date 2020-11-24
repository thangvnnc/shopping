$(document).ready(function() {

    AjaxReq({
        url: URL_API_USER_SESSION_STATE,
        success: function (data) {
            if (data.code === R.DEF.OK.code) {
                Href(URL_HTML_HOME);
                return;
            }
        },
        error: function (err) {
            md.showBottomCenterMessage(err.message);
        }
    })

    $('.btn-login').on('click', function (event) {
        var username = $('.ip-username').val();
        var password = $('.ip-password').val();

        AjaxReq({
            url: URL_API_LOGIN,
            data: {
                username: username,
                password: password
            },
            success: function (data) {
                if (data.code !== R.DEF.OK.code) {
                    md.showBottomCenterMessage(data.message);
                    return;
                }
                Href(URL_HTML_HOME);
            },
            error: function (err) {
                md.showBottomCenterMessage(err.message);
                console.error(err);
            }
        })
    })

    $('.btn-register').on('click', function (event) {
        Href(URL_HTML_REGISTER);
    })
})