/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        var date=this.props.note.date;
        this.props.onDeleteNote(date)
    }
    render(){
        return(
            <div className="note-item">
                <p className="item-title"><span>{this.props.note.title}</span><button onClick={()=>this.handleClick()}>删除笔记</button></p>
                <p className="item-info"><span>{this.props.note.description}</span><i>{this.props.note.date}</i></p>
            </div>
            
        )
    }
}