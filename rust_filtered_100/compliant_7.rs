/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
// Compliant: Safely converts a u32.
    fn compliant() {
        let num: u32 = 12345;
        let bytes: [u8; 4] = num.to_le_bytes(); 
        println!("{:?}", bytes);
    }
// {/fact}