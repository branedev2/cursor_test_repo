<?php

class DataProcessor
{
    public function processTasks($tasks)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        for ($i = 0; $i < count($tasks); $i++) {
            $task = $tasks[$i];
            $status = $task['status'];
            $priority = $task['priority'];
            $type = $task['type'];
            
            if ($status == 'pending') {
                if ($priority == 1) {
                    if ($type == 'urgent') {
                        echo "Processing urgent high priority task\n";
                        $task['status'] = 'processing';
                    } else {
                        echo "Processing high priority task\n";
                        $task['status'] = 'processing';
                    }
                } else if ($priority == 2) {
                    echo "Processing medium priority task\n";
                    $task['status'] = 'processing';
                } else {
                    echo "Processing low priority task\n";
                    $task['status'] = 'processing';
                }
            }
        }
        // {/fact}
    }
}