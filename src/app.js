import Vue from 'vue';
import Card from './components/Card';

const numOfItems = 10;
const items = Array.apply(null, Array(numOfItems)).map(() => {
    const rand = Math.random();
    return (
        {
            img: `https://picsum.photos/200/300/?random&cb=${rand}`,
            num: Math.floor(rand* 100) 
        }
    )
});

const app = new Vue({
    el: '#app',
    data: {
        message: 'WHATS UP',
        items
    }
});

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});