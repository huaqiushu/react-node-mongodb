/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';
import NoteItem from './noteItem'


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let notes=this.props.notes,delete_note=this.props.onDeleteNote;
        let noteItem=notes.map(function(obj,index){
            return <NoteItem key={index} note={obj} onDeleteNote={delete_note}/>
        });
        return(
            <div className="notes note-right">
                <h3 className="title">我的笔记</h3>
                {noteItem}
            </div>
            
        )
    }
}