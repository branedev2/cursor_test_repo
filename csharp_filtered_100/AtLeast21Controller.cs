using System;
using RazorVulnerableApp.Controllers;

//{fact rule=missing-authorization@v1.0 defects=1}
[AllowAnonymous]
public class AtLeast21Controller : Controller
{
	public interface IActionResult
	{
	}

	public IActionResult Index()
	{
		return View();
	}

	private IActionResult View()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}
//{/fact}