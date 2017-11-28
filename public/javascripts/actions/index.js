/**
 * Created by Administrator on 2017/11/20/020.
 */
import * as utils from "../base/utils";

export const INIT_NOTES = "INIT_NOTES";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export function initNotes(){
    return (dispatch) => {
        utils.ajaxGet('/getNotes',function(data){
            console.log(data);
            dispatch({ type : INIT_NOTES, notes : data});
        });
        //     .then( data =>{
        //     // if(data.code==1){
        //         dispatch({ type : INIT_NOTES, notes : data});
        //     // }
        // });
    }
}
export function addNote(newNote){
    return (dispatch) => {
        utils.ajaxPost('/addNote','post',newNote,function(data){
            console.log(data);
            dispatch({ type : ADD_NOTE, notes : data });
        });
        //     .then( data =>{
        //     // if(data.code==1){
        //     console.log(data);
        //         dispatch({ type : ADD_NOTE, notes : data });
        //     // }
        // });
    }
}
export function deleteNote(deleteNote){
    return (dispatch) => {
        utils.ajaxPost('/deleteNote','post',deleteNote,function(data){
            // if(data.code==1){
                dispatch({ type : DELETE_NOTE, notes : data });
            // }
        });
    }
}
