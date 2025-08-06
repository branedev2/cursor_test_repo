using System;
using System.IO;

namespace ResourceManagement
{
    public class ResourceManager
    {
        public void ProcessResource(string resourcePath)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            FileStream stream = null;
            try
            {
                stream = new FileStream(resourcePath, FileMode.Open);
                // Process resource
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                // Resource leak - stream not disposed in catch block
            }
            finally
            {
                stream?.Dispose();
            }
            // {/fact}
        }
    }
}