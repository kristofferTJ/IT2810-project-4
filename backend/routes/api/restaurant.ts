import express, { Response } from 'express';
const router = express.Router();
import { Restaurant } from '../../models/Restaurant';

// @route   PUT api/restaurant/comment/:restaurant_id
// @desc    comment on restaurant
// @access  Public
router.put('/comment/:restaurant_id', async (req: any, res: Response) => {
  const { comment } = req.body;

  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ msg: 'Denne restauranten er ikke i vår database' });
    }

    restaurant.comments.unshift(comment);

    await restaurant.save();
    return res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Restaurant not found' });
    }
    res.status(404).json({ msg: 'Page not found' });
  }
});
router.get('/', async (req: any, res: Response) => {
  try {
    const restaurant = await Restaurant.find().limit(20);
    if (!restaurant) {
      return res
        .status(404)
        .json({ msg: 'Denne restauranten er ikke i vår database' });
    }
    return res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Restaurant not found' });
    }
    res.status(404).json({ msg: 'Page not found' });
  }
});

// @route   GET api/restaurant/:restaurant_id
// @desc    Get restaurant by id
// @access  Public
router.get('/id/:restaurant_id', async (req: any, res: Response) => {
  const { comment } = req.body;

  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ msg: 'Denne restauranten er ikke i vår database' });
    }
    return res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Restaurant not found' });
    }
    res.status(404).json({ msg: 'Page not found' });
  }
});

// @route   PUT api/restaurant/filter
// @desc    Get restaurants by presented filter
// @access  Public
router.get('/filter', async (req: any, res: Response) => {
  try {
    const regions: string[] = [];
    const cuisines: string[] = [];
    const prices: string[] = [];

    const skipAmount: number = req.query.skip ? parseInt(req.query.skip) : 0;
    const nameo: string = req.query.name
      ? req.query.name.toLocaleLowerCase()
      : '';
    const limitAmount =
      req.query.limit && req.query.limit === 'none' ? 151 : 15;

    type sortType = {
      name?: number;
      price?: number;
      stars?: number;
    };
    type filterType = {
      region?: object;
      price?: object;
      cuisine?: object;
      name: {
        $regex: string;
        $options: string;
      };
    };
    let sort: sortType = {};

    let filter: filterType = {
      name: {
        $regex: '',
        $options: '',
      },
    };

    for (const key of Object.keys(req.query)) {
      if (key.startsWith('region')) {
        regions.push(req.query[key]);
      }
      if (key.startsWith('cuisine')) {
        cuisines.push(req.query[key]);
      }
      if (key.startsWith('price')) {
        prices.push(req.query[key]);
      } else if (key === 'sort') {
        const value = req.query[key];
        const isDESC = value.endsWith('DESC');
        if (value.startsWith('name')) {
          sort.name = isDESC ? -1 : 1;
        } else if (value.startsWith('price')) {
          sort.price = isDESC ? -1 : 1;
        } else if (value.startsWith('stars')) {
          sort.stars = isDESC ? -1 : 1;
        } else {
          sort.name = 0;
          sort.price = 0;
          sort.stars = 0;
        }
      }
    }

    if (regions.length !== 0) {
      filter.region = { $in: regions };
    }
    if (prices.length !== 0) {
      filter.price = { $in: prices };
    }
    if (cuisines.length !== 0) {
      filter.cuisine = { $in: cuisines };
    }

    filter.name = {
      $regex: nameo,
      $options: 'i',
    };
    const restaurant = await Restaurant.find(filter)
      .sort(sort)
      .skip(skipAmount)
      .limit(limitAmount);
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
