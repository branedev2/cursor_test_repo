using System;
using System.Xml;

public class Foonew
{
	public void LoadBad(string input)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Expected O, but got Unknown
		XmlDocument val = new XmlDocument();
		val.XmlResolver = new XmlUrlResolver();
		 //{fact rule=xml-external-entity@v1.0 defects=1}
		val.Load(input);
		Console.WriteLine(((XmlNode)val).InnerText);
		Console.ReadLine();
	}
    //{/fact}

	public static void StaticLoadBad(string input)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Expected O, but got Unknown
		XmlDocument val = new XmlDocument();
		val.XmlResolver = new XmlUrlResolver();
		//{fact rule=xml-external-entity@v1.0 defects=1}
		val.Load(input);
		Console.WriteLine(((XmlNode)val).InnerText);
		Console.ReadLine();
	}
    //{/fact}

	public void LoadGood(string input)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		XmlDocument val = new XmlDocument();
		//{fact rule=xml-external-entity@v1.0 defects=0}
		val.Load(input);
		Console.WriteLine(((XmlNode)val).InnerText);
		Console.ReadLine();
	}
}    //{/fact}
