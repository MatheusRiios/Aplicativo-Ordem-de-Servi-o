import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import { CheckBox } from 'react-native-elements'

import Passos from './Passos'

import Header from './Header'

class Tarefa extends Component{
    static navigationOptions = () => ({
        header: null
    })
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
        const {params} = this.props.navigation.state;   
        
        return(            
            <View style={styles.container}>
                <Header navigate={this.props.navigation.navigate} pageBack={'Main'} title={params.tarefas.nome} />
                <View style={styles.containerSection}>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Equipamentos</Text>
                        </View>
                        <View style={styles.containerIconsEquipamentos}>                
                            <View style={styles.contatenBoxIcon}>
                                <View style={styles.boxIcon}>
                                    <Image style={styles.icon} source={require('../imagens/cloth.png')} />
                                </View>
                                <Text>Tecido</Text>
                            </View>
                            <View style={styles.contatenBoxIcon}>
                                <View style={styles.boxIcon}>
                                    <Image style={styles.icon} source={require('../imagens/hands.png')} />
                                </View>
                                <Text>Luvas</Text>
                            </View>
                            <View style={styles.contatenBoxIcon}>
                                <View style={styles.boxIcon}>
                                    <Image style={styles.icon} source={require('../imagens/protection.png')} />
                                </View>
                                <Text>Óculos</Text>
                            </View>
                            <View style={styles.contatenBoxIcon}>
                                <View style={styles.boxIcon}>
                                    <Image style={styles.icon} source={require('../imagens/shirt.png')} />
                                </View>
                                <Text>Uniforme</Text>
                            </View>                
                        </View>
                    </View>  
                    <View style={styles.containerTitle}>
                        <Text style={[styles.title, {marginTop: 10}]}>Passos</Text>
                    </View>                    
                </View>
                <FlatList 
                        data={params.tarefas.servicos}
                        renderItem={({item}) => <Passos qtdAnexos={params.tarefas.qtdAnexos} navigate={this.props.navigation} servicos={item} />}
                        keyExtractor={(item, index) => item + index}                                                   
                />
            </View>            
        )
    }            
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',      
    },
    containerSection: {
        padding: 15
    },
    containerTitle: {
        marginBottom: 12,
        marginLeft: 12 
    },
    title: {
        fontWeight: 'bold', 
        color: '#696969',
        fontSize: 25
    },
    containerIconsEquipamentos: {
        backgroundColor: '#FFF',
        padding: 15,
        flexDirection: 'row',        
        justifyContent: 'center',
        borderRadius: 15
    },
    contatenBoxIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    boxIcon: {
        backgroundColor: '#00BFFF',
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        tintColor: '#FFF'
    },
})

export default Tarefa