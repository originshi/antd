/**
 * Created by pc on 2017/7/24.
 */
import React from 'react';
import { DatePicker, message , Button, Icon,Rate } from 'antd';
import add from "../src/img/add.png"
import fetch from 'isomorphic-fetch';
class Welcome extends React.Component {
    componentDidMount ()  {
        fetch('./data/a.json')
            .then(res => res.json())
            .then(data=> {console.log(data,1)})
    }
    render() {
        return (
            <div>欢迎
               <div style={{background:'yellow'}}>{this.props.params.id}</div>
                <img src={add} alt=""/>
            </div>
        )
    }
}
export {Welcome as default}
