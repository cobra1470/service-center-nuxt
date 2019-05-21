/*
 * @Author: TanZer.hanyu 
 * @Date: 2019-05-09 11:53:15
 * @lodash 4.17.10 文档： hhttps://www.html.cn/doc/lodash/
 */
import Vue from 'vue';
import _ from 'lodash';

export default () => {
    Vue.use({
        install: function (Vue, Option) {
            Object.defineProperty(Vue.prototype, '_', { value: _ });
        }
    })
    // Window._ = Vue.prototype._ = _
}