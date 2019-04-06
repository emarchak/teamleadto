import './style.scss';

import { Helmet } from 'react-helmet';
import { Component } from 'react';
import SlackForm from './_SlackForm';

const text = {
  title: 'TeamLeadTO',
  description: 'Leading & managing teams of software engineers can be challenging. This meetup is for leaders of all experience levels to connect, share stories and learn from each other.',
  url: 'http://teamlead.to'
};

const slackConfig = {
  slack_url: 'https://slack.com/api/users.admin.invite',
  slack_token: process.env.SLACK_TOKEN,
};

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet={'UTF-8'}/>
      
      <link rel={'apple-touch-icon'} sizes={'180x180'} href={'favicon/apple-touch-icon.png'} />
      <link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'favicon/favicon-32x32.png'} />
      <link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'favicon/favicon-16x16.png'} />
      <link rel={'manifest'} href={'favicon/site.webmanifest'} />
      <link rel={'mask-icon'} href={'favicon/safari-pinned-tab.svg'} color={'#ffffff'} />
      <meta name={'msapplication-TileColor'} content={'#ffffff'} />
      <meta name={'theme-color'} content={'#ffffff'} />

      <meta property={'og:title'} content={text.title}/>
      <meta property={'og:site_name'} content={text.title}/>
      <meta property={'og:url'} content={text.url}/>
      <meta property={'og:description'} content={text.description}/>
      <meta property={'og:image'} content={'img/og.jpg'} />
      
      <title>{text.title}</title>
      <meta name={text.description} />
    </Helmet>
  )
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  render () {
    return (
      <div>
        <Metadata/>
        <div className={'container'}>
          <img src={'img/logo--dark.svg'} alt={text.title} className={'logo'} width={480}/>
          <SlackForm config={slackConfig} email={this.state.email}/>
        </div>
      </div>
    )
  }
}

export default App;