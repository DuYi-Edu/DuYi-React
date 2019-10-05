import React, { useState, useEffect } from 'react'
import { Cascader, Button } from "antd"
import { getArea } from "../services/location"


export default function CascadeTest() {
    const [options, setOptions] = useState([])
    const [choose, setChoose] = useState([])
    useEffect(() => {
        getArea().then(resp => {
            const provinces = resp.map(it => ({
                value: it.id,
                label: it.simpleName,
                isLeaf: false
            }))
            setOptions(provinces);
        })
    }, [])
    return (
        <div>
            <Cascader
                value={choose}
                onChange={newValue => {
                    setChoose(newValue);
                }}
                loadData={selectedOptions => {
                    //取出数组的最后一项
                    const opt = selectedOptions[selectedOptions.length - 1];
                    const parentId = opt.value;
                    opt.loading = true;
                    getArea(parentId).then(resp => {
                        opt.loading = false;
                        opt.children = resp.map(it => ({
                            value: it.id,
                            label: it.simpleName,
                            isLeaf: selectedOptions.length === 3
                        }))
                        setOptions([...options]); //触发React的重新渲染
                    })
                }}
                options={options}
            />
            <Button type="primary" onClick={() => {
                console.log(choose)
            }}>获取选中的值</Button>
        </div>
    )
}
