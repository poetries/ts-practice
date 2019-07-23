import * as React from "react";

export interface Props {
  name: string;
  num?: number;
}

interface State {
  num: number;
}

export default class Count extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { num: props.num || 1 };
    this.getExclamationMarks = this.getExclamationMarks.bind(this)
  }

  onIncrement = () => this.updateNumber(this.state.num + 1);
  onDecrement = () => this.updateNumber(this.state.num - 1);

  getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
  render() {
    const { name } = this.props;

    if(this.state.num<=0){
      alert('不能再减了')
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(this.state.num)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateNumber(num: number) {
    this.setState({ num });
  }
}
