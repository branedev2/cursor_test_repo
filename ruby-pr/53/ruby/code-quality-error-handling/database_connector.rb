require 'sqlite3'

class DatabaseConnector
  def initialize
    @host = 'localhost'
    @database = 'testdb'
  end

  def connect
    # {fact rule=code-quality-error-handling@v1.0 defects=1}
    begin
      db = SQLite3::Database.new(@database)
      return db
    rescue => e
      # Empty rescue block - swallows exceptions
    end
    # {/fact}
  end
end