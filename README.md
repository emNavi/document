# emNavi 文档构建说明

[![Documentation Status](https://readthedocs.org/projects/x152b/badge/?version=latest)](https://x152b.readthedocs.io/en/latest/?badge=latest)

emNavi 文档地址：[https://emnavi.tech](https://emnavi.tech)

## 1、下载项目
``` bash
git clone https://github.com/emNavi/document.git
```

## 2、配置 Vue 环境

```bash
# 进入文档目录下
pnpm i
```

## 3、进行文档内容的修改

## 4、查看更新后的文档结果

```bash
# 会生成本地连接，可本地浏览器查看更新后的效果
pnpm docs:dev
```

## 开发须知

图像、视频资源，可以放在网络服务器或者 `.vuepress/public` 目录下进行本地索引。

图标可使用 https://icon-sets.iconify.design/noto/
无需署名，可商业使用。

## 文档构建格式参考
- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)