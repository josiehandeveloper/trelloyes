import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe ('List component', () => {
    
    //Smoke
    it('renders without crashing', () => {
  
        const div = document.createElement('div');
        ReactDOM.render(
        <List 
              header= {"Header"}
              cards={[
                { id: 'a', title: 'First card', content: 'lorem ipsum' },
                { id: 'b', title: 'Second card', content: 'lorem ipsum' },
                { id: 'c', title: 'Third card', content: 'lorem ipsum' }

                ]}
        />, div);
      
        ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot
    
    it('renders example cards', () => {
        const tree = renderer.create(
        <List 
            header= {"Header"}
            cards={[
              { id: 'a', title: 'First card', content: 'lorem ipsum' },
              { id: 'b', title: 'Second card', content: 'lorem ipsum' },
              { id: 'c', title: 'Third card', content: 'lorem ipsum' }

              ]}
        />      
        ).toJSON();
        expect(tree).toMatchSnapshot();  

        });
    });