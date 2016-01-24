Meteor.publish('people', () => {
  return people.find();
});

Meteor.publish('hobbies', () => {
  return hobbies.find();
});
