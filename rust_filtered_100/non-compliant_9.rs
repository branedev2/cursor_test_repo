/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=out-of-bounds-write@v1.0 defects=1}
// Noncompliant: Out of bounds write can lead to undefined behavior. 
	fn noncompliant() {
		let mut arr = [0; 5];
		let i =6;
		unsafe {
			arr.get_unchecked_mut(i) = i;
		}
	}
// {/fact}