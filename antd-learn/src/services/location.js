export async function getArea(parentId = null) {
    var url = "/api/local";
    if (parentId) {
        url += "?parentId=" + parentId
    }
    const resp = await fetch(url).then(resp => resp.json())
    return resp;
}