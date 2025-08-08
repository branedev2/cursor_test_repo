using System;
using System.Diagnostics;

namespace ServerSideRequestForgery;

public class Ssrf2
{
	private object result;
//{fact rule=server-side-request-forgery@v1.0 defects=1}
	public void RestClientGet(string host)
	{
		try
		{
			RestClient restClient = new RestClient(host);
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}
//{/fact}

   //{fact rule=server-side-request-forgery@v1.0 defects=0}
	public void RestClientGet1(string host)
	{
		try
		{
			RestClient restClient = new RestClient("constant");
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}

    //{/fact}
    
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
	public void RestClientGetWithStringConcatenation(string host)
	{
		string host2 = host + "constant";
		try
		{
			RestClient restClient = new RestClient(host2);
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}
//{/fact}
//{fact rule=server-side-request-forgery@v1.0 defects=0}
	public void RestClientGetWithStringConcatenation1(string host)
	{
		string host2 = "constant";
		try
		{
			RestClient restClient = new RestClient(host2);
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}
//{/fact}
//{fact rule=server-side-request-forgery@v1.0 defects=1}
	public void RestClientGetWithUri(string host)
	{
		//IL_000c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Expected O, but got Unknown
		Uri uri = new Uri(host + "constant");
		try
		{
			RestClient restClient = new RestClient(uri);
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}
//{/fact}
//{fact rule=server-side-request-forgery@v1.0 defects=0}
	public void RestClientGetWithUri1(string host)
	{
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		Uri uri = new Uri("constant");
		try
		{
			RestClient restClient = new RestClient(uri);
			RestRequest request = new RestRequest("/");
			object obj = restClient.Get(request);
		}
		catch (System.Exception ex)
		{
			Debug.WriteLine((object)ex);
		}
	}
	//{/fact}
}
