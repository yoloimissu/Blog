微信小程序原始默认样式如下：

单选框：



多选框：



更改后样式：

单选框：



多选框：

 

wxss代码：



```css
// radio样式
radio .wx-radio-input {
  width: 30rpx;
  height: 30rpx;
  border: 2rpx solid #b3b3b3;// 外圈边框，未选中状态默认灰色
  border-radius: 50%;
  background: none;
}
//radio选中后内部样式
radio .wx-radio-input.wx-radio-input-checked {
  border: 2rpx solid #15e0a2 !important;// 选中状态外圈边框颜色
  background-color: white !important;// 外圈边框与内圈实心圆间的内容的颜色，默认上边的绿色
}
//radio选中后内部中心
radio .wx-radio-input.wx-radio-input-checked::before {
  width: 60%;
  height: 60%;
  background: #15e0a2;// 内圈实心圆选中颜色
  border-radius: 50%;
  content: '';// 隐藏✔️
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
//checkbox 选项框大小  
checkbox .wx-checkbox-input {
  width: 30rpx;
  height: 30rpx;
}
//checkbox选中后样式  
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  background: #15e0a2;
  border: 1rpx solid #15e0a2 !important; //选中后多选框边框颜色
}
//checkbox选中后图标样式  
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  width: 28rpx;
  height: 28rpx;
  line-height: 28rpx;
  text-align: center;
  font-size: 22rpx;
  color: #fff;
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
```

# 小程序checkbox调整大小

.cb{  transform: scale(0.6,0.6); }



多选单勋框如果点击是上下抖动可能是因为高度原因



微信小程序\文本框\失去\对焦触发\事件

bindinput：输入一个字节一触发
bindblur：离开文本框时出发
