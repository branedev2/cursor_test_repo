/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=thread-safety-violation@v1.0 defects=0}
// Compliant: Uses `tokio::task::spawn_blocking` to perform file reading in a separate blocking thread
    async fn read_file_blocking(file_path: &str) -> String {
        tokio::task::spawn_blocking(move || {
            net::read_to_string(file_path).unwrap()
        }).await.unwrap()
    }
// {/fact}