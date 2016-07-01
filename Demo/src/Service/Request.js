/***
 * 封装 get post 请求
 */
// get

export default{

    get: (url, param, callback)=> {

       fetch(get_url(url,param),{method:'Get'})
           .then((response)=>response.text())
               .then((responseText)=>{
            callback(JSON.parse(responseText));
        }).catch((err)=>{
           callback(err);
       });

    },

}
let get_url= (url, param)=> {
    param = param || {};
    var param_str = '';
    if (param) {
        for(var key in param){
            param_str += key + '=' + encodeURI(param[key]) + '&';
        }
        if(url.indexOf('?') >= 0){
            url += param_str;
        }
        url = url + '?' + param_str;
        console.log(url);
        return url;
    }

}