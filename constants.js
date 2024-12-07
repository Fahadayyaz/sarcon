import { faker } from "@faker-js/faker";

export const categories = Array.from({ length: 100 }, () => ({
  id: faker.lorem.word(),
  name: faker.lorem.words(),
  image: faker.image.url(),
}));
