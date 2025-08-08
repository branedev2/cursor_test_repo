using System.Diagnostics;

namespace Injections;

public class OsCommandInjection
{
	public void RunOsCommand(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		Process process = Process.Start(command);
	}
    //{/fact}

	public void RunOsCommand2(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		Process process = Process.Start("constant");
	}
    //{/fact}

	public void RunOsCommandWithArgs(string command, string arguments)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		Process process = Process.Start(command, arguments);
	}
    //{/fact}

	public void RunOsCommandWithArgs2(string command, string arguments)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		Process process = Process.Start("constant", "constant");
	}
    //{/fact}

	public void RunOsCommandWithProcessParam(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		Process process = new Process();
		process.StartInfo.FileName = command;
		process.Start();
	}
    //{/fact}

	public void RunOsCommandWithProcessParam2(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		Process process = new Process();
		process.StartInfo.FileName = "constant";
		process.Start();
	}
    //{/fact}

	public void RunOsCommandAndArgsWithProcessParam(string command, string arguments)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		Process process = new Process();
		process.StartInfo.FileName = command;
		process.StartInfo.Arguments = arguments;
		process.Start();
	}
    //{/fact}

	public void RunOsCommandAndArgsWithProcessParam2(string command, string arguments)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Expected O, but got Unknown
		Process process = new Process();
		process.StartInfo.FileName = "constant";
		process.StartInfo.Arguments = "constant";
		process.Start();
	}
    //{/fact}

	public void RunOsCommandWithStartInfo(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000f: Expected O, but got Unknown
		ProcessStartInfo processStartInfo = new ProcessStartInfo
		{
			FileName = command
		};
		Process process = Process.Start(processStartInfo);
	}
    //{/fact}

	public void RunOsCommandWithStartInfo2(string command)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_0013: Expected O, but got Unknown
		ProcessStartInfo processStartInfo = new ProcessStartInfo
		{
			FileName = "constant"
		};
		Process process = Process.Start(processStartInfo);
	}
    //{/fact}

	public void RunConstantAppWithArgs(string args)
	{
	//{fact rule=os-command-injection@v1.0 defects=1}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Expected O, but got Unknown
		ProcessStartInfo processStartInfo = new ProcessStartInfo
		{
			FileName = "constant",
			Arguments = args
		};
		Process process = Process.Start(processStartInfo);
	}

    //{/fact}
	public void RunConstantAppWithArgs2(string args)
	{
	//{fact rule=os-command-injection@v1.0 defects=0}
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_0012: Unknown result type (might be due to invalid IL or missing references)
		//IL_001f: Expected O, but got Unknown
		ProcessStartInfo processStartInfo = new ProcessStartInfo
		{
			FileName = "constant",
			Arguments = "constant"
		};
		Process process = Process.Start(processStartInfo);
	}
}
    //{/fact}
