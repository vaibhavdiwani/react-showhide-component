# react-showhide-component

>

[![NPM](https://img.shields.io/npm/v/react-showhide-component.svg)](https://www.npmjs.com/package/react-showhide-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-showhide-component
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactShowHideComponent from 'react-showhide-component'

const arr = [1, 2, 3, 4, 5];

class Example extends Component {
  render() {
    const listHtml = arr.map((elem, i) => {
      return <div key={i}>{elem}</div>;
    });
    return <ReactShowHideComponent items={listHtml} minItems={2} />;
  }
}
```

## Props

| Property      | Type               | Default                               | Description                                                                                                                                  |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `items`  | string \| array           | undefined                                  | Array of elements of string |
| `minItems`     | number           | undefined                                  | No of element(for array) / lines (for string) to show by default |
| `mode`   | string           | array                                 | array or string  |
| `viewMoreButton`         | element           | <div key={`view-more-${Math.random() * 1000}`}>View More</div>                                  | View more button |
| `viewLessButton`           | element              | <div key={`view-less-${Math.random() * 1000}`}>View Less</div>                            | View less button |

## License

MIT © [https://github.com/vaibhavdiwani](https://github.com/vaibhavdiwani)


**Any help in improvement/optimization is very much appreciated**