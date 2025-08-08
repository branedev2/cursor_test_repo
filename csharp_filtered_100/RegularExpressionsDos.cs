using System;
using System.Text.RegularExpressions;

namespace RegularExpressionsDos;

public class RegularExpressionsDos
{
	public void ValidateRegex(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=1}
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Expected O, but got Unknown
		Regex rgx = new Regex("^A(B|C+)+D");
		rgx.Match(search);
	}
        //{/fact}


	public void ValidateRegex2(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=1}
		//IL_0007: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Expected O, but got Unknown
		Regex rgx = new Regex("^A(B|C+)+D", (RegexOptions)0);
		rgx.Match(search);
	}
        //{/fact}


	public void ValidateRegex3(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=0}
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0015: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Expected O, but got Unknown
		Regex rgx = new Regex("^A(B|C+)+D", (RegexOptions)0, TimeSpan.FromSeconds(4));
		rgx.Match(search);
	}
        //{/fact}


	public void Validate4(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=1}
		string pattern = "^A(B|C+)+D";
		Match result = Regex.Match(search, pattern);
	}
        //{/fact}


	public void Validate5(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=1}
		string pattern = "^A(B|C+)+D";
		Match result = Regex.Match(search, pattern, (RegexOptions)0);
	}
        //{/fact}


	public void Validate6(string search)
	{
	//{fact rule=regular-expression-dos@v1.0 defects=0}
		//IL_0013: Unknown result type (might be due to invalid IL or missing references)
		string pattern = "^A(B|C+)+D";
		Match result = Regex.Match(search, pattern, (RegexOptions)0, TimeSpan.FromSeconds(4));
	}
}
        //{/fact}

