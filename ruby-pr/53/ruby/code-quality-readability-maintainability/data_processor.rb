class DataProcessor
  def process_tasks(tasks)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    (0...tasks.length).each do |i|
      task = tasks[i]
      status = task[:status]
      priority = task[:priority]
      type = task[:type]
      
      if status == 'pending'
        if priority == 1
          if type == 'urgent'
            puts "Processing urgent high priority task"
            task[:status] = 'processing'
          else
            puts "Processing high priority task"
            task[:status] = 'processing'
          end
        elsif priority == 2
          puts "Processing medium priority task"
          task[:status] = 'processing'
        else
          puts "Processing low priority task"
          task[:status] = 'processing'
        end
      end
    end
    # {/fact}
  end
end