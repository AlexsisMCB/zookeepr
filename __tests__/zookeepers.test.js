const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");
jest.mock('fs');

test("creates an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
      { name: "Darlene", id: "jhgdja3ng2" },
      zookeepers
    );
  
    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingZookeepers = [
      {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
      },
      {
        id: "4",
        name: "Noel",
        age: 24,
        favoriteAnimal: "tiger",
      },
    ];
  
    const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);
  
    expect(updatedZookeepers.length).toEqual(1);
});
  
test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "4",
            name: "Noel",
            age: 24,
            favoriteAnimal: "tiger",
        },
    ];
  
    const result = findById("4", startingZookeepers);
  
    expect(result.name).toBe("Noel");
});
  
test("validates age", () => {
    const zookeeper = {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
    };

    const invalidZookeeper = {
        id: "3",
        name: "Isabella",
        age: "67",
        favoriteAnimal: "bear",
    };
  
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
});