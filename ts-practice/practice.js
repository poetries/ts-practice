"use strict";
var getUser = function (obj) {
    return obj.name + obj.age + obj.phone;
};
getUser({
    name: 'poetry',
    age: 22,
    sex: 'male',
    phone: 891
});
