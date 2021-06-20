// 创建项目
const app = new NOTHING.App({
  el: '#divId',
  // 加载上下文地址
  urls: [''],
  // 预置配置信息
  setting: {
    // 可以设置预加载场景 或者 动态在显示场景时 才加载场景
    dynamicLoad: false,
  },
  // 会覆盖 urls 下载的上下文
  definition: {
    // 可选 对应 scenes 里的 parameter
    parameters: {},
    // 可选 自定义加载场景级别 不定义 就只加载 scene 指定的场景
    levels: {
      'levelId': {

      }
    },
    // 第一个加载显示的场景
    scene: '',
    scenes: {
      'scene-id': {
        // 可选 渲染参数 如果是 nothing 则可以忽略因为 nothing 的场景中 自带渲染参数 这里定义的内容都会被覆盖到加载的场景上
        parameter: ''
      }
    }
  }
});

// 开始运行
app.start();