import slackInvite from "./_slackInvite";
import { Component } from 'react';

const text = {
  emailLabel: 'Email',
  emailPlaceholder: 'leaders@teamlead.to',
  submitLabel: 'Join our slack community',
};

const FormMessage = (props) => {
  if (props.message) {
    return (
      <p className={'slackform--message'}>
        {props.message}
      </p>
    )
  }
  else {
    return null;
  }
};

class SlackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      submitted: false,
      message: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let response = await slackInvite(this.props.config, this.state);
    this.setState({submitted: true, message: response.message, error: response.error});
  }

  render() {
    return (
      <form className={'slackform' + (this.state.error ? ' slackform__error' : '')} onSubmit={this.handleSubmit}>
        <FormMessage message={this.state.message} />
        <label className={'slackform--label'}>
          {text.emailLabel}
          <input type={'email'}
                 className={'slackform--email'}
                 name={'email'}
                 placeholder={text.emailPlaceholder}
                 value={this.state.email}
                 autoFocus={true}
                 onChange={this.handleChange}
          />
        </label>
        <input type={'submit'} value={text.submitLabel} className={'slackform--submit'}/>
      </form>
    )
  };
}

export default SlackForm;