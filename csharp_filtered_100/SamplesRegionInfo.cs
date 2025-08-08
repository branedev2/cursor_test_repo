using System;
using System.Globalization;
using System.IO;
using System.IO.Pipes;

public class SamplesRegionInfo
{
	public static void Main1()
	{
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		//IL_0012: Unknown result type (might be due to invalid IL or missing references)
		//IL_001c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0022: Expected O, but got Unknown
		//IL_0024: Unknown result type (might be due to invalid IL or missing references)
		//IL_002a: Expected O, but got Unknown
		//IL_002c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0032: Expected O, but got Unknown
		RegionInfo val = new RegionInfo("US");
		RegionInfo val2 = new RegionInfo(new CultureInfo("en-US", false).LCID);
		AnonymousPipeServerStream val3 = new AnonymousPipeServerStream((PipeDirection)2, (HandleInheritability)1);
		try
		{
			StreamWriter val4 = new StreamWriter((Stream)(object)val3);
			try
			{
				//{fact rule=correctness-regioninfo-interop@v1.0 defects=1}
				((TextWriter)val4).WriteLine((object)val);
				//{/fact}

				//{fact rule=correctness-regioninfo-interop@v1.0 defects=0}
				((TextWriter)val4).WriteLine((object)val2);				
			}
			//{/fact}
			finally
			{
				((System.IDisposable)val4)?.Dispose();
			}
		}
		finally
		{
			((System.IDisposable)val3)?.Dispose();
		}
	}
}
