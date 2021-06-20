import App from './core/App.js';

/**
 * **事件枚举**
 * 
 * @constant EVENTS
 * @type {object}
 */
import * as EVENTS from './core/Events.js';

/**
 * **事件管理单例**
 * 
 * @constant EVENT
 * @type {Event}
 */
import EVENT from './core/Event.js';

/**
 * **事件管理单例**
 * 
 * EVENT EVENTMANGER 的简写
 * 
 * @constant E 
 * @type {Event}
 */
const E = EVENT;

/**
 * **事件管理单例**
 * 
 * @constant EVENTMANAGER
 * @type {Event}
 */
const EVENTMANAGER = EVENT;

export default {
  // 事件枚举
  EVENTS,
  ...EVENTS,
  // 事件管理
  EVENT,
  E,
  EVENTMANAGER,
  // 类
  App,
  // 版本
  VERSION: '1.0.0'
};
