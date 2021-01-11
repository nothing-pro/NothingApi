export default class Scene {
  /**
   * @classdesc 场景封装
   * @constructor Scene
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   */
  constructor() {}

  /**
   * 获取场景级别
   * @memberof Scene#
   * @method getLevel
   * @returns {Level} 级别
   */
  getLevel() {}

  /**
   * 设置渲染参数
   * @memberof Scene#
   * @method setRenderingParameter
   * @param {string} key 渲染配置对应Key
   * @param {object} val 渲染配置对应val
   * @param {Scene} scene options 渲染场景
   */
  async setRenderingParameter(key, val, scene) { }

  /**
   * 获取渲染参数
   * @memberof Scene#
   * @method getRenderingParameter
   * @param {string} key 渲染配置对应Key
   * @param {Scene} scene 渲染场景
   */
  async getRenderingParameter(key, scene) { }
}
