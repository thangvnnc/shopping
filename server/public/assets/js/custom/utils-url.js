const URL_HTML_LOGIN = 'login.html';
const URL_HTML_REGISTER = 'register.html';
const URL_HTML_HOME = 'home.html';

const URL_METHODS = { POST: 'POST', GET: 'GET' };
const URL_API_BASE = 'http://192.168.1.111:99/apiv1';
const URL_API_LOGIN = URL_API_BASE + '/user/login';
const URL_API_LOGOUT = URL_API_BASE + '/user/logout';

const URL_API_USER_SESSION_STATE = URL_API_BASE + '/user/session/state';
const Href = function (url) {
    window.open(url, '_self');
}
const AjaxReq = function (obj) {
    $.ajax({
        url: obj.url,
        method: URL_METHODS.POST,
        async:true,
        // crossDomain: true,
        xhrFields: {
        // Set cros confirm domain get data ajax
            withCredentials: true
        },
        data: obj.data,
        success: obj.success,
        error: obj.error,
        complete: obj.complete
    });
}
