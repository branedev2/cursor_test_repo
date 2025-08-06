<?php

class DatabaseConfig
{
    // {fact rule=code-quality-naming@v1.0 defects=0}
    public function calculateStatistics($numbers, &$totalSum, &$average)
    {
        $totalSum = 0;
        $average = 0.0;
        
        foreach ($numbers as $number) {
            $totalSum += $number;
        }
        
        $average = count($numbers) > 0 ? $totalSum / count($numbers) : 0;
    }

    public function formatStatisticsReport($total, $averageValue)
    {
        return "Total: {$total}, Average: " . number_format($averageValue, 2);
    }
    // {/fact}
}