using System;
using System.IO;

namespace FileOperations
{
    public class FileProcessor
    {
        public string ReadFileContent(string filePath)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=0}
            try
            {
                return File.ReadAllText(filePath);
            }
            catch (FileNotFoundException ex)
            {
                Console.WriteLine($"File not found: {ex.Message}");
                return string.Empty;
            }
            catch (UnauthorizedAccessException ex)
            {
                Console.WriteLine($"Access denied: {ex.Message}");
                return string.Empty;
            }
            catch (IOException ex)
            {
                Console.WriteLine($"IO error: {ex.Message}");
                return string.Empty;
            }
            // {/fact}
        }
    }
}