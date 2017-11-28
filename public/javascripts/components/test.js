/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>{this.props.message}</div>
                <div>{this.props.message}jj</div>
            </div>
            
        )
    }
}