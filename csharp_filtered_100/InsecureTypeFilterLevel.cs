using System.Collections;
using System.Runtime.Serialization.Formatters;

namespace InsecureDeserialization;

public class InsecureTypeFilterLevel
{
	private object formatterProps;

	public void SetTFL(string json)
	{
		//IL_0023: Unknown result type (might be due to invalid IL or missing references)
		//IL_0029: Expected O, but got Unknown
		//{fact rule=untrusted-deserialization@v1.0 defects=1}
		BinaryServerFormatterSinkProvider serverProvider = new BinaryServerFormatterSinkProvider(formatterProps, null);
		serverProvider.TypeFilterLevel = (TypeFilterLevel)3;
            //{/fact}
		//{fact rule=untrusted-deserialization@v1.0 defects=1}
		BinaryServerFormatterSinkProvider provider = new BinaryServerFormatterSinkProvider(formatterProps, null);
		Hashtable dict = new Hashtable();
		dict[(object)"typeFilterLevel"] = "Full";
            //{/fact}
		//{fact rule=untrusted-deserialization@v1.0 defects=1}
		BinaryServerFormatterSinkProvider serverProvider2 = new BinaryServerFormatterSinkProvider(dict, null);
	}
            //{/fact}
}
