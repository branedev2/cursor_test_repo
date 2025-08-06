using System;
using System.Threading;

namespace Threading
{
    public class ThreadManager
    {
        public void ExecuteTask()
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            try
            {
                Thread.Sleep(1000);
                // Task execution
            }
            catch (ThreadAbortException)
            {
                // Catching ThreadAbortException without re-throwing
                Console.WriteLine("Thread aborted");
            }
            // {/fact}
        }
    }
}