if (people.find().count() === 0) {
  _.times(2500, () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const userName = faker.internet.userName();
    const uuid = people.insert({
      username: userName,
      name: randomName,
      email: randomEmail,
    });
    hobbies.insert({
      owner: uuid,
      first: faker.lorem.words(),
      second: faker.lorem.words(),
      third: faker.lorem.words(),
    });
  });
}
