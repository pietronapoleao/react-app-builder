import React from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.screenLayouts.content }
    };

  }

  onCompactTypeChange =()=>{
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    this.setState({ compactType });
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  onBreakpointChange =(breakpoint) =>{
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  // onCompactTypeChange() {
  //   const { compactType: oldCompactType } = this.state;
  //   const compactType =
  //     oldCompactType === "horizontal"
  //       ? "vertical"
  //       : oldCompactType === "vertical"
  //       ? null
  //       : "horizontal";
  //   this.setState({ compactType });
  // }

  onLayoutChange =(layout)=> {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <React.Fragment>
        <ResponsiveReactGridLayout
          {...this.props}
          isDraggable={!this.props.readOnly}
          isResizable={!this.props.readOnly}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}>
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
        </React.Fragment>
    );
  }
}



ShowcaseLayout.defaultProps = {
  //className: "layout",
  rowHeight: 5,
  onLayoutChange: function() {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 12 },
  // initialLayout: generateLayout2()
};

// function generateLayout2() {
//   return [{"w":3,"h":7,"x":9,"y":2,"i":"0","moved":false,"static":false},{"w":3,"h":7,"x":0,"y":2,"i":"1","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":0,"i":"2","moved":false,"static":false},{"w":12,"h":2,"x":0,"y":9,"i":"3","moved":false,"static":false},{"w":6,"h":7,"x":3,"y":2,"i":"4","moved":false,"static":false}];
// }

