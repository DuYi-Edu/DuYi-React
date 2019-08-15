/**
 * 创建一个history api的history对象
 * @param {*} options 
 */
export default function createBrowserHistory(options = {}) {
    const {
        basename = "",
        forceRefresh = false,
        keyLength = 6,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options;

    function go(step) {
        window.history.go(step);
    }
    function goBack() {
        window.history.back();
    }
    function goForward() {
        window.history.forward();
    }

    /**
     * 向地址栈中加入一个新的地址
     * @param {*} path 新的地址，可以是字符串，也可以是对象
     * @param {*} state 附加的状态数据，如果第一个参数是对象，该参数无效
     */
    function push(path, state) {
        const pathInfo = handlePathAndState(path, state, basename);
        //改变action
        history.action = "PUSH";
        window.history.pushState({
            key: createKey(keyLength),
            state: pathInfo.state
        }, null, pathInfo.path);
        if (forceRefresh) {
            //强制刷新
            window.location.href = pathInfo.path;
        }
    }
    
    const history = {
        action: "POP",
        length: window.history.length,
        go,
        goBack,
        goForward,
        push,
        location: createLocation(basename)
    };
    //返回history对象
    return history;
}

/**
 * 根据path和state，得到一个统一的对象格式
 * @param {*} path 
 * @param {*} state 
 */
function handlePathAndState(path, state, basename) {
    if (typeof path === "string") {
        return {
            path,
            state
        }
    }
    else if (typeof path === "object") {
        let pathResult = basename + path.pathname;
        let { search = "", hash = "" } = path;
        if (search.charAt(0) !== "?") {
            search = "?" + search;
        }
        if (hash.charAt(0) !== "#") {
            hash = "#" + hash;
        }
        pathResult += search;
        pathResult += hash;
        return {
            path: pathResult,
            state: path.state
        }
    }
    else {
        throw new TypeError("path must be string or object");
    }
}

/**
 * 创建一个location对象
 */
function createLocation(basename = "") {
    // window.location 
    let pathname = window.location.pathname;
    //处理basename的情况
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    const location = {
        hash: window.location.hash,
        search: window.location.search,
        pathname
    };
    //处理state
    let state, historyState = window.history.state;
    if (historyState === null) {
        state = undefined;
    }
    else if (typeof historyState !== "object") {
        state = historyState;
    }
    else {
        if ("key" in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        }
        else {
            state = historyState;
        }
    }
    location.state = state;
    return location;
}

/**
 * 产生一个指定长度的随机字符串，随机字符串中可以包含数字和字母
 * @param {*} keyLength 
 */
function createKey(keyLength) {
    return Math.random().toString(36).substr(2, keyLength);
}

window.myHistory = createBrowserHistory({
    basename: "/news",
    forceRefresh: false
});