//bt1
var query = {
    name: 'Hùng Hùng',
    email: 'tuanhung@gmail.com',
    keyword: 'f8',
};
// Chuyển object trên thành dạng query params, vd: name=Hoang+An&email=tuanhung@gmail.com&keyword=F8
// Yêu cầu không sử dụng hàm URLSearchParams()
var str = '', params = '';
for (var key in query) {
    str = `${key}=${query[key]}`;
    params += `${str}&`;
};
var params = params.slice(0, params.length - 1);
console.log(params)
//bt2
var url = `https://fullstack.edu.vn/search?name=Hoàng+An&email=hoangan@gmail.com&keyword=F8`;
console.log(url);
/*
Yêu cầu tách từng thành phần của url
    -Protocol: https
    -Domain: fullstack.edu.vn
    -Path: search
    -Query: {
        name: Hoàng An,
        email: hoangan@gmail.com,
        keyword: F8,
    }
*/
var urlArr = url.split('//');
var protocol = urlArr[0].slice(0, -1);
var domain = urlArr[1].slice(0, urlArr[1].indexOf('/'));
var afterDomain = urlArr[1].slice(urlArr[1].indexOf('/'));
var pathname = afterDomain.slice(0, afterDomain.indexOf('?'));
var params2 = afterDomain.slice(afterDomain.indexOf('?') + 1);
var query2 = params2.split("&").map(function(item) {
    var itemArr = item.replaceAll('+', ' ').split('=');
    return itemArr;
});
query2 = Object.fromEntries(query2)
console.log(urlArr);
console.log(protocol);
console.log(domain);
console.log(pathname);
console.log(params2);
console.log(query2);
