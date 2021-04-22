/*
 * @Date: 2021-04-22 23:14:47
 * @LastEditors: lisipeng
 * @LastEditTime: 2021-04-22 23:29:28
 */
const regStraregy = {
  number: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};
const Validator = () => {
  const cache = [];
  const strategies = {
    required: (value, errorMsg) => {
      return value == '' && value !== 0 ? errorMsg : '';
    },
    number: (value, errorMsg) => {
      return regStraregy.number.test(value) ? '' : errorMsg;
    },
    email: (value, errorMsg) => (regStraregy.email.test(value) ? '' : errorMsg),
  };

  const addRules = (data, rules) => {
    Object.keys(rules).map(field => {
      const value = data[field];
      const fieldRules = rules[field].length ? rules[field] : [rules[field]];

      fieldRules.map(rule => {
        const type = rule.required ? 'required' : rule['type'];
        const errorMsg = rule.message;
        const strategy = strategies[type];
        cache.push(() => {
          return strategy(value, errorMsg);
        });
      });
    });
  };
  const validateFields = () => {
    for (var i = 0, validatorFunc; (validatorFunc = cache[i++]); ) {
      var errorMsg = validatorFunc();
      if (errorMsg) {
        return errorMsg;
      }
    }
  };
  return {
    addRules,
    validateFields,
  };
};

const rules = {
  name: {
    required: true,
    message: '姓名必填哦!',
  },
  email: [
    {
      required: true,
      message: '邮箱必填哦!',
    },
    {
      type: 'email',
      message: '请输入正确的邮箱格式!',
    },
  ],
  number: [
    {
      required: true,
      message: '数字必填哦',
    },
    {
      type: 'number',
      message: '必须是数字类型!',
    },
  ],
};

const data = {
  name: '3',
  email: '3@qq.com',
  number: 0,
};

const validateInstance = Validator();
validateInstance.addRules(data, rules);
const errorMsg = validateInstance.validateFields();
if (errorMsg) {
  console.log(errorMsg);
} else {
  console.log('验证通过');
}
