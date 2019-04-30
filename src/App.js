import React, {Component} from 'react';
import './App.css';
import LayoutsMenuPage from './components/pages/layouts-menu-page';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import LayoutsService from './services/LayoutsService';
import LayoutEditor from './components/layout-editor';

class App extends Component {

    constructor() {
        super();
        const layouts = LayoutsService.getLayouts();
        this.state = {
            layout: layouts,
            test: 0
        };

    }

    onLayoutChange = (id, layout) => {

        const allLayouts = this.state.layout;
        for (let index = 0; index < allLayouts.length; index++) {
            const layoutItem = allLayouts[index];
            if (layoutItem.id === id) {

                layoutItem.content = layout;

            }
        }

        this.setState({layout: allLayouts});

    }

    LayoutEditorPageToRender = (routeProps) => {
        const id = routeProps.match.params.id;
        const currentLayout = this
            .state
            .layout
            .filter(l => l.id === id)[0];
        return <LayoutEditor
            currentLayout={currentLayout}
            id={id}
            onLayoutChange={this.onLayoutChange}/>;
    }
    LayoutsMenuPageToRender = () => {
        return <LayoutsMenuPage layout={this.state.layout}/>;
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={this.LayoutsMenuPageToRender}/>
                        <Route path='/layout/:id' component={this.LayoutEditorPageToRender}/>
                    </Switch>
                </BrowserRouter>

            </div>

        );
    }
}

export default App;
