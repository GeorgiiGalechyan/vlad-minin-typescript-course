"use strict";
const cars = ['ford', 'audi'];
const cars2 = ['ford', 'audi'];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolve');
    }, 2000);
});
promise.then((data) => {
    console.log(data.toLowerCase().trim().toUpperCase());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Vladilen' }, { age: 26 });
const merged2 = mergeObject({ model: 'Ford' }, { year: 2010 });
console.log(merged.age);
console.log(merged2.model);
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    };
}
console.log(withCount('Привет Typescript'));
console.log(withCount(['I', 'am', 'array']));
console.log(withCount({ length: 20 }));
//# sourceMappingURL=generic.js.map