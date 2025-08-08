/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
// Noncompliant: Uses unsafe `mem::transmute` to convert a u32.
    fn noncompliant() {
        let num: u32 = 12345;
        let bytes: [u8; 4] = unsafe { mem::transmute(num) }; 
        println!("{:?}", bytes);
    }
// {/fact} 