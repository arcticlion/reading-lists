/*
 * 以跨浏览器方式处理事件
 * 一般使用js库
 * EventUtil对象处理浏览器之间的差异
 * EventUtil对象中有一个addHandler()
 * 接受3个参数
 * 要操作的元素
 * 事件名称
 * 事件处理函数
 *     if addEventListener添加事件处理程序
 *     elif attachEvent
 *     else DOM0级方法
 * 跨浏览器事件对象
 *     getEvent()返回对event对象的引用
 *     getTarget()返回事件的目标
 *     preventDefault()取消事件的默认行为 
 */
var EventUtil = {

    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = fale;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type = null];
        }
    }
}

//使用EventUtil对象
var btn = document.getElementById("myBtn");
var handler = function () {
    alert("Clicked");
};
EventUtil.addHandler(btn, "click", handler);

EventUtil.removeHandler(btn, "click", handler);

//事件对象的使用
btn.onclick = function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
};


