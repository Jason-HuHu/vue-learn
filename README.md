# VUE入门学习

## 环境准备

- 安装Node

  ```shell
  # 查看node版本
  node --version
  ```

- 安装npm

  ```sh
  # 查看npm版本
  npm --version
  # 查看镜像库
  npm get registry
  # 切换镜像库
  npm config set registry http://registry.npm.taobao.org/
  # 或者可以安装cnpm
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  
  ```

- 安装webpack

  ```sh
  # 安装
  npm install -g webpack
  # 查看是否安装成功
  webpack -v
  
  ```

- 安装vue-cli

  ```sh
  npm install -global vue-cli
  # 查看安装的版本
  vue -V
  ```

## 初始化项目 