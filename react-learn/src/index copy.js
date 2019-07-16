import React from 'react';
import ReactDOM from 'react-dom';

// const h1 = (
//     <>
//         <h1>Hello World <span>span元素</span></h1>
//         <p>asdfafdafd</p>
//     </>
// )

// console.log(h1);

// React.createElement("h1", {}, "Hello World", React.createElement("span",
//     {},
//     "span元素"
// ))

// ReactDOM.render(h1, document.getElementById('root'));

const img = (
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg" alt=""/>
);

ReactDOM.render(img, document.getElementById('root'));