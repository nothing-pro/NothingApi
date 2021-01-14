export default class GL {
  /**
   * @classdesc GL运行时查询
   * @constructor GL
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   * @param {App} app 应用程序对象
   */
  constructor(app) {}

  /**
   * 获取当前运行时支持的扩展
   * @memberof GL#
   * @method getSupportedExtensions
   */
  async getSupportedExtensions() {}

  /**
   * 获取 gl 参数
   * @memberof GL#
   * @method getParameter
   * @param {number} queryParameter 参数对应KEY值
   */
  async getParameter(queryParameter) {}

  /**
   * 批量获取 gl 参数
   * @memberof GL#
   * @method getParameters
   * @param {Array} queryParameters 参数对应KEY值数组
   */
  async getParameters(queryParameters) {}
}
