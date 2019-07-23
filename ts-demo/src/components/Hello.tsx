
import * as React from 'react';

export interface Props {
  name: string;
  age?: number;
}

export default class Hello extends React.Component<Props, object> {

  render() {
    const { name, age } = this.props;
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name}-{age},欢迎来到Typescript世界!
        </div>
      </div>
    );
  }
}
