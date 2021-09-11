const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const budgetSeed = [
  {
    name: 'Paycheck',
    value: 2500,
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    name: 'Gas',
    value: -100,
    date: new Date(new Date().setDate(new Date().getDate() - 8)),
  },
  {
    name: 'Groceries',
    value: -200,
    date: new Date(new Date().setDate(new Date().getDate() - 7)),
  },
  {
    name: 'Restaurant',
    value: -75,
    date: new Date(new Date().setDate(new Date().getDate() - 6)),
  },
  {
    name: 'Coffee',
    value: -3,
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    name: 'Subscriptions',
    value: -20,
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    name: 'Gym Membership',
    value: -30,
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    name: 'Car Payment',
    value: -200,
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    name: 'Birthday Gift',
    value: 200,
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
  }
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
