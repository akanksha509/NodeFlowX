# Welcome to FASTAPI Python project!

This project is set up like a standard Python project.

To manually create a virtualenv:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
% .venv\Scripts\activate.bat
```

If you are a MacOS/Linux platform, you would activate the virtualenv like this:

```
$ source .venv/bin/activate
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

At this point you can run the below code to start the server. This will start the server on port 8000 which is required for our frontend. If the server does not run on port 8000 then we need to change the API URL in .env file in frontend folder to make it work

```
$ uvicorn main:app --reload --port 8000
```
