const messages = {
  'invalid_auth': "Failed to connect to Slack. Please email admin@teamlead.to",
  'not_authed': "Failed to connect to Slack. Please email admin@teamlead.to",
  'already_in_team': "You're already in our slack channel. Please check your email.",
  'ok': "Thanks for joining! Please check your email for an invite."
};

async function slackInvite(config, opts) {
  try {
    const url = new URL(config.slack_url);
    const params = {
      token: config.slack_token,
      set_active: true,
      email: opts.email,
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    let response = await fetch(url, {
      method: 'POST',
      headers: [['Content-Type', 'application/x-www-form-urlencoded']]
    });

    let body = await response.json();
    if (body.ok) {
      return {
        message: messages.ok,
      };
    }

    throw new Error(body.error);

  }
  catch(err) {
    return {
      message: messages[err.message],
      error: true
    };
  }
}

export default slackInvite;
