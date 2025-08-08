using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

public class Fo
{
	private void SomeFunction(string arg1, X509Certificate2Collection certCollection)
	{	//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Collection(certCollection, false);
	}
	//{/fact}
	private void SomeFunction2(string arg1, X509Certificate2Collection certCollection)
	{
		//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Collection(certCollection, false);
	}
	//{/fact}
	private void SomeFunction3(string arg1, X509Certificate2Collection certCollection)
	{
		//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Collection(certCollection, false);
	}
	//{/fact}

	private void SomeFunction4(string arg1, X509Store certCollection)
	{
		//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Store(certCollection, false);
	}
	//{/fact}
	private void SomeFunction5(string arg1, X509Store certCollection)
	{
		//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Store(certCollection, false);
	}
	//{/fact}
	private void SomeFunction6(string arg1, X509Store certCollection)
	{	
		//{fact rule=sensitive-information-leak@v1.0 defects=0}
		SslCertificateTrust val = SslCertificateTrust.CreateForX509Store(certCollection, false);
	}
}
	//{/fact}
