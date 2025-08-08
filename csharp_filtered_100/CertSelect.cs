using System;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

internal class CertSelect
{
	private static void Main()
	{
		//IL_0007: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Expected O, but got Unknown
		//IL_009b: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a2: Expected O, but got Unknown
		X509Store val = new X509Store("MY", (StoreLocation)1);
		val.Open((OpenFlags)4);
		X509Certificate2Collection certificates = val.Certificates;
		X509Certificate2Collection fcollection = certificates.Find((X509FindType)6, (object)System.DateTime.Now, false);
		X509Certificate2Collection val2 = X509Certificate2UI.SelectFromCollection(fcollection, "Test Certificate Select", "Select a certificate from the following list to get information on that certificate", X509SelectionFlag.MultiSelection);
		X509Certificate2Enumerator enumerator = val2.GetEnumerator();
		try
		{
			while (enumerator.MoveNext())
			{
				X509Certificate2 current = enumerator.Current;
				try
				{
					//{fact rule=aws-kms-reencryption@v1.0 defects=1}
					Console.WriteLine((object)current.PrivateKey);
				}
				catch (CryptographicException)
				{
					Console.WriteLine("Information could not be written out for this certificate.");
				}
				//{/fact}
			}
		}
		finally
		{
			((System.IDisposable)enumerator)?.Dispose();
		}
		val.Close();
		X509Certificate2 val4 = new X509Certificate2();
		//{fact rule=aws-kms-reencryption@v1.0 defects=1}
		AsymmetricAlgorithm privateKey = val4.PrivateKey;
	}
}
//{/fact}