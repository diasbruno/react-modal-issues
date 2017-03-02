import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div>
	<Modal isOpen={modalIsOpen}>
	  Some content
	</Modal>
	<button onClick={this.toggleModal}>Open modal</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
