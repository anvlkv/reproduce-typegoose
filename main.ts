
import { InstanceType, prop, Typegoose } from 'typegoose';
import { Model } from 'mongoose';


export class Item extends Typegoose {
	@prop()
	name: string;

	@prop()
	description: string;
}

export const ItemModel: Model<InstanceType<Item>> = new Item().getModelForClass(Item);

let trial = new ItemModel({name:'some', description:'some'});

console.log(trial);

