import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import App from './App'
import {changeName} from './Actions'

function mapStateToProps(state){

    return {
        namecontainer:state.name_actions
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        cangenamefromcontainers:changeName
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);