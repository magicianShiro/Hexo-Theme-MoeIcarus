/**
  * Thumbnail Helper
  * @description Get the thumbnail url from a post
  * @example
  * <%- thumbnail(post) %>
*/
const path = require('path')
/* global hexo */
hexo.extend.helper.register('thumbnail', function (post) {
  // 给hexo拓展方法
  // 此处post即为page 从外部传入
  target = post.thumbnail || post.banner || ''
  // 判断banner图片是否是网络图片，如果是网络图片直接使用否者加上根路径
  if (post.banner) {
    let rootPath = this.url_for(post.path).split('.')[0]
    let lostChar = rootPath.slice(-1)
    banner = lostChar === '/' ? rootPath + target : rootPath + '/' +target
    if (target.indexOf('http') > 0 || /^\/\//.test(target)) {
      banner = target
    }
    return banner
  }
  return target
})
