using System;

namespace EmailServices
{
    public class EmailService
    {
        public void SendEmail(string to, string subject, string body)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"Sending email to: {to}");
            Console.WriteLine($"Subject: {subject}");
            Console.WriteLine($"Body: {body}");
            
            try
            {
                // Email sending logic
                Console.WriteLine($"Email sent successfully to {to} with content: {body}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send email to {to}: {ex.Message}. Content was: {body}");
            }
            // {/fact}
        }
    }
}