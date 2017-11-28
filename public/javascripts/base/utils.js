/**
 * Created by Administrator on 2017/11/20/020.
 */
import $ from "../base/jquery.min.js";

export function ajaxGet(url,callback) {
    // const URL=BASIC_URL+api;
    // $.support.cors = true;
    $.ajax({
            url : url,
            dataType: 'json',
            type : 'get',
            contentType: 'application/json; charset=UTF-8;',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function(data){
                callback(data);
            },
            error:function(data){
                callback(data)
            }
    });
}
        

export function ajaxPost(url,type,data,callback) {
    // const URL=BASIC_URL+api;
    // $.support.cors = true;
    $.ajax({
        url : url,
        dataType: 'json',
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        type : type,
        data : data,
        xhrFields: {
            withCredentials: true //带cookie
        },
        crossDomain: true, //允许跨域
        success:function(data){
            callback(data);
        },
        error:function(data){
            console.log('err:',data);
            // callback(data);
        }
    });
        
}