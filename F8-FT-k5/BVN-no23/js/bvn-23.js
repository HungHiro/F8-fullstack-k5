//B1
console.log('b1');
//B1 function
function getError(field) {
  const errors = {
      name: {
          required: "Vui lòng nhập họ tên",
          min: "Họ tên phải từ 5 ký tự"
      },
      email: {
          email: "Định dạng email không hợp lệ",
          unique: "Email đã có người sử dụng",
          required: "Vui lòng nhập địa chỉ email"
      },
      password: {
          required: "Vui lòng nhập mật khẩu",
          same: "Mật khẩu phải khớp với mật khẩu nhập lại"
      }
  };
  if (errors[field]) {
      if (errors[field].required) {
          return errors[field].required;
      } else {
          return errors[field][Object.keys(errors[field])[0]];
      }
  } else {
      return "Field không tồn tại";
  }
}
//B1 result
console.log(getError('name'));
console.log(getError('email'));
console.log(getError('password'));
console.log(getError('nonexistent'));

//B2
console.log('b2');
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.shortName = this.name.split(' ').length > 1 ? this.name.split(' ')[0] + ' ' + this.name.split(' ')[this.name.split(' ').length - 1][0] : this.name;
}

function createCustomers(customersArray) {
  let customers = customersArray.map(customer => new Customer(customer.name, customer.age, customer.address));
  customers.sort((a, b) => a.age - b.age);
  customers = customers.map(customer => {
    return {
      ...customer,
      shortName: customer.name.split(' ').length > 1 ? customer.name.split(' ')[0] + ' ' + customer.name.split(' ')[1][0] : customer.name
    };
  });
  return customers;
}
const result = createCustomers(customers);
//B2 result
console.log(result);

//B3
console.log('b3');
function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}
const data = [];
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    throw new Error("Thông tin đăng ký không đầy đủ");
  }
  const newUser = new User(name, password, email);
  data.push(newUser);
  return data;
}
function handleLogin(email, password) {
  const user = data.find(user => user.email === email && user.password === password);
  if (user) {
    return user;
  } else {
    return "Thông tin đăng nhập không hợp lệ";
  }
}
handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
//B3 result
console.log(data);
console.log(dataLogin);