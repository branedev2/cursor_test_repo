using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization.Formatters;

namespace InsecureDeserialization;

internal class BinaryServerFormatterSinkProvider
{
	private object formatterProps;

	private object value;

	[field: CompilerGenerated]
//	[field: DebuggerBrowsable(/*Could not decode attribute arguments.*/)]
	public TypeFilterLevel TypeFilterLevel
	{
		[CompilerGenerated]
		get;
		[CompilerGenerated]
		internal set;
	}

	public BinaryServerFormatterSinkProvider(object formatterProps, object value)
	{
		this.formatterProps = formatterProps;
		this.value = value;
	}
}
