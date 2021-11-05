module.exports = class MySet{
    constructor(elements){
        this.group = [];
        elements.forEach(element => this.add(element));
    }
    get size() {
        return this.group.length
    }
    forEach(cb, data) {
        cb(this);
    }
    clear() {
        this.group = []
    }
    *entries() {
        for(let value of this.group) {
            yield [value, value]
        }
    }
    *keys() {
        for(let value of this.group) {
            yield value
        }
    }
    values = this.keys;
    add(el){
        if(!this.has(el)) this.group.push(el);
        return this
    }
    delete(el){
        if(this.has(el)) this.group.splice(this.group.indexOf(el), 1);
    }
    has(el){
        return this.group.includes(el);
    }
    static from(iterable) {
        let set = new MySet();
        for(let value of iterable) {
            set.add(value);
        }
        return set;        
    }
    [Symbol.iterator] = this.keys;
    [Symbol.toStringTag] = '^_^'
    forEach(fn, data = this) {
        for (let value of this) {
                fn.call(data, value);
            }
    }
}
