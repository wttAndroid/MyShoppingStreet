import axios from 'axios'

export function request(config){
      const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',//数据请求地址
        timeout:5000
      })

      //拦截器将数据返回
    instance.interceptors.request.use(config=>{
      return config;
    },error => {
      return error;
    });

      instance.interceptors.response.use(config=>{
        return config
      },error=>{
        return error;
      });


      return instance(config);//发送
}
