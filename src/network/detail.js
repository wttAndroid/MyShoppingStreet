export class GoodsDetail {
  constructor(response) {
    this.titile=response.itemInfo.title;//标题
    this.price=response.itemInfo.lowNowPrice;//价格
    this.oldPrice=response.itemInfo.oldPrice;//原价
    this.discountDesc=response.itemInfo.discountDesc;//优惠
    this.columns=response.columns	;//销量 收藏 快递 ----数组
    this.services=response.shopInfo.services;//服务 ----数组对象.name .icon图标
  }
}

export class GoodsStoreObje{
  constructor(response) {
    this.shopId=response.shopInfo.shopId;//店铺编号
    this.name=response.shopInfo.name;//店铺名称
    this.shopLogo=response.shopInfo.shopLogo;//店铺图标
    this.allGoodsUrl=response.shopInfo.allGoodsUrl;//店铺链接
    this.cSells=response.shopInfo.cSells;//销量
    this.cGoods=response.shopInfo.cGoods;//商品个数
    this.score=response.shopInfo.score;//店铺等级
  }
}

export class GoodsRateObje{
  constructor(response) {
    this.userimg=response.user.avatar;//头像
    this.uname=response.user.uname;//用户名

    this.content=response.content;//内容
    this.extraInfo=response.extraInfo;//配置

    this.images=response.images;//评价图片
  }
}


