/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=cross-site-scripting@v1.0 defects=1}
// Noncompliant: Directly includes user input in HTML without encoding.
    let user_input = request.query("user_input");
    let html = format!("<div>{}</div>", &user_input);
    response.set_body(html)
// {/fact} 