import React from 'react'
import Home from '../../components/Home/Home'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main  className = 'main-wrapper'>
                <Home />
            </main>

        )
    }
}


export default Main;