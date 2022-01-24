import moment from 'moment';

const initMoment = () => {
const date = moment('Thu Oct 25 2018 17:30:03 GMT+0300').fromNow();

console.log(date);
}


export { initMoment };
