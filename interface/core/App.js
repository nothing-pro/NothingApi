export default class App {
  /**
   * @classdesc
   * 应用程序类，用于创建应用程序。
   * 
   * **主要功能**
   * 
   * - 构造函数
   * - 对象
   * - 扩展
   * - 加载
   * - 查询
   * 
   * **实例**
   * 
   * ```js
   * // 创建应用程序
   * // 注：NT 是 NOTHING 的简写
   *
   * const app = new NT.App();
   * 
   * // 加载模型文件
   * 
   * const node = await app.load('/path/to/node');
   * 
   * // 事件挂载
   * // 注：E 是 EVENT 的简写
   * 
   * NT.E.on(NT.CLICK, function(event) {});
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
   * ```json
   * {
   *   el: '<selector>',
   *   definition: {
   *     scene: '<sceneId>',
   *     parameters: {
   *       '<paramterId>': {}
   *     },
   *     levels：{
   *       '<levelId>': {
   *         name: '',
   *         showType: '',
   *         location: '<nodeId>',
   *         nodes: ['<nodeId>'],
   *         children: ['<subLevelId>'],
   *       },
   *     },
   *     scenes: {
   *       '<sceneId>': {
   *          parameter: '<parameterId>'
   *        }
   *     }
   *   },
   *   urls：'',
   *   setting: {
   *     levelShowType: '',
   *     dynamicLoad: false,
   *   }
   * }
   * ```
   * 
   * - el 指的是挂载对象。
   * - selector 可以是选择器，同时还支持 HTMLDivElement 对象。
   * - definition 是 context 定义 在没有定义 urls 的时候，会按照 definition 初始化，存在 urls 的时候会将 definition 中定义的内容覆盖到 urls 获取的内容中。
   * - definition 的详细定义可以参照 Context 对象。
   * - urls 可以是字符串或者数组，内容是url，用于获取相关数据。
   * - setting 是全局配置，关乎应用整体的相应以及动作。
   */
  constructor(options) {}

  // #region 开始
  /**
   * **启动应用程序渲染**
   * 
   * @memberof App#
   * @method start
   */
  async start() {}
  // #endregion

  // #region 对象

  /**
   * **获取全局配置**
   * 
   * ```json
   * {
   *   levelShowType: 'single', // transparent
   *   dynamicLoad: false,
   * }
   * ```
   * 
   * - levelShowType 全局级别显示设置 single 单独显示子级别 或者 transparent 将其他物体透明并突出显示子级别 
   * - dynamicLoad 动态加载开关
   * @memberof App#
   * @method getSetting
   * @returns {Map} 配置
   */
  async getSetting() {}

  /**
   * **获取上下文内容**
   * 
   * @memberof App#
   * @method getContext
   * @returns {Context} 上下文
   */
  async getContext() {}

  /**
   * **获取相机控制器**
   * 
   * @memberof App#
   * @method getCameraController
   * @returns {CameraController} 相机控制器
   */
  async getCameraController() {}

   /**
   * **获取 GL 对象的只读封装**
   * 
   * @memberof App#
   * @method getGL
   * @returns {GL} GL 对象的只读封装
   */
    async getGL() {}

  // #endregion
  
  // #region 扩展

  /**
   * **添加扩展**
   * 
   * @memberof App#
   * @method use
   * @param {Map} extensions 扩展存储Map对象
   */
  async use(extensions) {}

  // #endregion

  // #region 加载

  /**
   * **加载并添加到上下文中进行渲染**
   * 
   * 可以加载链接或者完整对象
   * 
   * @memberof App#
   * @method load
   * @param {array|string} urls 加载路径或者其数组
   */
  async load(urls) {}
  
  /**
   * **加载数据**
   * 
   * 下载模型作为原型使用 并不加载到场景
   *
   * @memberof App#
   * @method loadPrototype
   * @param {array|string} urls 加载路径或者其数组
   * @returns {Node} node 节点
   */
  async loadPrototype(urls) {}

  // #endregion

  // #region 查询

  /**
   * **查询相关节点**
   * 
   * ```js
   * // 查询多个ID
   * 
   * const list = app.query([{id: 'id1'}, {id: 'id2'}]);
   * 
   * // 使用正则匹配
   * 
   * const list = app.query([{id: /^id\d{1, 1}&'/}]);
   * ```
   * 
   * @memberof App#
   * @method query
   * @param {array} params 查询参数
   * @returns {Array} 符合条件的node节点
   */
  async query(params) {}

  // #endregion
}
