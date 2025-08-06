<?php

class ReadableRequestHandler
{
    public function processReport($data, $reportType, $includeHeaders, $format)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        $processedData = $this->getProcessedData($data, $reportType);
        
        switch (strtolower($format)) {
            case 'csv':
                return $this->generateCsvReport($processedData, $includeHeaders);
            case 'json':
                return $this->generateJsonReport($processedData);
            default:
                throw new InvalidArgumentException("Unsupported format: {$format}");
        }
        // {/fact}
    }

    private function getProcessedData($data, $reportType)
    {
        switch (strtolower($reportType)) {
            case 'summary':
                return $this->processSummaryData($data);
            case 'detailed':
                return $this->processDetailedData($data);
            default:
                throw new InvalidArgumentException("Unsupported report type: {$reportType}");
        }
    }

    private function processSummaryData($data)
    {
        return $data; // Summary processing logic
    }

    private function processDetailedData($data)
    {
        return $data; // Detailed processing logic
    }

    private function generateCsvReport($data, $includeHeaders)
    {
        $csv = '';
        
        if ($includeHeaders && !empty($data)) {
            $csv .= "Name,Value\n";
        }
        
        foreach ($data as $item) {
            $csv .= "{$item['name']},{$item['value']}\n";
        }
        
        return $csv;
    }

    private function generateJsonReport($data)
    {
        return json_encode($data);
    }
}