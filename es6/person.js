/**
 * Created by rt on 2017/4/1.
 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    say(){
        return '我是HAHA'+this.name+',我今年'+this.age+'岁了。';
    }
}

export default Person;