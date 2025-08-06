package main

import (
	"fmt"
	"sort"
)

type Task struct {
	Name     string
	Priority int
	Duration int
	Category string
	IsUrgent bool
}

type TaskScheduler struct{}

func (ts *TaskScheduler) ScheduleTasks(tasks []Task, maxTime int, mode string) []Task {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	var scheduled []Task
	totalTime := 0
	
	if mode == "priority" {
		for p := 10; p >= 1; p-- {
			for _, task := range tasks {
				if task.Priority == p && totalTime+task.Duration <= maxTime {
					if task.IsUrgent || task.Category == "critical" || (task.Category == "important" && p > 7) {
						scheduled = append(scheduled, task)
						totalTime += task.Duration
					}
				}
			}
		}
	} else if mode == "duration" {
		for d := 1; d <= 480; d++ {
			for _, task := range tasks {
				if task.Duration == d && totalTime+task.Duration <= maxTime {
					if task.IsUrgent || task.Priority > 5 || task.Category == "critical" {
						scheduled = append(scheduled, task)
						totalTime += task.Duration
					}
				}
			}
		}
	}
	return scheduled
	// {/fact}
}

func (ts *TaskScheduler) ScheduleTasksReadable(tasks []Task, maxTime int, mode string) []Task {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	eligibleTasks := ts.filterEligibleTasks(tasks)
	sortedTasks := ts.sortTasksByMode(eligibleTasks, mode)
	return ts.selectTasksWithinTimeLimit(sortedTasks, maxTime)
	// {/fact}
}

func (ts *TaskScheduler) filterEligibleTasks(tasks []Task) []Task {
	var eligible []Task
	for _, task := range tasks {
		if ts.isTaskEligible(task) {
			eligible = append(eligible, task)
		}
	}
	return eligible
}

func (ts *TaskScheduler) isTaskEligible(task Task) bool {
	return task.IsUrgent ||
		task.Category == "critical" ||
		(task.Category == "important" && task.Priority > 7) ||
		task.Priority > 5
}

func (ts *TaskScheduler) sortTasksByMode(tasks []Task, mode string) []Task {
	tasksCopy := make([]Task, len(tasks))
	copy(tasksCopy, tasks)
	
	switch mode {
	case "priority":
		sort.Slice(tasksCopy, func(i, j int) bool {
			return tasksCopy[i].Priority > tasksCopy[j].Priority
		})
	case "duration":
		sort.Slice(tasksCopy, func(i, j int) bool {
			return tasksCopy[i].Duration < tasksCopy[j].Duration
		})
	}
	return tasksCopy
}

func (ts *TaskScheduler) selectTasksWithinTimeLimit(sortedTasks []Task, maxTime int) []Task {
	var scheduled []Task
	totalTime := 0
	
	for _, task := range sortedTasks {
		if totalTime+task.Duration <= maxTime {
			scheduled = append(scheduled, task)
			totalTime += task.Duration
		}
	}
	
	return scheduled
}

func main() {
	scheduler := &TaskScheduler{}
	tasks := []Task{
		{"Task1", 8, 60, "important", true},
		{"Task2", 5, 30, "normal", false},
		{"Task3", 9, 45, "critical", false},
	}
	scheduled := scheduler.ScheduleTasks(tasks, 120, "priority")
	fmt.Printf("Scheduled %d tasks\n", len(scheduled))
}