import React, { Component } from 'react';
import {View, Text, Image, SectionList, TouchableOpacity, StyleSheet} from 'react-native';

import api from '../services/api'

//Componentes
import Header from './Header'

export default class Main extends Component{
    static navigationOptions = () => ({
        header: null
    })

    constructor(props){
        super(props)

        this.state = {
            tarefasHoje: [],
            tarefasAmanha: [],             
        }
    }   

    componentDidMount(){
        this.carregarAPI();                
    }

    carregarAPI = async () => {
        const response = await api; 
        
        
    
        this.setState({
            tarefasHoje: response.hoje,
            tarefasAmanha: response.amanha,    
        })                
    }

    renderizarLojas = ({ item }) => {         
        const {navigate} = this.props.navigation;                              
        return(
            <TouchableOpacity onPress={() => navigate('Tarefa', {tarefas: item})}>
                <View style={styles.containerTarefas}>
                    <View style={styles.containerNomeEHorario}>
                        <Text style={styles.nomeTarefa}>{item.nome}</Text>
                        <Image 
                            style={styles.imgAlarm}
                            source={require('../imagens/alarm.png')} 
                        />
                        <View style={styles.containerHorario}>
                            <Text style={styles.horarioTarefa}>{item.horario}</Text>                            
                        </View>                        
                    </View>
                    <View style={styles.containerEnderecoETelefone}>
                        <Text style={styles.enderecoTarefa}>{item.endereco}</Text>                        
                        <Text style={styles.telefoneTarefa}>{item.telefone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )       
    }
    

    render(){            
        const {tarefasHoje, tarefasAmanha} = this.state           
        return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Header title="Tarefas"/>
                </View>
                
                
                <SectionList                 
                    sections={[
                        {title: 'Hoje', data: tarefasHoje},
                        {title: 'Amanha', data: tarefasAmanha},
                    ]}
                    renderItem={this.renderizarLojas}
                    renderSectionHeader={({section: {title}}) => (
                        <View style={styles.sectionHeader}>
                            <Text style={styles.textSectionHeader}>{title}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => item + index}                        
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: '#DCDCDC'       
    },
    sectionHeader: {
        backgroundColor: '#DCDCDC',
        padding: 12,              
    },
    textSectionHeader: {
        fontWeight: 'bold', 
        color: '#696969',
        fontSize: 18,   
        marginLeft: 13,
    },    
    containerTarefas: {
        backgroundColor: '#FFF',
        marginBottom: 5,        
    },
    containerNomeEHorario: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    nomeTarefa: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 13,
    },  
    containerHorario: {
        backgroundColor: '#00BFFF',
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        marginRight: 10,
        flexDirection: 'row'        
    },
    horarioTarefa: {
        color: '#FFF'
    },
    containerEnderecoETelefone: {
        marginLeft: 20,
        color: '#CCC',
        borderLeftWidth: 3,
        borderLeftColor: '#000000',
        paddingLeft: 5,  
        marginBottom: 10
    },
    imgAlarm: {
        height: 30,
        width: 30,
        position: 'absolute',
        right: '25%'
    },
    
})