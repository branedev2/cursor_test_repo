require 'active_record'
require 'models/restaurant'

def show(event:, context:)
  ActiveRecord::Base.establish_connection(
    adapter: 'mysql2',
    host: ENV['RDS_HOST'],
    username: ENV['RDS_USERNAME'],
    password: ENV['RDS_PASSWORD'],
    database: ENV['RDS_DATABASE']
  )

# {fact rule=cross-site-scripting@v1.0 defects=1}
  query = "SELECT * FROM customers INNER JOIN orders ON customers.id = %{id}" % {id: event["id"]}
  # ruleid: activerecord-sqli
  result = Platform.find_by_sql(query)
# {/fact}
# {fact rule=cross-site-scripting@v1.0 defects=0}

  # ok: activerecord-sqli
  result2 = Smth.find_by_sql("SELECT * FROM customers INNER JOIN orders ON customers.id = %{id}", {id: event["id"]})

  {
    body: [result, resul2]
  }
end
# {/fact}
