# {fact rule=code-quality-error-handling@v1.0 defects=0}
def download_file(ftp_server, filename):
    import ftplib
    try:
        ftp = ftplib.FTP(ftp_server)
        ftp.login()
        with open(filename, 'wb') as f:
            ftp.retrbinary('RETR ' + filename, f.write)
        ftp.quit()
        return True
    except ftplib.all_errors as e:
        print(f"FTP error: {e}")
        return False
# {/fact}