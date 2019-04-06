import { Component } from 'react';

const text = {
  emailLabel: 'Email',
  emailPlaceholder: 'leaders@teamlead.to',
  submitLabel: 'Join our slack community',
};

const FormMessage = (props) => {
  if (props.message) {
    return (
      <p className={'slackform--message slackform--element' + (props.error ? ' slackform--message__error' : '')}>
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
    try {
      let response = await fetch( `/invite`, {
        method: 'POST',
        body: `email=${this.state.email}`,
        headers: new Headers({
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Accept' : 'application/json'
        }),
      });

      let body = await response.json();
      this.setState({submitted: true, message: body.message, error: body.error});
    }
    catch (err) {
      this.setState({submitted: true, error: true});
    }
  }

  render() {
    return (
      <form className={'slackform' + (this.state.error ? ' slackform__error' : '')} onSubmit={this.handleSubmit}>
        <FormMessage message={this.state.message} error={this.state.error}/>
        <label className={'slackform--label'}>
          {text.emailLabel}
          <input type={'email'}
                 className={'slackform--email slackform--element'}
                 name={'email'}
                 placeholder={text.emailPlaceholder}
                 value={this.state.email}
                 autoFocus={true}
                 onChange={this.handleChange}
          />
        </label>
        <input type={'submit'} value={text.submitLabel} className={'slackform--submit slackform--element'}/>
      </form>
    )
  };
}

export default SlackForm;