#{fact rule=cross-site-scripting@v1.0 defects=1}

def lambda_handler(event, context):
	html = f"<div>{event['input']}</div>"
	result = {
		"statusCode": 200,
		# ruleid: tainted-html-response
		"body": html,
		"headers": {
			"Content-Type": "text/html"
		}
	}
	return result

#{/fact}
