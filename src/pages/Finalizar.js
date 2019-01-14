import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker'


import Header from './Header'

class Finalizar extends Component{
    static navigationOptions = () => ({
        header: null
    })
    constructor(props){
        super(props)

        this.state = {
            imagemTmp: [],
        }
    }   

    capturarImagem = () => {
        //Dois parametros 
        //Null
        //Function anonima que recebe a imagem por parametro
        ImagePicker.showImagePicker(null, (r) => {
            if(r.uri){
                let image = {uri: r.uri};
                this.setState({
                    imagemTmp: image
                })
            }
        })
    }
    render(){
        console.log(this.props)
        return(
            <View style={styles.container}>
                <Header navigate={this.props.navigation.navigate} pageBack={'Tarefa'} title="Anexos" />
                
                <View style={styles.containerSection}>
                    <View>
                        <View style={styles.containerTitleDescricao}>
                            <Text style={styles.titleDescricao}>DESCRIÇÃO</Text>
                        </View>

                        <View style={styles.containerDesricao}>
                            <Text style={styles.textDescricao}>É um fato desconhecido de todos que um 
                                leitor se distrairá com o conteúdo legível
                                de uma página quando estiver olhando a sua diagramação
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.containerTitleDescricao, {marginTop: 10}]}>
                            <Text style={styles.titleDescricao}>PERIODICIDADE</Text>
                        </View>

                        <View style={styles.containerDesricao}>
                            <Text style={[styles.textDescricao, {textAlign: 'center'}]}>Uma vez a cada 3 meses</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.containerTitleDescricao, {marginTop: 10}]}>
                            <Text style={styles.titleDescricao}>ANEXOS</Text>
                        </View>                           

                        <View style={styles.containerImagem}>
                            <Image style={styles.imagemAnexo} source={this.state.imagemTmp} />
                            <TouchableOpacity style={styles.containerButtonAnexarImagem} onPress={() => this.capturarImagem()}>
                                <Image style={styles.buttonAnexarImagem} source={require('../imagens/photo-camera.png')} />
                                <Text style={styles.textNovaFoto}>Nova Foto</Text>
                            </TouchableOpacity>
                        </View>                    
                    </View>
                </View>

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
    containerTitleDescricao: {
        marginBottom: 12,
        marginLeft: 12 
    },
    titleDescricao: {
        fontWeight: 'bold', 
        color: '#696969',
        fontSize: 25
    },
    containerDesricao: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
    },
    textDescricao: {
        fontSize: 20
    },    
    containerImagem: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',        
    },
    containerButtonAnexarImagem: {
        borderWidth: 4,
        borderRadius: 1,
        borderColor: '#00BFFF',        
        borderStyle: 'dotted',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'    
    },
    textNovaFoto: {
        fontSize: 16,
        color: '#00BFFF'
    },
    buttonAnexarImagem: {
        height: 80,
        width: 80,
        tintColor: '#00BFFF'
    },
    imagemAnexo: {
        height: 100,
        width: 100,
        marginRight: 15,
        marginLeft: 15
    }
})

export default Finalizar