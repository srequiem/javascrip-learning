require "google/cloud/storage"

storage_client = Google::Cloud::Storage.new project: 'test-project-name'

# Attempt to download video from "http://storage.googleapis.com/fifth-reality-212310.appspot.com/Diciembre/Mid90s.2018.mp4"
bucket = storage_client.bucket 'storage.googleapis'
file = bucket.file '/fifth-reality-212310.appspot.com/Diciembre/Mid90s.2018.mp4'
file.download 'Mids90s.2018.mp4'
