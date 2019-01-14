import React, {Component} from 'react'

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

class Header extends Component{
    constructor(props){
        super(props)
    }
    

    renderTelaHome = () => {
        return( 
            <View style={styles.containerHeader}>
                <View style={styles.contentSection}>                    
                    <Text style={[styles.textTitle, {marginLeft: '38%'}]}>{this.props.title}</Text>
                    <Image style={styles.iconSettings} source={require('../imagens/setting.png')} />                
                </View>
            </View>
        )
    }

    renderOthersPages = () => {        
        const {navigate, pageBack} = this.props;        
        return( 
            <View style={styles.containerHeader}>
                <View style={styles.contentSection}>
                    <TouchableOpacity onPress={() => navigate(pageBack)}>
                        <Image style={styles.iconSettings} source={require('../imagens/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>{this.props.title}</Text>
                    <Image style={styles.iconSettings} source={require('../imagens/ellipsis-vertical.png')} />                
                </View>
            </View>
        )
    }

    render(){               
        return(                         
            <View>
                {
                    this.props.title != 'Tarefas' ? this.renderOthersPages() : this.renderTelaHome()
                }                
            </View>
            
        )
    }
}




const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#483D8B',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',        
        justifyContent: 'center',
        width: '100%',
    },
    contentSection: {
        width: '90%',        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // containerTitleHeader: {
    //     width: '58%',
    //     justifyContent: 'flex-start',        
    // },
    textTitle: {  
        textAlign: 'right',      
        color: '#FFF',
        fontSize: 18
    },
    // containerIconSettings: {
    //     width: '10%'
    // },
    iconSettings: {
        width: 30,
        height: 30,
        tintColor: 'white'
    }
})

export default Header