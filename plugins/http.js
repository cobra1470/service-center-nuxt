/*
 * @Author: TanZer.hanyu 
 * @Date: 2019-05-09 11:53:15
 */
import Vue from 'vue';
import _http from '../utils/http';

export default () => {
    // Vue.use(_)
    Window.$http = Vue.prototype.$http = _http;
}