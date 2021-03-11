export default class App {
  /**
   * @classdesc
   * 应用程序类，用于创建应用程序。
   * 
   * **主要功能**
   * 
   * - 初始化应用程序（构造）
   * - 全局事件管理（on、off、one、trigger）
   * - 对象挂载获取（getCamera、getContext、getUI）
   * - 启动扩展（use）
   * - 模型等加载（load, loadPrototype）
   * - 获取gl运行时参数（getGLParameter）
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
   *   el: '#divId'
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
   *   el: '#divId'            // 可以使用 querySelector 查询的字符串 或者 HTMLDivElement 对象
   *   definition: {           // 场景定义 scene 当前显示场景ID scenes 需要加载的场景地址 parameters 可选 渲染参数 levels 可选 用于定义层级
   *     scene: '',
   *     parameters: {
   *       'id': {}
   *     },
   *     levels：{
   *       name: ''            // 层级名称
   *       scene: 'sceneid'
   *       children: [
   *         {
   *           name: '',
   *           scene: 'subsceneId',
   *           children: []
   *         }
   *       ]
   *     },
   *     scenes: {
   *       'id': {
   *          url: ''
   *          parameter: ''
   *        }
   *     }
   *   },
   *   setting: {}             // 预置配置
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
   * 同 context.load
   * @memberof App#
   * @method load
   * @param {object|string} scenes 对象或者路径
   */
  async load(scenes) {}
  
  /**
   * 下载模型作为原型使用 并不加载到场景
   * 返回 Node 节点
   * @memberof App#
   * @method loadPrototype
   * @param {object|string} scenes 对象或者路径
   */
  async loadPrototype() {}

  // #endregion

  // #region 获取gl运行时参数

  /**
   * 获取 gl 对象 （仅提供查询）
   * @memberof App#
   * @method getGLParams
   * @returns {GL} gl运行时对象
   */
  async getGLParameter() {}

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
