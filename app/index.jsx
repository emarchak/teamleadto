import './style.scss';

import { Helmet } from 'react-helmet';
import { Component } from 'react';
import SlackForm from './_SlackForm';

const text = {
  title: 'TeamLeadTO'
};

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8"/>
      <title>{text.title}</title>
    </Helmet>
  )
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'erin@emarchak.com'
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