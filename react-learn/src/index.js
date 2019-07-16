import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from "./MyFuncComp";
import MyClassComp from "./MyClassComp";

const comp = <MyFuncComp number={3}/>; //使用组件，生成的，仍然是一个React元素，变化的，只是type值

console.log(comp);

const div = <div title="Asdfa"></div>

console.log(div);

// const comp = <MyClassComp/>;
// console.log(comp);

ReactDOM.render(<div>
    {/* {comp} */}
    <MyFuncComp number="2" />
    <MyFuncComp number={5} />
    <MyFuncComp number={6} />
    <MyFuncComp number={7} />
    <MyClassComp number="2" ennable />
    <MyClassComp number={5} obj={{
        name: "成哥",
        age: 100
    }}/>
    <MyClassComp number={6}  ui={<h2>这是我传递属性</h2>}/>
    <MyClassComp number={7} />
</div>, document.getElementById('root'));
