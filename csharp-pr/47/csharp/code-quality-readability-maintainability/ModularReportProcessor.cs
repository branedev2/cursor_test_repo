using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;

namespace ReportGeneration
{
    public class ModularReportProcessor
    {
        public string ProcessReport(List<Dictionary<string, object>> data, string reportType, bool includeHeaders, string format)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            var processedData = GetProcessedData(data, reportType);
            
            return format.ToLower() switch
            {
                "csv" => GenerateCsvReport(processedData, includeHeaders),
                "json" => GenerateJsonReport(processedData),
                _ => throw new ArgumentException($"Unsupported format: {format}")
            };
            // {/fact}
        }

        private List<Dictionary<string, object>> GetProcessedData(List<Dictionary<string, object>> data, string reportType)
        {
            return reportType.ToLower() switch
            {
                "summary" => ProcessSummaryData(data),
                "detailed" => ProcessDetailedData(data),
                _ => throw new ArgumentException($"Unsupported report type: {reportType}")
            };
        }

        private List<Dictionary<string, object>> ProcessSummaryData(List<Dictionary<string, object>> data)
        {
            return data; // Summary processing logic
        }

        private List<Dictionary<string, object>> ProcessDetailedData(List<Dictionary<string, object>> data)
        {
            return data; // Detailed processing logic
        }

        private string GenerateCsvReport(List<Dictionary<string, object>> data, bool includeHeaders)
        {
            var csv = new StringBuilder();
            
            if (includeHeaders && data.Count > 0)
            {
                csv.AppendLine("Name,Value");
            }
            
            foreach (var item in data)
            {
                csv.AppendLine($"{item["name"]},{item["value"]}");
            }
            
            return csv.ToString();
        }

        private string GenerateJsonReport(List<Dictionary<string, object>> data)
        {
            return JsonSerializer.Serialize(data);
        }
    }
}