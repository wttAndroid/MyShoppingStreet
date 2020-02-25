import{request} from "./request";

export function getRequestHome() {
    return request({
      url:"/home/multidata"//将请求地址传递去
    })
}

//http://123.207.32.32:8000/api/hy/recommend
export function getRequestHomeGoods(type,params) {
  if(params) {
    return request({
      url:"/api/hy/"+type,//推荐部分
      params
    });
  }else {
    return request({
      url:"/api/hy/"+type,//推荐部分
    });
  }
}


// http://123.207.32.32:8000/api/hy/home/data?page=1&type=sell
  export function getRequestHomeTypeGoods(params) {
    return request({
      url:"/api/hy/home/data",
      params
    })
  }

