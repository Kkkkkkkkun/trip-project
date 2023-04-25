import KRequest from "../request"
export function getCityAll() {
  return KRequest.get({
    url: "/city/all"
  })
}