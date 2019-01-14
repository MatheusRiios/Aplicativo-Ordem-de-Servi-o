import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';

class Checkbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            isChecked: false,
            servicos: []
        }
    }

    checkCheckbox = () => {
        let {isChecked} = this.state
        this.setState({
            isChecked: !isChecked
        })
    }    

    render(){           
                   
        const {isChecked} = this.state
        return(
            <View style={this.props.styles.containerContentCheckBox}>
                <TouchableOpacity 
                    onPress={() => this.checkCheckbox()}
                    style={(isChecked ? this.props.styles.clicked : this.props.styles.noClicked)}>
                    <Image style={(isChecked ? this.props.styles.iconCheckClick : this.props.styles.noIconCheckClick)} source={require('../imagens/checked.png')} />
                </TouchableOpacity>         
            </View>                    
        )
    }
}


export default Checkbox;