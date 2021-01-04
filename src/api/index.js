// 发送请求的话，要自己新建一个文件夹，进行发送请求，不要修改这个文件
const context = require.context(".", true, /\.js$/);

const api = context
  .keys()
  .map((modulePath) => {
    const names = modulePath.split("/");
    let moduleName = names[2] && names[2].slice(0, -3); // login index undefined
    if (moduleName) {
      moduleName = moduleName === "index" ? names[1] : moduleName;
    }
    return {
      modulePath,
      moduleName,
    };
  })
  .filter((module) => module.moduleName)
  .reduce((modules, module) => {
    modules[module.moduleName] = context(module.modulePath).default;
    return modules;
  }, {});

// console.log(api);

export default api;
