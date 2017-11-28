/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        var title=this.refs.title.value;
        var describe=this.refs.description.value;
        console.log(title);
        
        if(title=='') return;
        if(describe=='') return;
        
        var date=new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        this.props.onAddNote({title:title,description:describe,date:date});
        
        this.refs.title.value='';
        this.refs.description.value='';
        
    }
    render(){
        return(
            <div className="notes note-left">
                <form action="#" onSubmit={()=>this.handleClick()}>
                    <h3 className="title">添加笔记</h3>
                    <input type="text" ref="title" placeholder="标题"/>
                    <textarea type="text" ref="description" placeholder="内容"></textarea>
                    <p className="add-p"><button type="submit">添加</button></p>
                </form>

            </div>
            
        )
    }
}