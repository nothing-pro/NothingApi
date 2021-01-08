
export default class App {
  /**
   * @classdesc 应用起始
   * ```json
   * {
   *   el: 'el',
   *   location: true,
   *   environment: '',
   *   model: '',
   *   settings: '',
   *   canvas: ''
   * }
   * ```
   *
   * **当前可用配置**
   *
   * | 参数 | 值 |
   * | - | - |
   * | el | divId |
   *
   * @constructor App
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2020-12-17
   * @param {object} options 配置选项
   */
  constructor(options) {}

  /**
   * 初始化
   * @memberof App#
   * @method initialize
   */
  async initialize() {}

  /**
   * 重新设置长宽
   * @memberof App#
   * @method resize
   * @param {number} width 渲染宽度
   * @param {number} height 渲染高度
   */
  async resize(width, height) {}

  /**
   * 销毁
   * @memberof App#
   * @method destroy
   */
  async destroy() {}

  /**
   * 添加扩展
   * @memberof App#
   * @method destroy
   * @param {Map} extensions 扩展存储Map对象
   */
  async use(extensions) {}

  /**
   * 获取当前浏览器支持的扩展
   * @memberof App#
   * @method getSupportedExtensions
   */
  async getSupportedExtensions() {}

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

  /**
   * 设置渲染参数
   * @memberof App#
   * @method setCurrentRenderingParameter
   * @param {string} key 渲染配置对应Key
   * @param {object} val 渲染配置对应val
   */
  async setCurrentRenderingParameter(key, val) { }

  /**
   * 获取渲染参数
   * @memberof App#
   * @method getCurrentRenderingParameter
   * @param {string} key 渲染配置对应Key
   */
  async getCurrentRenderingParameter(key) { }

  /**
   * 设置配置的背景色为 clearColor
   * @memberof App#
   * @method clearColor
   */
  async clearColor() { }

  /**
   * 获取配置
   * @memberof App#
   * @method getSettings
   */
  async getSettings() { }

  /**
   * 旋转场景
   * @memberof App#
   * @method rotateScene
   */
  async rotateScene() { }
}
