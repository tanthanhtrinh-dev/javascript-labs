Object.defineProperty(String.prototype, "SayHi", {
    value: function SayHi() {
        return "Hi " + this + "!";
    },
    writable: true,
    configurable: true
});
console.log("Charlie".SayHi());
