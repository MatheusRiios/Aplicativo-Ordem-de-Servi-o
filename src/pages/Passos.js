import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import CheckBox from './Checkbox'

class Passos extends Component{            
    constructor(props){
        super(props)
        this.state = {
            navigation: this.props.navigate,            
        }        
    }
    
    render(){        
        const {navigate} = this.state.navigation   
        
        return(            
            <View style={styles}>
                <TouchableOpacity onPress={() => navigate('Finalizar')}>
                    <View style={styles.container}>
                        <View style={styles.containerPassos}>
                            <Text style={styles.containerTitleTarefa}>{this.props.servicos.nome}</Text>
                            <View style={styles.containerIconsPassos}>

                                <View style={styles.containerIconAnexar}>
                                    <Image style={styles.iconAnexar} source={require('../imagens/attachment.png')} />
                                    <View style={styles.containerQtdAnexos}>
                                        <Text style={styles.qtdAnexos}>{this.props.servicos.qtdAnexos}</Text>
                                    </View>
                                </View>
                                <View style={styles.containerEquipamentosTarefa}>
                                    <View style={styles.boxIconEquipamentosTarefa}>
                                        <Image style={styles.iconEquipamentosTarefa} source={require('../imagens/protection.png')} />                                
                                    </View>
                                    <View style={styles.boxIconEquipamentosTarefa}>  
                                        <Image style={styles.iconEquipamentosTarefa} source={require('../imagens/cloth.png')} />
                                    </View>
                                    <View style={styles.boxIconEquipamentosTarefa}>
                                        <Image style={styles.iconEquipamentosTarefa} source={require('../imagens/shirt.png')} />
                                    </View>
                                </View>                    
                                <CheckBox styles={styles}  />    
                            </View>
                        </View>             
                    </View>    
                </TouchableOpacity> 
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15
    },
    //Section Passos
    containerPassos: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    containerTitleTarefa: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },

    containerIconsPassos: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    containerIconAnexar: {        
        marginLeft: 20
    },
    iconAnexar: {
        height: 30,
        width: 30
    }, 
    containerQtdAnexos:{
        backgroundColor: '#00BFFF',
        borderRadius: 50,
        width: 15,
        height: 15,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 25
    },   
    qtdAnexos: {
        fontSize: 10,
        textAlign: 'center',
        color: '#FFF'
    },
    noClicked: {
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#c1c1c1',
        height: 65,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,    
        tintColor: '#c1c1c1',
        marginBottom: '10%',        
    },
    clicked: {
        backgroundColor: '#32CD32',
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#32CD32',
        height: 65,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,   
        tintColor: '#c1c1c1',
        marginBottom: '10%',
    },
    iconCheckClick: {
        height: 30,
        width: 30,
        tintColor: 'white'
    },   
    noIconCheckClick : {
        height: 30,
        width: 30,        
        tintColor: '#c1c1c1'
    },
    containerEquipamentosTarefa: {
        flexDirection: 'row',
        marginLeft: 70
    },
    boxIconEquipamentosTarefa: {
        flexDirection: 'row',        
        alignItems: 'center',
        backgroundColor: '#00BFFF',        
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 10,
        padding: 8        
    },
    iconEquipamentosTarefa: {        
        height: 20,
        width: 20
    }
})

export default Passos