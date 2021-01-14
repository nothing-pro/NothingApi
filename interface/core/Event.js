class Event {
  /**
   * @classdesc 全局事件对象
   * @constructor Event
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   */
  constructor() {}

  /**
   * 注册事件
   * @memberof Event#
   * @method on
   * @param {string} eventName 事件名称
   * @param {Object} object 挂载事件的对象
   * @param {function} eventFunc 事件回调
   */
  on(eventName, object, eventFunc) {}

  /**
   * 取消注册事件
   * @memberof Event#
   * @method off
   * @param {string} eventName 事件名称
   */
  off(eventName, object, eventFunc) {}

  /**
   * 注册事件 仅发生一次
   * @memberof Event#
   * @method one
   * @param {string} eventName 事件名称
   * @param {function} eventFunc 事件回调
   */
  one(eventName, object, eventFunc) {}

  /**
   * 触发事件
   * @memberof Event#
   * @method trigger
   * @param {string} eventName 事件名称
   * @param {object} additionalInfo 扩展信息
   */
  trigger(eventName, object, additionalInfo) {}
}

const eventManager = new Event();

export default eventManager;
