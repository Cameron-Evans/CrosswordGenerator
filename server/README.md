To launch the backend server run:
"npm i"
"pip install -r python/requirements.txt"
"node server.js"

This will launch an express server on the EXPRESS_PORT environment variable
and a flask server on the FLASK_PORT environment variable.

The flask server takes ~15 seconds to boot, and should only be queried by the express server.
Let the express server make all requests to the flask server.

Ensure the ./.env file and ./python/cc.en.100.bin file are both in place.

This works on linux only