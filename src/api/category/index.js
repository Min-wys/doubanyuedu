import request from '../../utils/request.js'

export default {
    // 获取分类类别基础数据
    getKindData() {
        return request({
            method: "GET",
            url: "/category"
        })
    },

    // 获取加入书架数数据
    getCategoryLibData() {
        return request({
            method: "GET",
            url: "/categorylib"
        })
    }
}