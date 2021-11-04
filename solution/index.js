module.exports = class MySet{
    constructor(){
        this.group = []
    }
    add(el){
        if(!this.has(el)) this.group.push(el);
    }
    delete(el){
        if(this.has(el)) this.group.splice(this.group.indexOf(el), 1);
    }
    has(el){
        return this.group.includes(el);
    }
    static from(iterable) {
        let group = new Group();
        for(let value of iterable) {
            group.add(value);
        }
        return group;        
    }
    [Symbol.iterator]() {
        return new GroupIterator(this.group);
    }
}


class GroupIterator{
    constructor(group){
        this.group = [...group];
    }
    next(){        
        if(this.group.length) {
            let value = this.group.pop();
            return {            
                value,
                done: false
            }
        }else return {done : true}
    }
}

//Object.prototype.hasOwnProperty.call(map, 'one')