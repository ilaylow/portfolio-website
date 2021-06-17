import React from 'react';
import MiniHeader from './components/mini-header';
import Welcome from './components/WelcomeBlock';
import WorkingList from './components/UpdateList';
import ProjectList from './components/ProjectList';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <MiniHeader />
                <div style = {{backgroundColor: "black"}}>
                    <Welcome />
                </div>
                <WorkingList />
                <ProjectList />
            </div>
        )
    }
}

export default Home;