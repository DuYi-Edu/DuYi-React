/**
 * 订阅频道
 */
export class Channel {
    listeners = {};

    /**
     * 添加一个订阅者
     * @param {*} prop 属性名
     * @param {*} func 订阅函数
     */
    take(prop, func) {
        if (this.listeners[prop]) {
            this.listeners[prop].push(func); //添加监听函数
        }
        else {
            this.listeners[prop] = [func];
        }
    }

    /**
     * 发布一个订阅：触发监听函数
     * @param {*} prop 触发的属性名
     * @param  {...any} args 额外的参数
     */
    put(prop, ...args) {
        if (this.listeners[prop]) {
            var funcs = this.listeners[prop]; //订阅函数的数组
            //删除订阅
            delete this.listeners[prop]; //移除订阅
            funcs.forEach(func => {
                func(...args);
            })
        }
    }
}