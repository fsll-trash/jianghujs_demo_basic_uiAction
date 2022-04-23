# jianghujs_demo_basic

## 配置

1. npm install
2. 复制 `config.local.example.js` 为 `config.local.js`
3. 并且修改数据库配置为自己的数据库, 例如：
   ```
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: '123456',
   database: 'jianghujs_demo_basic'
   ```
4. 启动 npm run dev

## 数据库

```sql
# 数据库初始化
create database `jianghujs_demo_basic` default character set utf8mb4 collate utf8mb4_bin;
use jianghujs_demo_basic;
# 运行 sql/init.sql 文件
```

## 测试账号 & 测试环境

- admin/123456

## 页面

1. 应用协议: studentManagement01.html
   * 增删改查（select，insert，softUpdate，softDelete）
2. 前端对接: studentManagement03.html
3. 前端优化: studentManagement04.html
4. 服务端搜索: studentManagement05.html
   * 应用协议：sql演示

## FAQ

- egg-jianghu mysql view
```sql
DROP VIEW IF EXISTS `_view01_user`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `_view01_user` AS select * from `_user`;
```
