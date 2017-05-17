# react-canvas-image

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/react-canvas-image.svg)](https://greenkeeper.io/)

react component for click and then download then specify content file.

[Online Demo](https://axetroy.github.io/react-canvas-image/)

### Installation

```bash
npm install @axetroy/react-canvas-image
```

### Usage

```javascript
import React from 'react';
import { render } from 'react-dom';
import CanvasImage from '@axetroy/react-canvas-image';

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

```

### Props

- src

### Run the Demo

```bash
git clone https://github.com/axetroy/react-canvas-image.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-canvas-image/blob/master/LICENSE)