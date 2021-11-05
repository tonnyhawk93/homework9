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
    entries() {
        return this.group.map(el => [el, el])
    }
    keys() {
        return this.group
    }
    values() {
        return this.group
    }
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
    [Symbol.iterator]() {
        return new GroupIterator(this.group);
    }
    [Symbol.toStringTag] = '^_^'
    forEach(fn, data = this) {
        for (let value of this) {
                fn.call(data, value);
            }
    }
}
class GroupIterator{
    constructor(group){
        this.group = [...group];
    }
    next(){        
        if(this.group.length) {
            let value = this.group.shift();
            return {            
                value,
                done: false
            }
        }else return {done : true}
    }
}
