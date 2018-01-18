json.extract! post, :id, :title, :body, :published, :created_at, :updated_at, :factorial
json.url post_url(post, format: :json)
