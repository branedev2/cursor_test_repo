/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=out-of-bounds-read@v1.0 defects=0}
// Compliant: Safe access within array bounds and incorrect condition check.
    fn compliant() {
        let numbers = vec![1, 2, 3, 4, 5];

        unsafe {
            for i in 0..4 {
                let value = numbers.get_unchecked(i);
                println!("Value: {}", value);
            }
        }
    }
// {/fact}