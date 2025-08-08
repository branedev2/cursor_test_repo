using System;
using System.Diagnostics;
using System.Net.Http;

namespace ServerSideRequestForgery;

public class Ssrf
{
	public void HttpClientAsync(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(host).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientAsync2(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(host + "constant").Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}
  //{fact rule=server-side-request-forgery@v1.0 defects=0}
	public void HttpClientAsync1(string host)
	{

		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync("constant").Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientAsyncWithStringConcatenation(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0013: Expected O, but got Unknown
		string uri = host + "constant";
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientAsyncWithStringConcatenation1(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=0}
		//IL_0007: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Expected O, but got Unknown
		string uri = "constant";
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientAsyncWithUri(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_0008: Expected O, but got Unknown
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_000e: Expected O, but got Unknown
		Uri uri = new Uri(host);
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientAsyncWithUri1(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=0}
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		//IL_000c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Expected O, but got Unknown
		Uri uri = new Uri("constant");
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsync(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(host).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsync1(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync("constant").Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsyncWithStringConcatenation(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0013: Expected O, but got Unknown
		string uri = host + "constant";
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsyncWithStringConcatenation1(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=0}
		//IL_0007: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Expected O, but got Unknown
		string uri = "constant";
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsyncWithUri(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=1}
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_0008: Expected O, but got Unknown
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_000e: Expected O, but got Unknown
		Uri uri = new Uri(host);
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
        //{/fact}

	public void HttpClientStringAsyncWithUri1(string host)
	{
	//{fact rule=server-side-request-forgery@v1.0 defects=0}
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		//IL_000c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Expected O, but got Unknown
		Uri uri = new Uri("constant");
		HttpClient client = new HttpClient();
		try
		{
			HttpResponseMessage response = client.GetAsync(uri).Result;
		}
		catch (System.Exception e)
		{
			Debug.WriteLine((object)e);
		}
	}
}
        //{/fact}
