using System;
using System.Collections.Generic;

namespace TaskManagement
{
    public class Task
    {
        public string Status { get; set; }
        public int Priority { get; set; }
        public string Type { get; set; }
    }

    public class ImprovedTaskManager
    {
        private const string PendingStatus = "pending";
        private const string ProcessingStatus = "processing";
        private const int HighPriority = 1;
        private const int MediumPriority = 2;
        private const string UrgentType = "urgent";

        public void ProcessTasks(List<Task> tasks)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            foreach (var task in tasks)
            {
                if (ShouldProcessTask(task))
                {
                    ProcessTask(task);
                }
            }
            // {/fact}
        }

        private bool ShouldProcessTask(Task task)
        {
            return task.Status == PendingStatus;
        }

        private void ProcessTask(Task task)
        {
            var message = GetProcessingMessage(task);
            Console.WriteLine(message);
            task.Status = ProcessingStatus;
        }

        private string GetProcessingMessage(Task task)
        {
            return task.Priority switch
            {
                HighPriority when task.Type == UrgentType => "Processing urgent high priority task",
                HighPriority => "Processing high priority task",
                MediumPriority => "Processing medium priority task",
                _ => "Processing low priority task"
            };
        }
    }
}