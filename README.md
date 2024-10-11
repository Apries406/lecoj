# LEC Online Judge FE

> Lec oj(fe) 是由 HOJ 改造而来的

## What we do

1. 将 `vue2` 前端项目迁移转变为 `react18` 前端项目
2. 优化代码结构，提升代码质量
3. 当前技术选型决策：
  - `react18`
  - `zustand`
  - `less`
4. 愿景: 同步支持 `HOJ` 所有功能， 同时拓展 lec 独有功能 


## Start

```bash
# 拉取项目 
git clone https://github.com/Apries406/lecoj.git

# 安装依赖
cd lecoj

# only pnpm
pnpm i

# 启动项目
pnpm dev
```

## 拓展设计

- 代码求助页：
  可以将代码提交到该页面，复制链接发送即可查看保存状态（每段代码保存 30 分钟）

## 路由设计
- 首页：
  展示 「公告」， 「今日签到」， 「热力图（签到/提交）」，「每日一题」，「最近10题」
- 题目列表
- 题单列表
- 排名
- 讨论
- 团队
- 个人页面
