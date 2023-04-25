import KRequest from '@/service/request/index'

export function getDetailInfos(houseId) {
    return KRequest.get({
        url: "/detail/infos",
        params: {
            houseId
        } 
    })
}