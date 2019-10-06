import path1 from "../assets/1.jpg"
import path2 from "../assets/2.jpg"
import path3 from "../assets/3.jpg"

export function getBanners() {
    return [
        { id: 1, link: path1, imgUrl: path1 },
        { id: 2, link: path2, imgUrl: path2 },
        { id: 3, link: path3, imgUrl: path3 },
    ]
}