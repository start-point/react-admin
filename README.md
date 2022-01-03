### react-admin-umi 文件夹(前端)

启动该项目前: 先安装该仓库的项目 https://github.com/start-point/react-admin-koa2

🎉安装依赖

(注: 如果安装后 运行 出现错误 可能就是包依赖没有下载完全 你可以通过npm i 去安装一下 )

```bash
$ yarn
```

🎉项目启动

```bash
$ yarn start
```

## 项目结构

```s
|-- config      -- 配置
    |-- config     -- 路由配置
    |-- routes   -- 路由
    |-- defaultSettings.ts  -- 默认主题(layout)配置
|-- mock            -- 模拟数据
|-- src
	|-- components  -- 公用组件存放
    |-- pages       -- 页面存放
    |-- services    -- 请求接口存放
    |-- utils       -- 工具类
   	|-- api.d.ts    -- ts类型 声明存放
    |-- app.tsx     -- 入口
    |-- global.less -- 全局样式
```







