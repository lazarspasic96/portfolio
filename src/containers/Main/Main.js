import React from 'react'
import Home from '../../components/UI/Home/Home'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <p>main section</p>
                <Home />
            </main>

        )
    }
}


export default Main;