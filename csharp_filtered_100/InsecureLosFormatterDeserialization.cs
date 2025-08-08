using System;

namespace InsecureDeserialization;

public class InsecureLosFormatterDeserialization
{
	public void LosFormatterDeserialization(string json)
	{
		try
		{
			//{fact rule=untrusted-deserialization@v1.0 defects=1}
			LosFormatter losFormatter = new LosFormatter();
			object obj = losFormatter.Deserialize(json);
		}
		catch (System.Exception ex)
		{
			Console.WriteLine((object)ex);
		}
	}//{/fact}
}
