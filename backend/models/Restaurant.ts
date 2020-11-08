import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IRestaurant extends Document {
  name: string;
  year: Number;
  latitude: Number;
  longitude: Number;
  city: string;
  region: string;
  zipCode: Number | String;
  cuisine: any;
  price: string;
  url: string;
  stars: Number;
  comments: string[];
}

const RestaurantSchema = new Schema({
  name: {
    type: String,
  },
  year: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  zipCode: {
    type: String,
    content: Schema.Types.Mixed,
  },
  cuisine: {
    type: String,
  },
  price: {
    type: String,
  },
  url: {
    type: String,
  },
  stars: {
    type: Number,
  },
  comments: [
    {
      type: String,
    },
  ],
});

export const Restaurant = mongoose.model<IRestaurant>(
  'Restaurant',
  RestaurantSchema
);
