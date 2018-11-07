import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Add} from './../Redux/Action'

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={
            count : 0
        };
       
    }
    add(){
        this.setState({count : this.state.count + 1}, ()=>{this.reduxCalling()})
    }
    sub(){
       this.setState({count : this.state.count -1})
    }
    reduxCalling(){
        this.props.Add(this.state.count + 1);
    }
    render(){
        console.log(this.props.updateCount,'dddddddddd');
        return(
            <View>
               <Text>
                   Counter App testing
               </Text>
               <View style={{flexDirection:'row', marginVertical: 20}}>
               <TouchableOpacity onPress={()=>{this.add()}}>
               <View style={{width: 70, height:30, borderRadius:10, backgroundColor:'red',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'#fff'}}>Add</Text>
               </View>
               </TouchableOpacity>

                <View style={{marginHorizontal : 20}}>
                    <Text>{this.state.count}</Text>
                </View>

                <TouchableOpacity onPress={()=>{this.sub()}}>
               <View style={{width: 70, height:30, borderRadius:10, backgroundColor:'red',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'#fff'}}>Sub</Text>
               </View>
               </TouchableOpacity>

               </View>
              
            </View>
        )
            }
}

const mapStateToProps = (state) => {
   return {
       updateCount : state.payload
   }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        Add: Add
    }, dispatch)
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)