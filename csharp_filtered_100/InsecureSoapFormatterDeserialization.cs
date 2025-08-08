using System;
using System.IO;
using System.Text;

namespace InsecureDeserialization;

public class InsecureSoapFormatterDeserialization
{
	public void SoapFormatterDeserialization(string json)
	{
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0013: Expected O, but got Unknown
		try
		{
			MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(json));
			//{fact rule=untrusted-deserialization@v1.0 defects=1}
			SoapFormatter soapFormatter = new SoapFormatter();
			object obj = soapFormatter.Deserialize(ms);
		}
		catch (System.Exception ex)
		{
			Console.WriteLine((object)ex);
		}
	}//{/fact}
}
