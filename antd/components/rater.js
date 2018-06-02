/**
 * Created by pc on 2017/7/21.
 */
import {Rate} from 'antd';
import React from 'react';
class Rater extends React.Component{
    constructor(props){
        super(props);
        this.state={star:0};

    }
    handleChange (value){
        console.log(value,this.state)
        this.setState({star:value});
    }
    render(){
        return (
            <span>
                <Rate allowHalf onChange={this.handleChange.bind(this)} value={this.state.star} />
                        {this.state.star && <span className="ant-rate-text">{this.state.star} stars</span>}
              </span>
        )


    }
}

export  {Rater as default};