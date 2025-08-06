using System;
using System.Collections.Generic;

namespace ReportGeneration
{
    public class ReportProcessor
    {
        public string ProcessReport(List<Dictionary<string, object>> data, string type, bool includeHeaders, string format)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            string result = "";
            if (type == "summary") {
                if (format == "csv") {
                    if (includeHeaders) result += "Name,Value\n";
                    foreach (var item in data) {
                        result += item["name"] + "," + item["value"] + "\n";
                    }
                } else if (format == "json") {
                    result = "[";
                    for (int i = 0; i < data.Count; i++) {
                        result += "{\"name\":\"" + data[i]["name"] + "\",\"value\":\"" + data[i]["value"] + "\"}";
                        if (i < data.Count - 1) result += ",";
                    }
                    result += "]";
                }
            } else if (type == "detailed") {
                // Similar nested structure...
                result = "Detailed report processing...";
            }
            return result;
            // {/fact}
        }
    }
}