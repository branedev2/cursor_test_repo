#include <iostream>
#include <string>
#include <vector>

struct Task {
    std::string name;
    int priority;
    int duration;
    std::string category;
    bool isUrgent;
};

class TaskScheduler {
public:
    std::vector<Task> scheduleTasks(std::vector<Task>& tasks, int maxTime, const std::string& mode) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        std::vector<Task> scheduled;
        int totalTime = 0;
        
        if (mode == "priority") {
            for (int p = 10; p >= 1; p--) {
                for (auto& task : tasks) {
                    if (task.priority == p && totalTime + task.duration <= maxTime) {
                        if (task.isUrgent || task.category == "critical" || (task.category == "important" && p > 7)) {
                            scheduled.push_back(task);
                            totalTime += task.duration;
                        }
                    }
                }
            }
        } else if (mode == "duration") {
            for (int d = 1; d <= 480; d++) {
                for (auto& task : tasks) {
                    if (task.duration == d && totalTime + task.duration <= maxTime) {
                        if (task.isUrgent || task.priority > 5 || task.category == "critical") {
                            scheduled.push_back(task);
                            totalTime += task.duration;
                        }
                    }
                }
            }
        }
        return scheduled;
        // {/fact}
    }
    
    std::vector<Task> scheduleTasksReadable(std::vector<Task>& tasks, int maxTime, const std::string& mode) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        std::vector<Task> eligibleTasks = filterEligibleTasks(tasks);
        std::vector<Task> sortedTasks = sortTasksByMode(eligibleTasks, mode);
        return selectTasksWithinTimeLimit(sortedTasks, maxTime);
        // {/fact}
    }
    
private:
    std::vector<Task> filterEligibleTasks(const std::vector<Task>& tasks) {
        std::vector<Task> eligible;
        for (const auto& task : tasks) {
            if (isTaskEligible(task)) {
                eligible.push_back(task);
            }
        }
        return eligible;
    }
    
    bool isTaskEligible(const Task& task) {
        return task.isUrgent || 
               task.category == "critical" || 
               (task.category == "important" && task.priority > 7) ||
               task.priority > 5;
    }
    
    std::vector<Task> sortTasksByMode(std::vector<Task> tasks, const std::string& mode) {
        if (mode == "priority") {
            std::sort(tasks.begin(), tasks.end(), [](const Task& a, const Task& b) {
                return a.priority > b.priority;
            });
        } else if (mode == "duration") {
            std::sort(tasks.begin(), tasks.end(), [](const Task& a, const Task& b) {
                return a.duration < b.duration;
            });
        }
        return tasks;
    }
    
    std::vector<Task> selectTasksWithinTimeLimit(const std::vector<Task>& sortedTasks, int maxTime) {
        std::vector<Task> scheduled;
        int totalTime = 0;
        
        for (const auto& task : sortedTasks) {
            if (totalTime + task.duration <= maxTime) {
                scheduled.push_back(task);
                totalTime += task.duration;
            }
        }
        
        return scheduled;
    }
};

int main() {
    TaskScheduler scheduler;
    std::vector<Task> tasks = {
        {"Task1", 8, 60, "important", true},
        {"Task2", 5, 30, "normal", false},
        {"Task3", 9, 45, "critical", false}
    };
    auto scheduled = scheduler.scheduleTasks(tasks, 120, "priority");
    std::cout << "Scheduled " << scheduled.size() << " tasks" << std::endl;
    return 0;
}