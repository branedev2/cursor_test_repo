using System;

public class Example
{
	private static bool IsApproximatelyEqual(double value1, double value2, double epsilon)
	{
		if (value1.Equals(value2))
		{
			return true;
		}
		if (double.IsInfinity(value1) | double.IsNaN(value1))
		{
			return value1.Equals(value2);
		}
		if (double.IsInfinity(value2) | double.IsNaN(value2))
		{
			return value1.Equals(value2);
		}
		double num = Math.Max(value1, value2);
		if (num.Equals(0.0))
		{
			num = Math.Min(value1, value2);
		}
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=1}
		return Math.Abs((value1 - value2) / num) <= 5E-324;
	}
 	//{/fact}
	private static bool lazyEqualLeftCompare(double v1, double v2)
	{
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=1}
		return Math.Abs(v1 - v2) <= 5E-324;
	}
	 //{/fact}

	private static bool lazyEqualRightCompare(double v1, double v2)
	{
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=1}
		return 5E-324 <= Math.Abs(v1 - v2);
	}
	 //{/fact}
	private static bool uselessZeroEqual()
	{
		double num = 0.0;
		double num2 = 0.0;
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=0}
		return Math.Abs(num - num2) <= 5E-324;
	}
	 //{/fact}

	private static bool isZero(double arg)
	{
		double num = 0.0;
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=0}
		return Math.Abs(arg - num) <= 5E-324;
	}
	 //{/fact}
	private static bool isZero2(double arg)
	{
		double num = 0.0;
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=0}
		return Math.Abs(num - arg) <= 5E-324;
	}
	//{/fact}
	private static bool isZero3(double arg)
	{
		double num = 0.0;
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=0}
		return Math.Abs(num - arg) <= 5E-324;
	}
	//{/fact}
	private static bool isZero4(double arg)
	{
		double num = 0.0;
		//{fact rule=correctness-double-epsilon-equality@v1.0 defects=0}
		return Math.Abs(arg - num) <= 5E-324;
	}
	//{/fact}
}
