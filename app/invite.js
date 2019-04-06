import slackInvite from "./_slackInvite";


// module.exports = (req, res) => {
//   const { email } = req.body;
//   if (password && PASSWORDS[username] === password) {
//     let response = await slackInvite(config, { email });
//
//     req.login({ id: username }, function(err) {
//       if (err) res.sendStatus(403);
//       else res.redirect("/user");
//     });
//   } else {
//     res.sendStatus(403);
//   }
// };

module.exports = (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  console.log(req.body);
  // if (email) res.send(`Hello ${email}`);
  res.send(process.env.SLACK_TOKEN);
  // else res.sendStatus(403);
};