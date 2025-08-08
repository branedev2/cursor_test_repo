using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using Newtonsoft.Json;

namespace InsecureDeserialization;

public class InsecureNewtonsoftDeserialization
{
	private object someJson;

	private object traceWriter;

	[field: CompilerGenerated]
	// [field: DebuggerBrowsable(/*Could not decode attribute arguments.*/)]
	public object InvariantCulture
	{
		[CompilerGenerated]
		get;
		[CompilerGenerated]
		private set;
	}

	public void NewtonsoftDeserialization(string json)
	{
		try
		{
			JsonConvert.DeserializeObject<object>(json, new JsonSerializerSettings
			{	//{fact rule=untrusted-deserialization@v1.0 defects=1}
				TypeNameHandling = TypeNameHandling.All
			});
		}
		catch (System.Exception ex)
		{
			Console.WriteLine((object)ex);
		}
	}//{/fact}

	public void ConverterOverrideSettings()
	{//{fact rule=untrusted-deserialization@v1.0 defects=1}
		JsonConvert.DefaultSettings = () => new JsonSerializerSettings
		{
			TypeNameHandling = TypeNameHandling.Auto
		};
		Bar bar = JsonConvert.DeserializeObject<Bar>(someJson);
	}//{/fact}

	public void ConverterOverrideSettingsStaggeredInitialize()
	{	//{fact rule=untrusted-deserialization@v1.0 defects=1}
		JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings();
		jsonSerializerSettings.TypeNameHandling = TypeNameHandling.Auto;
		Bar bar = JsonConvert.DeserializeObject<Bar>(someJson, jsonSerializerSettings);
	}//{/fact}

	public void ConverterOverrideSettingsMultipleSettingArgs()
	{
		JsonConvert.DefaultSettings = [CompilerGenerated] () => new JsonSerializerSettings
		{
			Culture = InvariantCulture,
			//{fact rule=untrusted-deserialization@v1.0 defects=1}
			TypeNameHandling = TypeNameHandling.Auto,
			TraceWriter = traceWriter
		};
		Bar bar = JsonConvert.DeserializeObject<Bar>(someJson);
	}
	//{/fact}

	public void SafeDeserialize()
	{
		Bar bar = JsonConvert.DeserializeObject<Bar>(someJson, new JsonSerializerSettings
		{   //{fact rule=untrusted-deserialization@v1.0 defects=0}
			TypeNameHandling = TypeNameHandling.None
		});
	}
	//{/fact}

	public void SafeDefaults()
	{

        //{fact rule=untrusted-deserialization@v1.0 defects=0}
		Bar bar = JsonConvert.DeserializeObject<Bar>(someJson);
	}
}//{/fact}
