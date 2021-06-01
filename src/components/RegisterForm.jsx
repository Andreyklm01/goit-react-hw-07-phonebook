import { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../redux/auth/auth-operations';

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.handleChange}
              required
            />
          </label>
          <h3>Email</h3>
          <label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
          <h3>Password</h3>
          <label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registration,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
