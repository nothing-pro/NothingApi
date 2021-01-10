export default class Event {
  /**
   * @classdesc 全局事件对象
   * @constructor Event
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   */
  constructor() {}

  /**
   * 注册事件
   * @memberof App#
   * @method register
   * @param {string} eventName 事件名称
   * @param {Object} object 挂载事件的对象
   * @param {function} eventFunc 事件回调
   * @returns {number} eventId 事件ID 用于唯一定位
   */
  register(eventName, object, eventFunc) {}

  /**
   * 取消注册事件
   * @memberof App#
   * @method unregister
   * @param {string} eventName 事件名称
   * @param {string | number} eventId option 事件ID 用于唯一定位
   */
  unregister(eventName, object, eventId) {}

  /**
   * register 的缩写
   * @memberof App#
   * @method on
   * @param {string} eventName 事件名称
   * @param {function} eventFunc 事件回调
   * @returns {number} eventId 事件ID 用于唯一定位
   */
  on(eventName, object, eventFunc) {}

  /**
   * unregister 的缩写
   * @memberof App#
   * @method un
   * @param {string} eventName 事件名称
   * @param {string | number} eventId option 事件ID 用于唯一定位
   */
  un(eventName, object, eventId) {}

  /**
   * 注册事件 仅发生一次
   * @memberof App#
   * @method one
   * @param {string} eventName 事件名称
   * @param {function} eventFunc 事件回调
   * @returns {number} eventId 事件ID 用于唯一定位
   */
  one(eventName, object, eventFunc) {}

  /**
   * 触发事件
   * @memberof App#
   * @method fire
   * @param {string} eventName 事件名称
   * @param {object} additionalInfo 扩展信息
   */
  fire(eventName, object, additionalInfo) {}
}
