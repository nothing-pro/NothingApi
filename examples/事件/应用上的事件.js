// 创建项目
const app = new NOTHING.App();

const NEM = NOTHING.EVENT_MANAGER;
const scene = app.getScene('scene-id');

// 场景加载完成时 需要的事件
NEM.on(scene, NOTHING.LOADED, () => {
  console.log('场景加载完成');
});

// 切换场景前 调用的方法
NEM.on.on(app, NOTHING.BEFORE_LEVEL, (fromLevel, toLevels) => {
  // 返回 需要显示的 场景id 默认返回第一个
  const level = toLevels[0];
  // 转场时使用的效果 和 持续时间(默认1s)
  level.useEffect('default', 1.0);
  return level;
});

// 场景单击事件
NEM.on(scene, NOTHING.CLICK, (node) => {
  console.log(node.getName());
});


// 开始运行
app.start();