import React from 'react';

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textArea: "Ford"};
    this.handler = this.handler.bind(this);
  }

  handler(evt) {
    let inputArr = evt.target.value.split(' ')
    this.setState({ textArea: evt.target.value })
    const corrections = this.props.corrections;
    let keys = Object.keys(corrections)
    keys.map((key, _) => {
      if (inputArr.includes(key)){
        inputArr[inputArr.indexOf(key)] = corrections[key]
      }
    })

    this.setState({textArea: inputArr.join(' ')})

  }

  render() {
    return (
      <div className="text-center">
        <textarea data-testid="textarea" rows={10} cols={80} className="card" value={this.state.textArea} onChange={this.handler} />
      </div>
    );
  }
}

export default AutocorrectTextarea;

