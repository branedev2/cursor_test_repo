/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__UInt64_rand_multiply_51a.cs
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-51a.tmpl.cs
*/
/*
 * @description
 * CWE: 190 Integer Overflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: A hardcoded non-zero, non-min, non-max, even number
 * Sinks: multiply
 *    GoodSink: Ensure there will not be an overflow before multiplying data by 2
 *    BadSink : If data is positive, multiply by 2, which can cause an overflow
 * Flow Variant: 51 Data flow: data passed as an argument from one function to another in different classes in the same package
 *
 * */

using TestCaseSupport;
using System;

namespace testcases.CWE190_Integer_Overflow
{
class CWE190_Integer_Overflow__UInt64_rand_multiply_51a : AbstractTestCase
{
#if (!OMITBAD)
    // {fact rule=integer-overflow@v1.0 defects=1}
    public override void Bad()
    {
        ulong data;
        /* POTENTIAL FLAW: Use a random value */
        data = IO.GetRandomULong();
        CWE190_Integer_Overflow__UInt64_rand_multiply_51b.BadSink(data  );
    }
    // {/fact}
#endif //omitbad
#if (!OMITGOOD)
    public override void Good()
    {
        GoodG2B();
        GoodB2G();
    }

    /* goodG2B() - use goodsource and badsink */
    // {fact rule=integer-overflow@v1.0 defects=0}
    private void GoodG2B()
    {
        ulong data;
        /* FIX: Use a hardcoded number that won't cause underflow, overflow, divide by zero, or loss-of-precision issues */
        data = 2;
        CWE190_Integer_Overflow__UInt64_rand_multiply_51b.GoodG2BSink(data  );
    }
    // {/fact}

    /* goodB2G() - use badsource and goodsink */
    // {fact rule=integer-overflow@v1.0 defects=0}
    private void GoodB2G()
    {
        ulong data;
        /* POTENTIAL FLAW: Use a random value */
        data = IO.GetRandomULong();
        CWE190_Integer_Overflow__UInt64_rand_multiply_51b.GoodB2GSink(data  );
    }
    // {/fact}
#endif //omitgood
}
}
