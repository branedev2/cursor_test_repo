using System;
using System.IO;
using System.Xml;

namespace SomeNamespace;

public class Foo
{
	public void ReaderBad(string userInput)
	{
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		XmlTextReader xmlTextReader = new XmlTextReader(new StringReader(userInput));
		myReader.XmlResolver = new XmlUrlResolver();
		//{fact rule=xml-external-entity@v1.0 defects=1}
		while (xmlTextReader.Read())
		{
			if (xmlTextReader.NodeType == XmlNodeType.Element)
			{	//{/fact}
				//{fact rule=xml-external-entity@v1.0 defects=1}
				Console.WriteLine(xmlTextReader.ReadElementContentAsString());
			}
		}
		Console.ReadLine();
	}
	//{/fact}

	public static void StaticReaderBad(string userInput)
	{
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		XmlTextReader xmlTextReader = new XmlTextReader(new StringReader(userInput));
		myReader.XmlResolver = new XmlUrlResolver();
		//{fact rule=xml-external-entity@v1.0 defects=1}
		while (xmlTextReader.Read())
		{
			if (xmlTextReader.NodeType == XmlNodeType.Element)
			{	//{/fact}
				//{fact rule=xml-external-entity@v1.0 defects=1}
				Console.WriteLine(xmlTextReader.ReadElementContentAsString());
			}
		}
		Console.ReadLine();
	}
	//{/fact}
	public void ReaderGood(string userInput)
	{
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		XmlTextReader xmlTextReader = new XmlTextReader(new StringReader(userInput));
		xmlTextReader.DtdProcessing = (object)(DtdProcessing)0;
		//{fact rule=xml-external-entity@v1.0 defects=0}
		while (xmlTextReader.Read())
		{
			if (xmlTextReader.NodeType == XmlNodeType.Element)
			{
				//{/fact}
                    
                //{fact rule=xml-external-entity@v1.0 defects=0}
				Console.WriteLine(xmlTextReader.ReadElementContentAsString());
			}
			//{/fact}
		}
		Console.ReadLine();
	}
}
