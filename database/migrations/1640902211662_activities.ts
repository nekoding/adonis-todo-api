import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Activities extends BaseSchema {
  protected tableName = 'activities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email', 255).unique()
      table.string('title', 255)
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
