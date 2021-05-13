function isBar(arg) {
    return arg.bar !== undefined;
}
function isString(arg) {
    return typeof arg === 'string';
}
function foo(x) {
    if (isString(x)) {
        console.log(typeof x);
    }
    console.log(typeof x);
}
