import React from 'react'
import withRouter from "umi/withRouter"
import { Table, Typography, Button } from "antd"
const { Text } = Typography;
function StudentTable(props) {
    const columns = [
        {
            title: "学号",
            dataIndex: "sNo"
        },
        {
            title: '姓名',
            dataIndex: 'name',
            render(name) {
                return <Text strong>{name}</Text>
            }
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                return sex === 1 ? "女" : "男";
            }
        },
        {
            title: '出生日期',
            dataIndex: 'birth'
        },
        {
            title: '住址',
            dataIndex: 'address'
        },
        {
            title: "操作",
            dataIndex: "id",
            render(id) {
                return <Button type="link"
                    onClick={() => {
                        props.history.push(`/student/${id}`);
                    }}
                >详情</Button>
            }
        }
    ];
    return (
        <Table
            dataSource={props.stus}
            rowKey="id"
            columns={columns}
            pagination={{
                current: props.current,
                total: props.total,
                pageSize: props.pageSize,
                showQuickJumper: true,
                onChange: props.onPageChange
            }}
            loading={props.loading}
        >

        </Table>
    )
}

export default withRouter(StudentTable)