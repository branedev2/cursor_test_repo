using System;
using System.Runtime.Serialization;
using System.Xml;

namespace DCR;

//{fact rule=untrusted-deserialization@v1.0 defects=1}
internal class MyDCR : DataContractResolver
{
	public void ResolveDataContract()
	{
	}

	public override System.Type? ResolveName(string typeName, string? typeNamespace, System.Type? declaredType, DataContractResolver knownTypeResolver)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}

	public override bool TryResolveType(System.Type type, System.Type? declaredType, DataContractResolver knownTypeResolver, out XmlDictionaryString? typeName, out XmlDictionaryString? typeNamespace)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}

//{/fact}