export default class CameraController {
  /**
   * @classdesc
   * 相机控制对象
   * 
   * 不建议直接构造 会在app对象创建的时候自动生成
   * 
   * @constructor CameraController
   * @author Zhoyq <feedback@zhoyq.com>
   * @since 2021-01-10
   * @param {App} app 应用程序对象
   */
  constructor(app) {}

  /**
   * 调整场景相机到合适的位置
   * @memberof Camera#
   * @method fit
   * @param {Scene} scene options 场景对象
   */
  fit(scene) {}

  /**
   * 飞到某个位置
   * @memberof Camera#
   * @method flyTo
   * @param {Array} point options 场景对象 默认 [0, 0, 0]
   */
  flyTo(point) {}

  /**
   * 绕着一个点旋转
   * @memberof Camera#
   * @method rotateAround
   * @param {Array} point options 场景对象 默认 [0, 0, 0]
   */
  rotateAround(point) {}
}
