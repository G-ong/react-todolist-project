项目说明：
- 本项目为react编写的todolist小demo，包括增、删、勾选完成功能，可在本地浏览器进行存储；
- 没有进行css样式编辑；

运行说明：
- npm install 安装依赖；
- npm run dev 运行项目；
![image](https://github.com/G-ong/react-todolist-project/assets/78802041/30fc4e10-4006-4f09-9725-dcde22961d61)

思路：
1. 组件提取：添加todo部分（包括输入框，添加按钮）、展示todos部分、todos列表中的每一个todo（包括复选框，todo，删除按钮）；
2. 组件引入：todos展示组件中引入每一个todo组件，主页面引入添加todo部分以及展示todos部分；
3. 变量提升：因为组件之间相互关联，同一变量可能在所有组件都有涉及，所以将所有变量及处理函数提升至主页面；
注：
- 可赋予每个todo一个id，方便新增、删除等操作，列表渲染时也需要id作为key；
- 一定要通过 e.preventDefault(); 阻止form提交的默认行为，不然会刷新页面；
