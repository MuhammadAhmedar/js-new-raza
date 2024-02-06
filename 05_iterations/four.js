const myObject = {
    'JS' : 'javascript',
    'CPP' : 'c++',
    'RUB' : 'Ruby',
    'SWIFT' : 'swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}