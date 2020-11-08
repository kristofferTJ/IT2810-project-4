import express, { Response } from 'express';
const router = express.Router();
import { Restaurant } from '../../models/Restaurant';

// @route   PUT api/counter/
// @desc    Get count by presented filter
// @access  Public
router.get('/', async (req: any, res: Response) => {
  try {
    const regions: string[] = [];
    const cuisines: string[] = [];
    const prices: string[] = [];

    const nameo: string = req.query.name
      ? req.query.name.toLocaleLowerCase()
      : '';

    type filterType = {
      region?: object;
      price?: object;
      cuisine?: object;
      name: {
        $regex: string;
        $options: string;
      };
    };

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
    const count = await Restaurant.find(filter).countDocuments();
    res.json(count);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
