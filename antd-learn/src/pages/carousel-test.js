import React, { useRef } from 'react'
import { Carousel, Button } from "antd"
import { getBanners } from "../services/banner"

const banners = getBanners();

export default function CarouselTest() {
    const nodes = banners.map(b => (<div key={b.id}>
        <a href={b.link}>
            <img style={{
                width: 500
            }} src={b.imgUrl} alt="" />
        </a>
    </div>))
    const cref = useRef();
    return (
        <div style={{ width: 500 }}>
            <Carousel ref={cref}>
                {nodes}
            </Carousel>
            <Button onClick={() => {
                cref.current.prev();
            }}>前一张</Button>
            <Button onClick={() => {
                cref.current.next();
            }}>后一张</Button>
        </div>

    )
}
