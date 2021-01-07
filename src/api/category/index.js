import request from '../../utils/request.js'

export default {
    // 获取分类类别基础数据
    getKindData(id) {
        return request({
            method: "GET",
            url: `/category?id=${id}`
        })
    },

    // 获取分类类型筛选数据
    getCategoryTypeData() {
        return request({
            method: "GET",
            url: "/categoryType"
        })
    },

}