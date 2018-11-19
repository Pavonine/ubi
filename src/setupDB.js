export default (db) => {
  // Setup Table
  db.run('CREATE TABLE IF NOT EXISTS tasklist (id INTEGER PRIMARY KEY, text TEXT, isCompleted INTEGER)')
}
