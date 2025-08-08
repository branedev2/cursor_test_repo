using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace InsecureDeserialization;

internal class JsonConvert
{
	[field: CompilerGenerated]
	// [field: DebuggerBrowsable(/*Could not decode attribute arguments.*/)]
	public static Func<JsonSerializerSettings> DefaultSettings
	{
		[CompilerGenerated]
		get;
		[CompilerGenerated]
		internal set;
	}

	internal static void DeserializeObject<T>(string json, JsonSerializerSettings jsonSerializerSettings)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}

	internal static T DeserializeObject<T>(object someJson, JsonSerializerSettings settings)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}

	internal static T DeserializeObject<T>(object someJson)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}
