////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

const DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

class App extends React.Component {

  renderTabs() {
    return this.props.countries.map((country, index) => {
      return (
        <div style={index === 0 ? styles.activeTab : styles.tab}>
          {country.name}
        </div>
      );
    });
  }

  renderPanel() {
    let country = this.props.countries[0];
    return (
      <div>
        <p>{country.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );
  }
}

let styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = Object.assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.tabPanels = {
  padding: 10
};

ReactDOM.render(<App countries={DATA}/>, document.getElementById("react-app"));
