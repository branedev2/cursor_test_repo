# -*- coding: utf-8 -*-
'''
Created on 2016-10-20

@author: hustcc
'''

# for sqlite
# DATABASE_URI = 'sqlite:///git_webhook.db'
# for mysql
# {fact rule=hardcoded-credentials@v1.0 defects=1}
DATABASE_URI = 'mysql+pymysql://root:rwso@mysql/git_webhook'
# {/fact}

CELERY_BROKER_URL = 'redis://:@redis:6379/0'
CELERY_RESULT_BACKEND = 'redis://:@redis:6379/0'

SOCKET_MESSAGE_QUEUE = 'redis://:@redis:6379/0'

GITHUB_CLIENT_ID = 'b6e751cc48d664240467'
# {fact rule=hardcoded-credentials@v1.0 defects=1}
GITHUB_CLIENT_SECRET = '9e0e3edeff3cd98e4a1a43227b37c4fd9f76c971'
# {/fact}
