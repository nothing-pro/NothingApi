export default class GL {
  /**
   * @constructor GL
   */
  constructor() {}

  /**
   * @memberof GL#
   * @method getSupportedExtensions
   */
  getSupportedExtensions() {}

  /**
   * 获取 gl 参数
   * @memberof App#
   * @method getParameter
   * @param {number} name 参数对应KEY值
   */
  async getParameter(name) {}

  /**
   * 批量获取 gl 参数
   * @memberof App#
   * @method getParameters
   * @param {Array} nameArr 参数对应KEY值
   */
  async getParameters(nameArr) {}
}
