require 'sqlite3'

class SecureDatabaseConnector
  def initialize
    @host = 'localhost'
    @database = 'testdb'
  end

  def connect
    # {fact rule=code-quality-error-handling@v1.0 defects=0}
    begin
      db = SQLite3::Database.new(@database)
      return db
    rescue SQLite3::Exception => e
      puts "Database connection failed: #{e.message}"
      raise RuntimeError, "Unable to connect to database: #{e.message}"
    rescue StandardError => e
      puts "Unexpected error: #{e.message}"
      raise
    end
    # {/fact}
  end
end