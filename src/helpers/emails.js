const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMessage = (user) => {
  const msg = {
    to: {
      email: user.email,
      name: user.firstName
    },
    from: {
      email: 'admin@bookshelf.io',
      name: 'BookShelf'
    },
    subject: `Welcome to BookShelf, ${user.firstName}!`,
    content: [{
      type: 'text/html',
      value: `<h1>Welcome to BookShelf!</h1><h3>Thanks for signing up, ${user.firstName}!</h3><p>With Bookshelf, you can track the books that you've read and discover new books that you're going to love.</p>`
    }]
  };
  sgMail.send(msg);
};

module.exports = sendWelcomeMessage;