import User from '../model/User.js';

export const login = async (req, res) => {};

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    //check if user is already registered
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(404).json({
        message: 'User is already registred ,Please Login',
      });
    }
    const newUser = await User.create({ name, password, email });

    res.status(201).json({
      data: newUser,
      message: 'Successfully registered',
    });
  } catch (error) {}
};
