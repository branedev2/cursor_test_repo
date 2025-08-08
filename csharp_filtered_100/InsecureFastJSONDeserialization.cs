using System;

namespace InsecureDeserialization;

public class InsecureFastJSONDeserialization
{
	public void FastJSONDeserialization(string json)
	{
		try
		{ 	//{fact rule=untrusted-deserialization@v1.0 defects=1}
			object obj = JSON.ToObject(json, new JSONParameters
			{
				BadListTypeChecking = false
			});
		}
		catch (System.Exception ex)
		{
			Console.WriteLine((object)ex);
		}
	}
}
 //{/fact}