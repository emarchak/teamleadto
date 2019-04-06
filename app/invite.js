import fetch from 'node-fetch';

const config = {
  slack_url: 'https://slack.com/api/users.admin.invite',
  slack_token: process.env.SLACK_TOKEN
};

const messages = {
  'invalid_auth': "Failed to connect to Slack. Please email admin@teamlead.to",
  'not_authed': "Failed to connect to Slack. Please email admin@teamlead.to",
  'already_in_team': "You're already in our slack channel. Please check your inbox.",
  'ok': "Thanks for joining! Please check your inbox for an invite."
};


module.exports = async (req, res) => {
  const { email } = req.body;
  try {
    try {
      const url = new URL(config.slack_url);
      const params = {
        token: config.slack_token,
        set_active: true,
        email: email,
      };
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      let response = await fetch(url, {
        method: 'POST',
        headers: [['Content-Type', 'application/x-www-form-urlencoded']]
      });

      let body = await response.json();

      if (body.ok) {
        res.send({
          message: messages.ok,
        });
      }

      throw new Error(body.error);

    }
    catch(err) {
      res.send({
        message: messages[err.message],
        error: true
      });
    }
  }
  catch (err) {
    res.sendStatus(500)
  }
};
