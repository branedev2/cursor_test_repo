using System;

namespace InsecureDeserialization;

public class InsecureJavascriptSerializerDeserialization
{
	public void JavascriptSerializerDeserialization(string json)
	{
		try
		{	 //{fact rule=untrusted-deserialization@v1.0 defects=1}
			JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer(new SimpleTypeResolver());
			javaScriptSerializer.DeserializeObject(json);
		}
		catch (System.Exception ex)
		{
			Console.WriteLine((object)ex);
		}
	} //{/fact}
}
