class ReadableDataProcessor
  PENDING_STATUS = 'pending'
  PROCESSING_STATUS = 'processing'
  HIGH_PRIORITY = 1
  MEDIUM_PRIORITY = 2
  URGENT_TYPE = 'urgent'

  def process_tasks(tasks)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    tasks.each do |task|
      process_task(task) if should_process_task?(task)
    end
    # {/fact}
  end

  private

  def should_process_task?(task)
    task[:status] == PENDING_STATUS
  end

  def process_task(task)
    message = get_processing_message(task)
    puts message
    task[:status] = PROCESSING_STATUS
  end

  def get_processing_message(task)
    case task[:priority]
    when HIGH_PRIORITY
      task[:type] == URGENT_TYPE ? 'Processing urgent high priority task' : 'Processing high priority task'
    when MEDIUM_PRIORITY
      'Processing medium priority task'
    else
      'Processing low priority task'
    end
  end
end