var Journal = /** @class */ (function () {
    function Journal(entires) {
        this.entires = entires;
    }
    Journal.prototype.get = function () {
        console.log(this.entires);
    };
    return Journal;
}());
var journal = new Journal("hello world");
console.log(journal.entires);
journal.get();
