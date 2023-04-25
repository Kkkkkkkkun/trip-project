import KRequest from "@/service/request/index"

export function getHomeHotSuggests() {
    return KRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategories() {
    return KRequest.get({
        url: "/home/categories"
    })
}

export function getHouselist(currentPage = 1) {
    return KRequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage
        }
    })
}