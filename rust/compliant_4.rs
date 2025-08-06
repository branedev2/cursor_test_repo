/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=out-of-bounds-write@v1.0 defects=0}
// Compliant: Safe access within array bounds and incorrect condition check.
    fn compliant() {
        let mut arr = [0; 5];
        let index = 10;
        if index < arr.len() {
            arr[index] = 42;
        }
    }
// {/fact}