/*
 * @Date: 2021-04-15 22:19:24
 * @LastEditors: lisipeng
 * @LastEditTime: 2021-04-15 22:29:47
 */
Function.prototype.before = function(beforefn) {
  var self = this; // 保存原函数的引用
  return function() {
    // 返回包含了原函数和新函数的"代理"函数 function拥有before/after方法
    beforefn.apply(this, arguments); // 执行新函数，修正 this
    return self.apply(this, arguments); // 执行原函数
  };
};
Function.prototype.after = function(afterfn) {
  var self = this;
  return function() {
    // 执行原函数
    var ret = self.apply(this, arguments);
    // 执行after
    afterfn.apply(this, arguments);
    // 返回原函数的返回值
    return ret;
  };
};

let submitOrder = () => {
  console.log('提交订单 原逻辑');
};

// 时间统计函数
const timeLog = fn => {
  let nowTime;
  return fn
    .before(() => {
      nowTime = +new Date();
      console.log('提交订单 开始计时', nowTime);
    })
    .after(() => {
      const spendTime = +new Date() - nowTime;
      console.log('提交订单 耗时计算', spendTime);
      return this;
    });
};

const reportLog = fn => {
  return fn
    .before(() => {
      console.log('提交订单之前 数据上报');
    })
    .after(() => {
      console.log('提交订单之后 再次数据上报');
    });
};

const submitOrderAddTimeLog = timeLog(submitOrder);
console.log(reportLog(submitOrderAddTimeLog));
const submitOrderAddTimeLogAndReportLog = reportLog(submitOrderAddTimeLog);
submitOrderAddTimeLogAndReportLog();
