/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=thread-safety-violation@v1.0 defects=1}
// Noncompliant: Performing a blocking file write operation within an asynchronous function without proper safeguards.
    async fn write_to_file_blocking(file_path: &str, content: &str) {
        task::spawn_blocking(move || {
            fs::write(file_path, content).unwrap();
        }).await.unwrap();
    }
// {/fact} 