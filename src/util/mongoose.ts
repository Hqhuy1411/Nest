export class ToObejct {
    mutipleMongoosetoObject(mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    }

    MongoosetoObject(mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}