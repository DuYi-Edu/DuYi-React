上下文的应用场景

编写一套组件（有多个组件），这些组件之间需要相互配合才能最终完成功能

比如，我们要开发一套表单组件，使用方式如下

```js

render(){
    return (
        <Form onSubmit={datas=>{
            console.log(datas); //获取表单中的所有数据（对象）
            /*
                {
                    loginId:xxxx,
                    loginPwd:xxxx
                }
            */
        }}>
            <div>
               账号： <Form.Input name="loginId" />
            </div>
            <div>
               密码： <Form.Input name="loginPwd" type="password" />
            </div>
            <div>
                <Form.Button>提交</Form.Button>
            </div>
        </Form>
    );
}

```