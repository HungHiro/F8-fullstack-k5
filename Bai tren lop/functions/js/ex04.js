/* Call Back Function

*/
var showStudentInfo1 = () => {
    console.log("show student info 1")
}
var showStudentInfo2 = () => {
    console.log("show student info 2")
}
var showStudent = (funny) => {
    console.log("show student");
    if (typeof funny === "function") {
        funny();
    }
}
showStudent(showStudentInfo1);
showStudent(showStudentInfo2);
showStudent(function() {
    console.log("hoc js tai f88")
});
// Hàm setTimeout(callback, time(mili s)) => delay quá trình thực thi hàm callback
// var displayName = function(course) {
//     console.log("Hoidinhadonha");
//     console.log(course);
// };
// setTimeout(displayName, 1000, "fulltime");

//vd khác:
function getA(callback) {
    setTimeout(function () {
        console.log("getA");
    }, 2000);
    if (typeof callback === "function") {
        callback();
    }
};
function getB(callback) {
    setTimeout(function () {
        console.log("getB");
    }, 1000);
    if (typeof callback === "function") {
        callback();
    }
};
function getC(callback) {
    setTimeout(function () {
        console.log("getC");
    }, 500);
    if (typeof callback === "function") {
        callback();
    }
};
getB(function () {
    getA(function () {
        getC();
    });
});

function max() {
    console.log(arguments)
};
max(5, 10, 15, 20, 25);
//NOTE: Không hỗ trợ trong Arrow Function (ES6) => Cần sử dụng Rest Parameter