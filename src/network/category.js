import {request} from "./request";

export function getCategoryList() {
      return request({
        url:'/api/hy/category'
      })
}


export function getCategoryListItemiList(maitKey) {
  return request({
    url:'/api/hy/subcategory',
    params:{
      maitKey
    }
  })
}

// http://123.207.32.32:8000/api/hy/subcategory/detail?miniWallkey=10062603&&type=pop
  export function getCategoryItemiListGoods(miniWallkey,type) {
    return request({
      url:'/api/hy/subcategory/detail',
      params:{
        miniWallkey,
        type
      }
    })
  }
