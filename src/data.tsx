import { faker } from "@faker-js/faker";

export const latestTrendsData = [...Array(5)].map((item) => ({
  image: faker.image.url({ height: 250, width: 175 }),
  name: faker.commerce.product(),
}));

export const productsData = [...Array(32)].map((item) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.url({ width: 300, height: 300 }),
  rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  ratedBy: faker.number.int(1000),
  price: faker.commerce.price(),

  description: faker.commerce.productDescription(),
  brand: faker.helpers.arrayElement(["Mango", "H&M"]),
}));
