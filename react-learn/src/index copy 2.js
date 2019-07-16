import React from 'react';
import ReactDOM from 'react-dom';

const a = 1234, b = 4321;

// const obj = {
//     a: 1,
//     b: 2
// }

const obj = <span>这是一个span元素</span>;

const arr = [2, null, false, undefined, 3];

const numbers = new Array(30);
numbers.fill(0);
var lis = numbers.map((item, i) => (<li key={i}>{i}</li>));

const div = (
    <div>
        {a} * {b} = {a * b}
        <p>
            {/* 以下不会产生任何输出 */}
            {null}
            {undefined}
            {false}
        </p>
        <p>
            {/* 普通对象无法放置 */}
            {/* {obj} */}
        </p>
        <p>
            {/* React元素对象没问题 */}
            {obj}
        </p>

        <p>
            {arr}
        </p>

        <ul>
            {lis}
        </ul>
    </div>
);

console.log(div);

// const div = React.createElement("div", {}, `${a} * ${b} = ${a*b}`)

ReactDOM.render(div, document.getElementById("root"));