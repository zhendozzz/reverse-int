module.exports = function reverse(n) {
    const str = String(Math.abs(n)).split("").reverse().join("");
    return str;
}
