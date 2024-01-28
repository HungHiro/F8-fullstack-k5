// switch case: không linh hoạt nên chỉ sử dụng khi quá n nhánh và n trường hợp hoặc
var action = 'show';
switch (action) {
    case 'create':
        console.log('them');
        break;
    case 'update':
        console.log('capnhat');
        break;
    case 'delete':
        console.log('xoa');
        break;
    case 'show':
    case 'view':
        console.log('hienthi');
        break;
    default:
        console.log('Khong ton tai');
}
// baitap: chuyen doan tren thanh if else
var a1 = 'view';
if (a1 === 'create') {
    console.log('them');
} else if (a1 === 'update') {
    console.log('capnhat');
} else if (a1 === 'delete') {
    console.log('xoa');
} else if (a1 === 'show' || 'view') {
    console.log('hienthi');
} else {
    console.log('khong ton tai');
}

// Hiển số ngày trong tháng;
// 31d : 1, 3, 5, 7, 8, 10, 12;
// 30d : 4, 6 , 9, 11;
// 28d or 29d: 2
var month = 1;
month = month * 1;// ép kiểu nó về number
if (month % 1 === 0 && month >= 1 && month <=12) {
    switch (month) {
        case '6':
        case '4':
        case '9':
        case '11':
            console.log(`so ngay trong thang ${month} la: 30d`);
            break;
        case '2':
            console.log(`so ngay trong thang ${month} la: 28d`);
            break;
        default:
            console.log(`so ngay trong thang ${month} la: 31d`);
            break;
    }
} else {
    console.log('thang khong hop le');
}