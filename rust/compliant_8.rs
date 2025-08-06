/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=cross-site-scripting@v1.0 defects=0}
// Compliant: Safely encodes user input using `encode_safe`.
    let user_input = request.query("user_input");
    let html = format!("<div>{}</div>", encode_safe(&user_input));
    response.set_body(html)
// {/fact}