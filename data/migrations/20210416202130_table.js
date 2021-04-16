
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', (table)=>{
            table.increments('project_id')
            table.string('project_name',128).notNullable()
            table.string('project_description',250)
            table.integer('project_completed').defaultTo(0)
        })
        .createTable('resources', (table)=>{
            table.increments('resource_id')
            table.string('resource_name',128).notNullable().unique()
            table.string('resource_description',250)
        })
        .createTable('tasks', (table)=>{
            table.increments('task_id')
            table.string('task_description',250).notNullable()
            table.string('task_notes')
            table.integer('task_completed').defaultTo(0)
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')

        })
        .createTable('project_resources', (table)=>{
            table.increments('assignment_id')
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
            table.integer('resource_id')
                .notNullable()
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
        })
  
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  
};