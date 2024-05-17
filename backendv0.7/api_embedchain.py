from embedchain import App
import os

os.environ["OPENAI_API_KEY"] = "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"
os.environ["QDRANT_API_KEY"]="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw"
os.environ["QDRANT_URL"]="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333"

print("Connecting qdrant")

app = App.from_config(config_path="config.yaml")

app.add("./temp", data_type="directory")

answer, sources = app.query("What is lean portfolio management ?", citations=True)
print(answer)

print(sources)