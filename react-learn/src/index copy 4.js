import React from 'react';
import ReactDOM from 'react-dom';

const content = "<h1>afasfasfd</h1><p>阿斯顿法定发送</p>";
const div = (
    <div dangerouslySetInnerHTML={{
        __html: content
    }}>
    </div>
);

ReactDOM.render(div, document.getElementById("root"));