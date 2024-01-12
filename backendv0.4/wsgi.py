from server import app
from api_rag import *

client = ragInitialisation()

if __name__ == "__main__":
	app.run()
