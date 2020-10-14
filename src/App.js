import React, { Component } from 'react';
import list from './list'
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;


