using System;
using System.Text.RegularExpressions;

namespace RegularExpressionsDosInfiniteTimeout;

public class RegularExpressionsDosInfiniteTimeout
{
	private static string pattern;

   
	private Regex rgx = new Regex(pattern, (RegexOptions)1, TimeSpan.FromSeconds(1.0));

    //{fact rule=regular-expression-dos-infinite-timeout@v1.0 defects=1}
	private Regex rgx0 = new Regex(pattern, (RegexOptions)1, TimeSpan.FromSeconds(10.0));
	//{/fact}

	//{fact rule=regular-expression-dos-infinite-timeout@v1.0 defects=1}
	private Regex rgx1 = new Regex(pattern, (RegexOptions)1, TimeSpan.FromSeconds(10.0));
    //{/fact}
	
	//{fact rule=regular-expression-dos-infinite-timeout@v1.0 defects=1}
	private Regex rgx2 = new Regex(pattern, (RegexOptions)1, TimeSpan.FromMinutes(1.0));
	//{/fact}
	
	//{fact rule=regular-expression-dos-infinite-timeout@v1.0 defects=1}
	private Regex rgx3 = new Regex(pattern, (RegexOptions)1, TimeSpan.FromHours(1.0));
	
}
//{/fact}
