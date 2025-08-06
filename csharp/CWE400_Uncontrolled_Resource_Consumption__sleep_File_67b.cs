/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE400_Uncontrolled_Resource_Consumption__sleep_File_67b.cs
Label Definition File: CWE400_Uncontrolled_Resource_Consumption__sleep.label.xml
Template File: sources-sinks-67b.tmpl.cs
*/
/*
 * @description
 * CWE: 400 Uncontrolled Resource Consumption
 * BadSource: File Read count from file (named c:\data.txt)
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks:
 *    GoodSink: Validate count before using it as a parameter in sleep function
 *    BadSink : Use count as the parameter for sleep withhout checking it's size first
 * Flow Variant: 67 Data flow: data passed in a class from one method to another in different source files in the same package
 *
 * */

using TestCaseSupport;
using System;

using System.Threading;

namespace testcases.CWE400_Uncontrolled_Resource_Consumption
{
class CWE400_Uncontrolled_Resource_Consumption__sleep_File_67b
{
#if (!OMITBAD)
    // {fact rule=resource-allocation-without-limits@v1.0 defects=1}
    public static void BadSink(CWE400_Uncontrolled_Resource_Consumption__sleep_File_67a.Container countContainer )
    {
        int count = countContainer.containerOne;
        /* POTENTIAL FLAW: Use count as the input to Thread.Sleep() */
        Thread.Sleep(count);
    }
    // {/fact}
#endif

#if (!OMITGOOD)
    /* goodG2B() - use goodsource and badsink */
    // {fact rule=resource-allocation-without-limits@v1.0 defects=0}
    public static void GoodG2BSink(CWE400_Uncontrolled_Resource_Consumption__sleep_File_67a.Container countContainer )
    {
        int count = countContainer.containerOne;
        /* POTENTIAL FLAW: Use count as the input to Thread.Sleep() */
        Thread.Sleep(count);
    }
    // {/fact}

    /* goodB2G() - use badsource and goodsink */
    // {fact rule=resource-allocation-without-limits@v1.0 defects=0}
    public static void GoodB2GSink(CWE400_Uncontrolled_Resource_Consumption__sleep_File_67a.Container countContainer )
    {
        int count = countContainer.containerOne;
        /* FIX: Validate count before using it in a call to Thread.Sleep() */
        if (count > 0 && count <= 2000)
        {
            Thread.Sleep(count);
        }
    }
    // {/fact}
#endif
}
}
