import Vue from 'vue';
import template from './index.html';

const Card = Vue.component('card', {
    props: ['img', 'num'],
    template,
});

export default Card;