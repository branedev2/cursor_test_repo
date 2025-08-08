using System;

namespace RazorVulnerableApp.Controllers;

internal class ValidateInputAttribute : System.Attribute
{
	private bool v;

	public ValidateInputAttribute(bool v)
	{
		this.v = v;
	}
}
