'use strict';

class ModelInterface{
  constructor(model){
    this.model = model;
  }

  async create(json){
    console.log('This is our json', json);
    try {
      let record = await this.model.create(json);
      return record;
    } catch (err) {
      console.error('We have an error with create!', err.message);
      return err;
    }
  }

  async read(id = null){
    try {
      let record;
      if (id){
        record = await this.model.findOne({where: {id}});
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (err) {
      console.error('We have an error with read!', err.message);
      return err;
    }
  }

  async update(id, entity){
    let record = null;
    try {
      await this.model.update(entity, {where: {id}});
      record = await this.model.findOne({where: {id}});
    } catch (err) {
      console.error('We have an error with update!', err.message);
      return err;
    }
    return record;
  }

  async delete(id){
    try{
      await this.model.destroy({where: {id}});
    } catch (err) {
      console.error('We have an error with delete!', err.message);
      return err;
    }
  }
}

module.exports = ModelInterface;
