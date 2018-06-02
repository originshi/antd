/**
 * Created by rt on 2017/4/1.
 */
import Person from './Person.js';

let p = new Person('张三2', 20);
document.write(p.say());
const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL1',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE1'
};
const { SHOW_ALL,SHOW_ACTIVE } = VisibilityFilters
console.log(SHOW_ALL,SHOW_ACTIVE)