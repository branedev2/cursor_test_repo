using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace RazorVulnerableApp.Controllers;

internal class ViewBag
{
	[field: CompilerGenerated]
	// [field: DebuggerBrowsable(/*Could not decode attribute arguments.*/)]
	public static object? RenderedTemplate
	{
		[CompilerGenerated]
		get;
		[CompilerGenerated]
		internal set;
	}

	[field: CompilerGenerated]
	// [field: DebuggerBrowsable(/*Could not decode attribute arguments.*/)]
	public static string? Template
	{
		[CompilerGenerated]
		get;
		[CompilerGenerated]
		internal set;
	}
}
