# AI Coffee - 3D咖啡产地地图

这是一个交互式的3D咖啡产地地图应用，使用React、Three.js和React Three Fiber构建。

## 项目介绍

本项目展示了一个三维地球可视化界面，标记了全球主要的咖啡产地。用户可以通过鼠标拖拽旋转地球，滚轮缩放视角，并点击查看各咖啡产地的详细信息。

![3D Coffee Map](docs/screenshot.png)

## 功能特性

- 3D地球可视化展示
- 咖啡产地标记和信息展示
- 鼠标交互（旋转、缩放、点击）
- 响应式设计，适配不同屏幕尺寸
- 模态框显示详细信息

## 技术栈

- React 19
- Three.js
- React Three Fiber
- React Three Drei
- Webpack 5
- CSS3

## 项目结构

```
.
├── docs/              # 构建输出目录
├── web/               # 源代码目录
│   ├── src/           # React源代码
│   ├── public/        # 静态资源
│   └── webpack.config.js  # Webpack配置
└── documents/         # 相关文档
```

## 开发

1. 安装依赖：
   ```bash
   cd web
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm start
   ```

3. 构建项目：
   ```bash
   npm run build
   ```

## 部署

构建后的文件位于`docs`目录，可直接部署到GitHub Pages或其他静态网站托管服务。

## 关于本项目

该项目由作者使用Qwen3-Coder生成，展示了AI在前端开发中的应用能力。

## 许可证

MIT