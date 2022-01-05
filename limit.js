/*
 * @Author: your name
 * @Date: 2022-01-05 20:59:25
 * @LastEditTime: 2022-01-05 21:16:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \input框输入控制封装\limit.js
 */
/**
 * @param  {String} el  需要处理的input框或者textarea的节点
 * @param  {RegExp} reg 要过滤的节点
 */
var isInputHz = false;
function limitInput(el, reg) {
  $(el)
    .off()
    .on('input propertychange', function (ev) {
      if (isInputHz) return false;
      var value = ev.target.value;
      value = value.replace(reg, '');
      $(this).val(value);
    })
    .on('compositionstart', function (ev) {
      //输入中文开始出发之前【只触发一次】
      isInputHz = true;
    })
    .on('compositionend', function (ev) {
      //输入中文玩出【只触发一次】
      isInputHz = false;
      var value = ev.target.value;
      value = value.replace(reg, '');
      $(this).val(value);
    });
}
