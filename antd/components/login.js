/**
 * Created by pc on 2017/7/24.
 */
import React from 'react';
import { DatePicker, message , Button, Icon,Rate } from 'antd';
class App extends React.Component {
    render() {
        return (
            <div>登录
               <div style={{borderStyle:'solid',borderWidth:1,borderColor:'red'}}>{this.props.children}</div>
            </div>
        )
    }
}
export {App as default}