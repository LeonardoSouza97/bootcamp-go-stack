import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.INTEGER,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
