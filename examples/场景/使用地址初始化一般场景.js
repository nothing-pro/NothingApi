// 创建项目
const app = new NOTHING.App({
  el: '#divId',
  // 优先级最高 应用描述
  urls: '项目加载的地址',
});

// 开始运行
app.start();

// =====

const app = new NOTHING.App("#canvas");

const ctx = app.getContext("3d", { });
await ctx.load('');

const node = ctx.query('#1');
node.setPosition([1, 1, 1]);

ctx.render();



