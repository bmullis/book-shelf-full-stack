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
    text: 'Thank you for signing up!',
    templateId: 'd-97c566301f41437385b8f04ddbfda6f9',
    categories: ['Transactional', 'Notifications'],
    dynamic_template_data: {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    }
  };
  sgMail.send(msg);
};

module.exports = sendWelcomeMessage;