using System;
using System.Collections.Generic;

namespace TaskManagement
{
    public class TaskManager
    {
        public void ProcessTasks(List<object> tasks)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            for (int i = 0; i < tasks.Count; i++)
            {
                var task = tasks[i];
                var taskDict = (Dictionary<string, object>)task;
                var status = (string)taskDict["status"];
                var priority = (int)taskDict["priority"];
                var type = (string)taskDict["type"];
                
                if (status == "pending")
                {
                    if (priority == 1)
                    {
                        if (type == "urgent")
                        {
                            Console.WriteLine("Processing urgent high priority task");
                            taskDict["status"] = "processing";
                        }
                        else
                        {
                            Console.WriteLine("Processing high priority task");
                            taskDict["status"] = "processing";
                        }
                    }
                    else if (priority == 2)
                    {
                        Console.WriteLine("Processing medium priority task");
                        taskDict["status"] = "processing";
                    }
                    else
                    {
                        Console.WriteLine("Processing low priority task");
                        taskDict["status"] = "processing";
                    }
                }
            }
            // {/fact}
        }
    }
}