export default class Context {
  /**
   * @classdesc
   * 场景控制
   * 
   * **主要功能**
   * 
   * - 层级控制（getLevel、setLevel、setLevels）
   * - 当前场景（getCurrentScene）
   * 
   * @constructor Context
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   * @param {App} app 应用程序对象
   */
  constructor(app) {}

  /**
   * 加载场景
   * @memberof App#
   * @method load
   * @param {object} scenes 配置
   *
   * ```json
   * {
   *   'sceneid': {
   *      url:''
   *      parameter: {}
   *   }
   * }
   * ```
   */
  load(scenes) { }

  /**
   * 设置级别配置
   * 
   * ```js
   * // 创建级别
   * const level1 = NOTHING.Level(scene1);
   * const level = NOTHING.Level(scene, [level1]);
   * app.getContext().setLevels(level);
   * ```
   * 
   * @memberof Context#
   * @method setLevels
   * @param {Level} level 场景级别配置
   */
  setLevels(level) {}

  /**
   * 设置当前级别
   * @memberof Context#
   * @method setLevel
   * @param {Level} level 当前场景级别
   */
  setLevel(level) {}

  /**
   * 获取当前级别
   * @memberof Context#
   * @method setLevel
   * @returns {Level} 场景级别
   */
  getLevel() {}

  /**
   * 获取当前显示的场景
   * @memberof Context#
   * @method getCurrentScene
   * @param {Scene} 场景
   */
  getCurrentScene() {}
}