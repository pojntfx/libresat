import { WidthProvider, Responsive } from "react-grid-layout";
import { ControlPane } from "./ControlPane";
import { VideoStreamPane } from "./VideoStreamPane";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export class ResponsiveLocalStorageLayout extends React.PureComponent {
  state = {
    className: "layout",
    cols: { lg: 12, md: 6, sm: 6, xs: 6, xxs: 6 },
    rowHeight: 30,
    layouts: JSON.parse(JSON.stringify(getFromLS("layouts") || {}))
  };

  onLayoutChange(layout, layouts) {
    this.saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  saveToLS = (key, value) => {
    if (global.localStorage) {
      global.localStorage.setItem(
        "rgl-8",
        JSON.stringify({
          [key]: value
        })
      );
    }
  };

  render() {
    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 6, sm: 6, xs: 6, xxs: 6 }}
        rowHeight={30}
        layouts={this.state.layouts}
        onLayoutChange={(layout, layouts) =>
          this.onLayoutChange(layout, layouts)
        }
      >
        <div key="1" data-grid={{ w: 6, h: 5, x: 0, y: 0, minW: 2, minH: 3 }}>
          <ControlPane />
        </div>
        <div key="2" data-grid={{ w: 6, h: 5, x: 7, y: 0, minW: 2, minH: 3 }}>
          <VideoStreamPane />
        </div>
      </ResponsiveReactGridLayout>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}
