var users = [
    {id: 1,
    name: "user1",
    email: "user1@gmail.com",
    },
    {id: 2,
    name: "user2",
    email: "user2@gmail.com",
    },
    {id: 3,
    name: "user3",
    email: "user3@gmail.com",
    },
];
/*var root = document.querySelector("#root");
root.innerHTML = `
<form>
    <div><input type="text" placeholder="Nhập tên..."></div>
    <div><input type="email" placeholder="Nhập email..."></div>
    <button>Thêm</button>
</form>
<ul>
    ${users.map(function (user) {
    return `<li>id:${user.id} - ${user.name} - ${user.email} <button class="delete-btn">&times;</button><li>`;
    }).join("")}
</ul>
`
root.addEventListener("click", function (a) {
    if(a.target.classList.contains("delete-btn")) {
        a.target.parentElement.remove()
    }
});
var form = root.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = this.querySelector('[name = "name"]').value;
    var email = this.querySelector('[email = "email"]').value;
    users.push({
        id: (Math.random()*1000 + 1000).toPrecision(3),
        name: name,
        email: email,
    });
    console.log(users);
})*/
/*
var ul = document.createElement("ul")
user.forEach(function (user) {
    var li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    var button = document.createElement("button");
    button.innerHTML = "&time;";
    li.append(button);
    ul.append(li);
    button.addEventListener("click", handleRemove);
});
root.append(ul);
function handleRemove(e) {
    e.target.parentElement.remove();
}*/
var F8 = {
    createElement: function (tag, attributes = {}, ...children) {
        var element = document.createElement(tag);
        if (children.length) {
            children.forEach(function (item) {
                element.append(item);
            })
        }
        if (Object.keys(attributes).length) {
            Object.keys(attributes).forEach(function (attribute) {
                var value = attributes[attribute];
                // element[attribute] = value;
                if (attribute.startsWith("on")) {
                    var eventName = attribute.replace("on", "").toLowerCase();
                    element.addEventListener(eventName, value);
                } else {
                    element[attribute] = value;
                }
            })
        }
        return element;
    },
}
var div = F8.createElement("div", {className: "container", id: "main"},
    F8.createElement("h1", {className: "title"}, "Hoc Js tai f8"),
    F8.createElement("h2", {className: "sub-title"}, "Hoc js o day"),
    F8.createElement("button", {
    type: "button",
    className: "btn",
    onClick: function (e) {
        e.target.style.color = "red"
    },
},
    "Click me"
));
var userEl = users.map(function (user) {
    return F8.createElement("li", {}, `${user.name} - ${user.email}`,
    F8.createElement("button", {
        type: "button",
        onClick: function (e) {
            e.target.parentElement.remove();
        },
    },
        "delete")
);
});

var app = F8.createElement("ul", {}, ...userEl);
root.append(div);
root.append(app);
// counter
var counter = F8.createElement("div", {
    className: "counter-app",
},
    F8.createElement(div, {}, 0),
    F8.createElement("button",{
    type: "button",
    onClick: function (e) {
    e.target.previousElementSibling.innerText++;
    },
},
    "+",
        ),
    F8.createElement("button",{
    type: "button",
    onClick: function (e) {
    e.target.previousElementSibling.previousElementSibling.innerText--;
    },
},
    "-",
        ),
)
root.append(counter);