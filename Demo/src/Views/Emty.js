

import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text

} from 'react-native'
import BaseAPI from '../common/util'
import Requset from '../Service/Request'
export default class Emty extends Component{

    _onPress = ()=>{
        Requset.get(BaseAPI.book_search,{count:10,q:'react-native'},this.callBack)

    }
    callBack = (date)=>{
        alert(date)
    }

    render(){
        return(
            <View style= {styles.container}>
                <TouchableOpacity style= {{flex:1}} onPress= {this._onPress}>
                   <Text style={styles.buttonText}>测试数据</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ea3114'
    },
    button:{
        marginTop:50,
        marginLeft:50,
        width:100,
        height:30
   },
    buttonText:{
        color:'#5e4a31',
        fontSize:20,
        paddingTop:50
    }

})

