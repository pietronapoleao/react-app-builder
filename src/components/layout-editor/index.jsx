import React, {Component} from 'react';
import ShowcaseLayout from '../layout';
import {Link} from 'react-router-dom';

export default class LayoutEditor extends Component {

    constructor(props) {
        super(props);
        this.onLayoutUpdate = this.onLayoutUpdate.bind(this);
    }

    onLayoutUpdate (layout) {
        const {id} = this.props;
        this.props.onLayoutChange(id, layout);
    }
    
    render() {
        const { currentLayout} = this.props;
       // console.log(this.props);
        return (
            <React.Fragment>
               
                <ShowcaseLayout className="layoutItemEditor" readOnly={false} screenLayouts={currentLayout} onLayoutChange={this.onLayoutUpdate} />
               <Link to='/'> BACK!!!</Link>
            </React.Fragment>)
    }
}