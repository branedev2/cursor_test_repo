using System;

namespace RazorVulnerableApp.Controllers;

public class HomeController : Controller
{
	[HttpPost]
	[ValidateInput(false)]
	public ActionResult Index(string inert, string razorTpl)
	{
		//{fact rule=code-injection@v1.0 defects=1}
		ViewBag.RenderedTemplate = Razor.Parse(razorTpl);
		ViewBag.Template = razorTpl;
		return View();
	}

	private ActionResult View()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
	//{/fact}

	[HttpPost]
	[ValidateInput(false)]
	public ActionResult Index2(string inter, string razorTpl)
	{
		string razorTpl2 = someFunction(razorTpl);
		//{fact rule=code-injection@v1.0 defects=0}
		ViewBag.RenderedTemplate = Razor.Parse(razorTpl2);
		ViewBag.Template = razorTpl;
		return View();
	}

	private string someFunction(string razorTpl)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		throw new NotImplementedException();
	}
 	//{/fact}
}
