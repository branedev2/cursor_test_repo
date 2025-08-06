/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE400_Uncontrolled_Resource_Consumption__Params_Get_Web_for_loop_52b.cs
Label Definition File: CWE400_Uncontrolled_Resource_Consumption.label.xml
Template File: sources-sinks-52b.tmpl.cs
*/
/*
 * @description
 * CWE: 400 Uncontrolled Resource Consumption
 * BadSource: Params_Get_Web Read count from a querystring using Params.Get()
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: for_loop
 *    GoodSink: Validate count before using it as the loop variant in a for loop
 *    BadSink : Use count as the loop variant in a for loop
 * Flow Variant: 52 Data flow: data passed as an argument from one method to another to another in three different classes in the same package
 *
 * */

using TestCaseSupport;
using System;

using System.Web;

namespace testcases.CWE400_Uncontrolled_Resource_Consumption
{
class CWE400_Uncontrolled_Resource_Consumption__Params_Get_Web_for_loop_52b
{
#if (!OMITBAD)
    // {fact rule=resource-allocation-without-limits@v1.0 defects=1}
    public static void BadSink(int count , HttpRequest req, HttpResponse resp)
    {
        CWE400_Uncontrolled_Resource_Consumption__Params_Get_Web_for_loop_52c.BadSink(count , req, resp);
    }
    // {/fact}
#endif

#if (!OMITGOOD)
    /* goodG2B() - use goodsource and badsink */
    // {fact rule=resource-allocation-without-limits@v1.0 defects=0}
    public static void GoodG2BSink(int count , HttpRequest req, HttpResponse resp)
    {
        CWE400_Uncontrolled_Resource_Consumption__Params_Get_Web_for_loop_52c.GoodG2BSink(count , req, resp);
    }
    // {/fact}

    /* goodB2G() - use badsource and goodsink */
    // {fact rule=resource-allocation-without-limits@v1.0 defects=0}
    public static void GoodB2GSink(int count , HttpRequest req, HttpResponse resp)
    {
        CWE400_Uncontrolled_Resource_Consumption__Params_Get_Web_for_loop_52c.GoodB2GSink(count , req, resp);
    }
    // {/fact}
#endif
}
}
