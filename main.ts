import { prop, Typegoose } from 'typegoose';

export class Item extends Typegoose {
	@prop()
	name: string;

	@prop()
	description: string;
}

//export const ItemModel = new Item().getModelForClass(Item); //Here is the correction. The type of ItemModel is inferred
//Error:(11, 14) TS4023:Exported variable 'ItemModel' has or is using name 'Document' from external module "mongoose" but cannot be named.
//Error:(11, 14) TS4023:Exported variable 'ItemModel' has or is using name 'Model' from external module "mongoose" but cannot be named.


const ItemModel = new Item().getModelForClass(Item);

let trial = new ItemModel({name:'some', description:'some'});

console.log(trial);

/*
* TypeError: Class constructor Typegoose cannot be invoked without 'new'
    at new Item (/Users/anvlkv/Projects/reproduce-typegoose/main.ts:26:42)
    at Object.<anonymous> (/Users/anvlkv/Projects/reproduce-typegoose/main.ts:16:19)
    at Module._compile (module.js:571:32)
    at Module.m._compile (/Users/anvlkv/Projects/reproduce-typegoose/node_modules/ts-node/src/index.ts:392:23)
    at Module._extensions..js (module.js:580:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/Users/anvlkv/Projects/reproduce-typegoose/node_modules/ts-node/src/index.ts:395:12)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Function.Module.runMain (module.js:605:10)
    at Object.<anonymous> (/Users/anvlkv/Projects/reproduce-typegoose/node_modules/ts-node/src/_bin.ts:182:12)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)

* */