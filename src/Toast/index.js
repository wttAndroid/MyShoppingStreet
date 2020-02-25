import Toast from "./Toast";

const obj={}

obj.install=function (Vue) {
  //创建组件构造去
  const ToastConstruction=Vue.extend(Toast);
  //创建组件对象
  const toast=new ToastConstruction();
  //挂载
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  //原型上添加土司
  Vue.prototype.$toast=toast;
}

export default obj
