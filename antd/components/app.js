/**
 * Created by pc on 2017/7/24.
 */
import React from 'react';
import { Router, Route, Link,hashHistory ,browserHistory ,history } from 'react-router'
import { DatePicker, message , Button, Icon,Rate } from 'antd';
import Rater from "./rater"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    linkTo(){
        //browserHistory.push("/#/test/welcome");
        this.props.history.pushState(null, '/test/welcome/1')
      // context.router.push( '/test/welcome/1')
    }
    linkTo1(){
        //browserHistory.push("/#/test/welcome");
        this.props.history.pushState(null, '/test')
    }
    linkTo2(n){
        //browserHistory.push("/#/test/welcome");
       console.log(n);
    }

    render() {
        return (
            <div style={{ width: 'auto', margin: '100px auto',padding:'10px' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <div>
                    <Icon type="step-backward" />
                    <Icon type="up" />

                </div>
                <div>
                    <Rate allowHalf defaultValue={2.5} />
                    <Rater />
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className="haha">
                    <h1>控制路由</h1>
                    <div className="aa" onClick={this.linkTo.bind(this)}>转向/test/welcome/1</div>
                    <div onClick={this.linkTo1.bind(this)}>转向/test</div>
                    <div onClick={this.linkTo2(2)}>打印2</div>
                </div>
            </div>
        );
    }
}
export {App as default}