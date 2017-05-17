import React from 'react';
import { render } from 'react-dom';
import CanvasImage from '../../lib/react-canvas-image';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  render() {
    return (
      <div>
        <CanvasImage src="https://www.google.com/logos/doodles/2017/115th-anniversary-of-the-antikythera-mechanisms-discovery-6292005859622912-l.png" />
      </div>
    );
  }
}

render(<App />, element);
