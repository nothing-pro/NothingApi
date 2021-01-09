export default class Context {
  /**
   * @classdesc
   * 场景控制
   * 
   * **主要功能**
   * 
   * - 层级控制（changeLevel、setLevel）
   * @constructor Context
   */
  constructor() {}

  setLevel() {}
  changeLevel() {}
  getCurrentScene() {}

  /**
   * 设置渲染参数
   * @memberof App#
   * @method setRenderingParameter
   * @param {string} key 渲染配置对应Key
   * @param {object} val 渲染配置对应val
   * @param {Scene} scene options 渲染场景
   */
  async setRenderingParameter(key, val, scene) { }

  /**
   * 获取渲染参数
   * @memberof App#
   * @method getRenderingParameter
   * @param {string} key 渲染配置对应Key
   * @param {Scene} scene 渲染场景
   */
  async getRenderingParameter(key, scene) { }
}