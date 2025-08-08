using System;
using System.IO;
using System.Xml;

internal class xmlreadersettings_unsafe_parser_override
{
	public void ParseBad(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = DtdProcessing.Parse;
		XmlReader myReader = XmlReader.Create((TextReader)new StringReader(input), rs);
		while (myReader.Read())
		{
			Console.WriteLine(myReader.Value);
		}
		Console.ReadLine();
	}
//{/fact}

	public static void StaticParseBad(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = DtdProcessing.Parse;
		XmlReader myReader = XmlReader.Create((TextReader)new StringReader(input), rs);
		while (myReader.Read())
		{
			Console.WriteLine(myReader.Value);
		}
		Console.ReadLine();
	}
//{/fact}

	public void ParseBad2(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = DtdProcessing.Parse;
		XmlReader myReader = XmlReader.Create(input, rs);
		while (myReader.Read())
		{
			Console.WriteLine(myReader.Value);
		}
		Console.ReadLine();
	}
//{/fact}

	public void ParseBad3(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = DtdProcessing.Parse;
		StringReader reader = new StringReader(input);
		try
		{
			XmlReader myReader = XmlReader.Create((TextReader)(object)reader, rs);
			while (myReader.Read())
			{
				Console.WriteLine(myReader.Value);
			}
			Console.ReadLine();
		}
		finally
		{
			((System.IDisposable)reader)?.Dispose();
		}
	}
//{/fact}

	public void ParseGood(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = (DtdProcessing)1;
		XmlReader myReader = XmlReader.Create((TextReader)new StringReader(input), rs);
		while (myReader.Read())
		{
			Console.WriteLine(myReader.Value);
		}
		Console.ReadLine();
	}
//{/fact}

	public void ParseGood2(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_000e: Expected O, but got Unknown
		//IL_004d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0054: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		StringReader reader2 = new StringReader(input);
		try
		{
			XmlReader myReader2 = XmlReader.Create((TextReader)(object)reader2);
			while (myReader2.Read())
			{
				Console.WriteLine(myReader2.Value);
			}
			Console.ReadLine();
		}
		finally
		{
			((System.IDisposable)reader2)?.Dispose();
		}
		rs.DtdProcessing = (DtdProcessing)2;
		//{/fact}
		//{fact rule=xml-external-entity@v1.0 defects=0}
		StringReader reader = new StringReader(input);
		try
		{
			XmlReader myReader = XmlReader.Create((TextReader)(object)reader);
			while (myReader.Read())
			{
				Console.WriteLine(myReader.Value);
			}
			Console.ReadLine();
		}
		finally
		{
			((System.IDisposable)reader)?.Dispose();
		}
	}
//{/fact}

	public void ParseGood3(string input)
	{
        //{fact rule=xml-external-entity@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_0024: Expected O, but got Unknown
		XmlReaderSettings rs = new XmlReaderSettings();
		rs.DtdProcessing = (DtdProcessing)2;
		string notInput = someSafeLoad();
		//{/fact}
		//{fact rule=xml-external-entity@v1.0 defects=0}
		XmlReader myReader = XmlReader.Create((TextReader)new StringReader(notInput), rs);
		while (myReader.Read())
		{
			Console.WriteLine(myReader.Value);
		}
		Console.ReadLine();
	}


	private string someSafeLoad()
	{

		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
	//{/fact}
}

