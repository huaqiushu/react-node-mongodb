/**
 * Created by Administrator on 2017/11/16/016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NoteAdd from '../components/noteAdd'
import NoteList from '../components/noteList'
import Test from '../components/test'


class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.initNotes();
    }
    onAddNote(newNote){
        this.props.actions.addNote(newNote);
    }
    onDeleteNote(deleteNote){
        var delete_date={
            date : deleteNote
        };
        this.props.actions.deleteNote(delete_date);
    }

    render(){
        const { notes } = this.props;
        return(
            <div className="container">
                <h1 className="header">记事本</h1>
                <NoteAdd onAddNote={(newNote)=>this.onAddNote(newNote)}/>
                <NoteList notes={notes} onDeleteNote={(deleteNote)=>{this.onDeleteNote(deleteNote)}}/>
            </div>
        );
    }
}

App.propTypes = {
    notes : PropTypes.arrayOf(
        PropTypes.shape({
            title : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            date : PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

//为actions里面的函数绑定dispatch，直接调用this.props.actions.xxx()，即等同于没绑定情况下this.props.dispatch(xxx())
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
    return{
        notes : state.notes
    }
};
//mapDispatchToProps为第二个参数
export default connect(mapStateToProps,mapDispatchToProps)(App)