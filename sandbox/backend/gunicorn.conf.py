# Gunicorn Configuration

import multiprocessing


# Development Only
reload = True
reload_engine = 'poll'

# Server Socket
# bind = '0.0.0.0:8080'
bind = ['0.0.0.0:8080', 'unix:sandbox.sock']

# Worker Process(es)
# workers = 1
workers = multiprocessing.cpu_count() // 2
# workers = multiprocessing.cpu_count() * 2 + 1

# Timeout in Second(s)
timeout = 30
