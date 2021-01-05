import request from '../../utils/request.js'

export default {
    getKindData() {
        return request({
            method: "GET",
            url: "/category"
        })
    }
}