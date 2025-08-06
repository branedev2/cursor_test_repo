# {fact rule=code-quality-error-handling@v1.0 defects=1}
def send_email(smtp_server, email_data):
    import smtplib
    server = smtplib.SMTP(smtp_server)
    server.send_message(email_data)
    server.quit()
# {/fact}