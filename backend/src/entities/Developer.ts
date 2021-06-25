import { prop, index } from 'typegoose';

class Point {
  @prop({ enum: ['Point'], required: true })
  type: string;

  @prop({ required: true })
  coordinates: number[];
}

@index({ location: '2dsphere' }) // single index with no options
class Developer {
  @prop()
  name: string;

  @prop()
  githubUsername: string;

  @prop()
  bio: string;

  @prop()
  avatar: string;
  
  @prop()
  techs: string[];

  @prop({ type: Point })
  location: Point;
}

export { Developer }