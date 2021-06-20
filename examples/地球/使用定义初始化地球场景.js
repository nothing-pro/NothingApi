// 创建项目
const earth = new NOTHING.Earth({
  el: '#divId',
  // 不使用 url 的配置方式
  // 预置配置信息
  setting: {
    tile: '', // 瓦片图地址
  },
  definition: {
    // 可选 对应 scenes 里的 parameter
    parameters: {},
    // 可选 自定义加载场景级别 不定义 就只加载 scene 指定的场景
    // 只有一级会直接显示在地球上
    levels: {
       
    },
    // 第一个加载显示的场景
    // scene 可以显示多个 场景 数组表示
    scene: '',
    scenes: {
      'scene-id': {
        // 可选 渲染参数 如果是 nothing 则可以忽略因为 nothing 的场景中 自带渲染参数 这里定义的内容都会被覆盖到加载的场景上
        parameter: '',
        // 需要指定场景所在地球上的位置矩阵
        matrix: [],
      }
    }
  }
});

// 开始运行
earth.start();