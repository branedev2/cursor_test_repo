using System.Net;

namespace HttpListenerWildcard;

internal class MyBadHttpListener
{
	public static void HttpListenerWildcard()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpListener val = new HttpListener();
		//{fact rule=module-injection@v1.0 defects=1}
		val.Prefixes.Add("https://*:8080");
		//{/fact}
		//{fact rule=module-injection@v1.0 defects=1}
		val.Prefixes.Add("http://+:8080");
		//{/fact}
		//{fact rule=module-injection@v1.0 defects=1}
		val.Prefixes.Add("https://*:8080");
		//{/fact}
		//{fact rule=module-injection@v1.0 defects=1}
		val.Prefixes.Add("https://+:8080");
		//{/fact}
		//{fact rule=module-injection@v1.0 defects=1}
		val.Prefixes.Add("https://*.com:8080");
		//{/fact}
		//{fact rule=module-injection@v1.0 defects=0}
		val.Prefixes.Add("https://0.0.0.0:8080");
		//{/fact}
		
		//{fact rule=module-injection@v1.0 defects=0}
		val.Prefixes.Add("http://www.contoso.com:8080/");
		//{/fact}

		//{fact rule=module-injection@v1.0 defects=0}
		val.Prefixes.Add("http://*.test.com:8080");
		val.Start();
		//{/fact}
	}
}
