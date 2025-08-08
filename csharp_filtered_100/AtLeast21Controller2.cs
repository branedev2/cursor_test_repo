using System;
using RazorVulnerableApp.Controllers;
//{fact rule=missing-authorization@v1.0 defects=0}
[Authorize(Roles = "LegalAdultGroup")]
public class AtLeast21Controller2 : Controller
{
	public AtLeast21Controller.IActionResult Index()
	{
		return View();
	}

	private AtLeast21Controller.IActionResult View()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
}//{/fact}
