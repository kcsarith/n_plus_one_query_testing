const express = require('express');
const asyncHandler = require('express-async-handler');

const { Cat, Toy } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const cats = await Cat.findAll();
    res.json({ cats });
}));
router.get('/owners', asyncHandler(async function (req, res, next) {
    const cats = await Cat.findAll();
    const result = []
    for (cat of cats) {
      result.push({
        name: cat.name,
        owner: await cat.getOwner(),
        breed: cat.breed,
        color: cat.color
      });
    }
    res.json({ cats: result });
}));
router.get('/toys', asyncHandler(async function (req, res, next) {
    const cats = await Cat.findAll();
    const result = []
    for (cat of cats) {
      const toys = []
      for (toy of await cat.getToys()) {
        const toyType = await toy.getToyType();
        toys.push({
          name: toy.name,
          type: toyType.name
        })
      }
      result.push({
        name: cat.name,
        breed: cat.breed,
        toys: toys,
        color: cat.color
      });
    }
    res.json({ cats: result });
}));
module.exports = router;
