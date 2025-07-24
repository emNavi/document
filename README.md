# emNavi 文档构建说明

[![pages-build-deployment](https://github.com/emNavi/document/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master&event=page_build)](https://github.com/emNavi/document/actions/workflows/pages/pages-build-deployment)
emNavi 文档地址：[https://emnavi.tech](https://emnavi.tech)

## 1、下载项目
``` bash
git clone https://github.com/emNavi/document.git
```

## 2、配置 Vue 环境

```bash
# 在 Ubuntu Linux 上手动添加官方 Node.js 存储库长期稳定版 LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# 安装 Nodejs Javascript
sudo apt-get install -y nodejs

# 安装 PNPM
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc

# 检查安装是否完成（查看版本号）
pnpm --version

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
