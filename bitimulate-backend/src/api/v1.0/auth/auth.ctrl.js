const Joi = require('joi');
const User = require('db/models/User');
const token = require('lib/token');

exports.localRegister = async (ctx) => {
  const { body } = ctx.request;

  const schema = Joi.object({
    displayName: Joi.string().regex(/^[a-zA-Z0-9]{3,12}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30),
  });

  const result = Joi.validate(body, schema);

  // Schema Error
  if(result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { displayName, email, password } = body;
  try {

    const exists = await User.findExistancy({email, displayName});
    if(exists) {
      ctx.status = 409;
      const key = exists.email === email ? 'email' : 'displayName';
      ctx.body = {
        key: key
      };
      return;
    }

    const user = await User.localRegister({
      displayName, email, password
    });

    ctx.body = user;

    const accessToken = await token.generateToken({
      user: {
        _id: user._id,
        displayName
      },
    }, 'user');
    // configure accessToken to httpOnly cookie
    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });

  } catch(e) {
    ctx.throw(500);
  }
}
