/**
 * Created by pc on 2017/7/24.
 */
import React from 'react';
import { DatePicker, message , Button, Icon,Rate } from 'antd';
class Test extends React.Component {
    render() {
        return (
            <div>测试
                <div style={{background:"blue"}}>{this.props.children}</div>
            </div>
        )
    }
}
export {Test as default}