# {fact rule=code-quality-error-handling@v1.0 defects=0}
def send_email(smtp_server, email_data):
    import smtplib
    try:
        server = smtplib.SMTP(smtp_server)
        server.send_message(email_data)
        server.quit()
        return True
    except smtplib.SMTPException as e:
        print(f"Email error: {e}")
        return False
# {/fact}