interface Task {
    name: string;
    priority: number;
    duration: number;
    category: string;
    isUrgent: boolean;
}

class TaskScheduler {
    scheduleTasks(tasks: Task[], maxTime: number, mode: string): Task[] {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        const scheduled: Task[] = [];
        let totalTime = 0;
        
        if (mode === 'priority') {
            for (let p = 10; p >= 1; p--) {
                for (const task of tasks) {
                    if (task.priority === p && totalTime + task.duration <= maxTime) {
                        if (task.isUrgent || task.category === 'critical' || (task.category === 'important' && p > 7)) {
                            scheduled.push(task);
                            totalTime += task.duration;
                        }
                    }
                }
            }
        } else if (mode === 'duration') {
            for (let d = 1; d <= 480; d++) {
                for (const task of tasks) {
                    if (task.duration === d && totalTime + task.duration <= maxTime) {
                        if (task.isUrgent || task.priority > 5 || task.category === 'critical') {
                            scheduled.push(task);
                            totalTime += task.duration;
                        }
                    }
                }
            }
        }
        return scheduled;
        // {/fact}
    }

    scheduleTasksReadable(tasks: Task[], maxTime: number, mode: string): Task[] {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        const eligibleTasks = this.filterEligibleTasks(tasks);
        const sortedTasks = this.sortTasksByMode(eligibleTasks, mode);
        return this.selectTasksWithinTimeLimit(sortedTasks, maxTime);
        // {/fact}
    }

    private filterEligibleTasks(tasks: Task[]): Task[] {
        return tasks.filter(task => this.isTaskEligible(task));
    }

    private isTaskEligible(task: Task): boolean {
        return task.isUrgent ||
               task.category === 'critical' ||
               (task.category === 'important' && task.priority > 7) ||
               task.priority > 5;
    }

    private sortTasksByMode(tasks: Task[], mode: string): Task[] {
        const tasksCopy = [...tasks];
        
        switch (mode) {
            case 'priority':
                return tasksCopy.sort((a, b) => b.priority - a.priority);
            case 'duration':
                return tasksCopy.sort((a, b) => a.duration - b.duration);
            default:
                return tasksCopy;
        }
    }

    private selectTasksWithinTimeLimit(sortedTasks: Task[], maxTime: number): Task[] {
        const scheduled: Task[] = [];
        let totalTime = 0;
        
        for (const task of sortedTasks) {
            if (totalTime + task.duration <= maxTime) {
                scheduled.push(task);
                totalTime += task.duration;
            }
        }
        
        return scheduled;
    }
}

const scheduler = new TaskScheduler();
const tasks: Task[] = [
    { name: 'Task1', priority: 8, duration: 60, category: 'important', isUrgent: true },
    { name: 'Task2', priority: 5, duration: 30, category: 'normal', isUrgent: false },
    { name: 'Task3', priority: 9, duration: 45, category: 'critical', isUrgent: false }
];
const scheduled = scheduler.scheduleTasks(tasks, 120, 'priority');
console.log(`Scheduled ${scheduled.length} tasks`);