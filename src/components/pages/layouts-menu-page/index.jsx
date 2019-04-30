import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ShowcaseLayout from '../../layout';

export default class LayoutsMenuPage extends Component {

    render() {

        return (
            <div className="layout-view">

                {this
                    .props
                    .layout
                    .map((layoutItem, index) => {
                        return <Link to={`/layout/${layoutItem.id}`} key={index}>
                            <ShowcaseLayout
                                key={index}
                                readOnly={true}
                                className="layoutItemLink"
                                screenLayouts={layoutItem}/>
                        </Link>
                    })
}

            </div>
        )
    }
}