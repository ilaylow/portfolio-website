import React from 'react';
import MiniHeader from './components/mini-header';
import Welcome from './components/WelcomeBlock';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <MiniHeader/>
                <Welcome />
            </div>
        )
    }
}

export default Home;