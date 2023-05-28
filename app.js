"use strict";
//OBJECT METHODS



// (1) " Object.create() " Obyektni nusxalash uchun
const a = {
    type: true,
};

const b = Object.create(a);

b.type = false;

console.log("a", a, "b", b);



// (2) " Object.freeze() " Obyektni muzlatadi keyin uni qiymatlarini o'zgartirib bo'lmaydi
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 3

console.log(obj.prop);



// (3) Obyektni array qilib qaytaradi
const object1 = {
    a: this.a,
    d: true,
};

console.log(Object.getOwnPropertyNames(object1));

