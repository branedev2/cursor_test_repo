/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=out-of-bounds-read@v1.0 defects=1}
// Noncompliant: Out of bounds read can lead to undefined behavior. 
	fn noncompliant() {
		let numbers = vec![1, 2, 3, 4, 5];
		let index = 10;  
		unsafe {
			let value = numbers.get_unchecked(index);
			println!("Value: {}", value);
		}
	}
// {/fact}