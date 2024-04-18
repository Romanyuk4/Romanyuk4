31 + kiwi
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
96 * 8
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const greet = name => `Hello, ${name}!`;
const formatDate = date => new Date(date).toLocaleDateString();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
