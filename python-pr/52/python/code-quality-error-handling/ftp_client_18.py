# {fact rule=code-quality-error-handling@v1.0 defects=1}
def download_file(ftp_server, filename):
    import ftplib
    ftp = ftplib.FTP(ftp_server)
    ftp.login()
    ftp.retrbinary('RETR ' + filename, open(filename, 'wb').write)
    ftp.quit()
# {/fact}