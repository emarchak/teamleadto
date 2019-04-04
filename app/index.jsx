import './style.scss';

import { Helmet } from 'react-helmet';
import { Component } from 'react';
const text = {
  title: 'TeamLeadTO',
  emailLabel: 'Email',
  emailPlaceholder: 'leaders@teamlead.to',
  submitLabel: 'Join our slack community',
};

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8"/>
      <title>{text.title}</title>
    </Helmet>
  )
};

class SlackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit(evt) {
    console.log(this.state);
    evt.preventDefault();
  }

  render() {
    return (
      <form className={'slackform'} onSubmit={this.handleSubmit}>
        <label>
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    }
  }

  render () {
    return (
      <div>
        <Metadata/>
        <div className={'container'}>
          <img src={'img/logo--dark.svg'} alt={text.title} className={'logo'} width={480}/>
          <SlackForm email={this.state.email}/>
        </div>
      </div>
    )
  }
}

export default App;