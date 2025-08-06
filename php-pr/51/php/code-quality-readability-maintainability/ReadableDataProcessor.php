<?php

class ReadableDataProcessor
{
    private const PENDING_STATUS = 'pending';
    private const PROCESSING_STATUS = 'processing';
    private const HIGH_PRIORITY = 1;
    private const MEDIUM_PRIORITY = 2;
    private const URGENT_TYPE = 'urgent';

    public function processTasks($tasks)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        foreach ($tasks as &$task) {
            if ($this->shouldProcessTask($task)) {
                $this->processTask($task);
            }
        }
        // {/fact}
    }

    private function shouldProcessTask($task)
    {
        return $task['status'] === self::PENDING_STATUS;
    }

    private function processTask(&$task)
    {
        $message = $this->getProcessingMessage($task);
        echo $message . "\n";
        $task['status'] = self::PROCESSING_STATUS;
    }

    private function getProcessingMessage($task)
    {
        switch ($task['priority']) {
            case self::HIGH_PRIORITY:
                return $task['type'] === self::URGENT_TYPE 
                    ? 'Processing urgent high priority task'
                    : 'Processing high priority task';
            case self::MEDIUM_PRIORITY:
                return 'Processing medium priority task';
            default:
                return 'Processing low priority task';
        }
    }
}