# NothingJs 三维应用程序二次开发接口

本仓库用于定义 NothingJs 三维应用程序接口。

## 命令

```bash
# 安装依赖
npm install -g tyarn --registry https://registry.npm.taobao.org
tyarn --registry https://registry.npm.taobao.org
# 生成文档
tyarn doc
```

## 目录

- core 核心能力
 - App 应用程序本身
 - Renderer + Pass 渲染器 使用 piplines 定义渲染管线 对应 pass 
 - Inputs + XXXInput 输入封装
 - Events + Event 事件封装
 - Context 上下文封装 包含所有定义上下文 并不是同时出现
 - WebWorker + Actions 封装
 - GL 封装
 - 数学工具
 - 网络工具
 - 其他工具

```json
// pipline 定义三种 function mainloop posteffect 
{
    "piplines": {
        "beforePreZ": {
            "type": "function",
            "order": 0
        },
        "preZ": {
            "type": "mainloop",
            "order": 1,
            "depth": true,
        },
        "pbr": {
            "type": "mainloop",
            "order": 2
        },
        // ....
    }
}
```

- 2d 二维
 - NothingRenderingContext2D = app.getContext('2d')
 - 剩下的 api 参考 canvas 2D
 - 或者 pixi

- postEffect 图片后期
 - NothingRenderingContextPostEffect = app.getContext('posteffect')
 - 

- 3d 三维
 - NothingRenderingContext3D = app.getContext('3d')
 - 

- panoramic 全景
 - NothingRenderingContextPanoramic = app.getContext('panoramic')

- plant 小行星
 - NothingRenderingContextPlant = app.getContext('plant')

- bim 建筑信息管理
 - NothingRenderingContextBIM = app.getContext('bim')

- gis 地理信息系通
 - NothingRenderingContextGIS = app.getContext('gis')

- earth 地球
 - NothingRenderingContextEarth = app.getContext('earth')

## 文档

- [结构说明](https://github.com/nothing-pro/NothingApi/blob/main/markdown/structures.md)

## 帮助

- [首版API规划讨论](https://github.com/nothing-pro/NothingApi/issues/1)
