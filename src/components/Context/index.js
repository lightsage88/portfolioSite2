import React, {Component} from 'react';

const PortfolioContext = React.createContext()

export class Provider extends Component {
    state={

    }
    render() {
        return (
            <PortfolioContext.Provider value={{game: 'Starfox'}}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export const Consumer = PortfolioContext.Consumer;