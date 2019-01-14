import {createStackNavigator} from 'react-navigation';

import Main from './pages/Main'
import Tarefa from './pages/Tarefa'
import Finalizar from './pages/Finalizar'

const Stack = createStackNavigator({
    Main,
    Tarefa,
    Finalizar
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#483D8B'
        },
        headerTintColor: '#FFF'
    }
})

export default Stack