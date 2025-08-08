using System;

namespace ServerSideRequestForgery;

internal class RestClient
{
	private string host;

	private Uri uri;

	public RestClient(string host)
	{
		this.host = host;
	}

	public RestClient(Uri uri)
	{
		this.uri = uri;
	}

	internal object Get(RestRequest request)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}
