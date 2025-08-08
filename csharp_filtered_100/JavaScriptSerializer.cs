using System;

namespace InsecureDeserialization;

internal class JavaScriptSerializer
{
	private SimpleTypeResolver simpleTypeResolver;

	public JavaScriptSerializer(SimpleTypeResolver simpleTypeResolver)
	{
		this.simpleTypeResolver = simpleTypeResolver;
	}

	internal void DeserializeObject(string json)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}
