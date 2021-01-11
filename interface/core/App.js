import Camera from "./Camera";

export default class App {
  /**
   * @classdesc
   * 应用程序类，用于创建应用程序。
   * 
   * **主要功能**
   * 
   * - 初始化应用程序（构造）
   * - 全局事件管理（register、unregister、on、un、one、fire）
   * - 对象挂载获取（getCamera、getContext、getUI）
   * - 启动扩展（use）
   * - 模型等加载（load）
   * - 获取gl运行时参数（getGL）
   * - 查询节点（query）
   * - 接口封装 （funcMode()、commandMode()、objectMode()）默认是 面向对象模式。
   * 
   * **实例**
   * 
   * ```js
   * // 创建应用程序
   * 
   * const app = new NOTHING.App(); // 无参构造
   * const app = new NOTHING.App({ // 有参构造
   *   el: 'divId'
   * });
   * 
   * // 加载模型文件
   * 
   * const node = await app.load('/path/to/model');
   * 
   * // 事件挂载
   * 
   * const eventId = app.on(NOTHING.CLICK, function(event) {});
   * 
   * // 节点查询
   * // 按照 json 精确匹配属性查询 也可以使用 RegExp 对象进行模糊匹配
   * 
   * const list = app.query([{ id: '' }, { id: '' }]);
   * ```
   * @constructor App
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-08
   * @param {object} options 配置选项
   * 
   * **可用参数**
   * 
   * ```json
   * {
   *   el: 'divId'             // 挂载的divId
   *   scenes: [],             // 加载的场景，兼容普通模型，nothing 等支持多场景 包含环境描述
   *   renderingParameters: [] // 用于配合普通模型每个场景的渲染配置，nothing 模型自带场景配置不需要这个参数 nothing 也可以用于临时配置 覆盖原有配置
   *   setting: {},            // 全局配置用于管理
   * }
   * ```
   */
  constructor(options) {}

  // #region 对象挂载获取

  /**
   * 获取配置
   * @memberof App#
   * @method getSetting
   * @returns {object} 配置
   */
  async getSetting() {}

  /**
   * 获取上下文内容
   * @memberof App#
   * @method getContext
   * @returns {Context} 上下文
   */
  async getContext() {}

  /**
   * 获取相机控制器
   * @memberof App#
   * @method getCamera
   * @returns {Camera} 相机控制
   */
  async getCamera() {}

  /**
   * 获取UI控制器
   * @todo 暂时未完成
   * @memberof App#
   * @method getUI
   * @returns {*} UI控制
   */
  async getUI() {}

  // #endregion

  // #region 接口模式封装

  /**
   * 使用函数编程模式
   * @todo 暂时未完成
   * @memberof App#
   * @method funcMode
   */
  funcMode() {}

  /**
   * 使用命令编程模式
   * @todo 暂时未完成
   * @memberof App#
   * @method commandMode
   */
  commandMode() {}

  /**
   * 使用面向对象编程模式
   * @todo 暂时未完成
   * @memberof App#
   * @method objectMode
   */
  objectMode() {}

  // #endregion
  
  // #region 启动扩展

  /**
   * 添加扩展
   * @memberof App#
   * @method use
   * @param {Map} extensions 扩展存储Map对象
   */
  async use(extensions) {}

  // #endregion

  // #region 模型等加载

  /**
   * 加载场景 模型等
   * @memberof App#
   * @method load
   * @param {URL} url 模型路径
   */
  async load(url) {}

  // #endregion

  // #region 获取gl运行时参数

  /**
   * 获取 gl 对象 （仅提供查询）
   * @memberof App#
   * @method getGL
   * @returns {GL} gl运行时对象
   */
  getGL() {}

  // #endregion

  // #region 查询节点

  /**
   * 获取 gl 对象 （仅提供查询）
   * 
   * ```js
   * // 查询多个ID
   * const list = app.query({id: 'id1'}, {id: 'id2'});
   * // 使用正则匹配
   * const list = app.query({id: /^id\d{1, 1}&'/});
   * ```
   * @memberof App#
   * @method query
   * @returns {Array} 符合条件的node节点
   */
  async query() {}

  // #endregion
}
