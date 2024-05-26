# URL Shortner

- Design a URL Shortner service that takes valid URL & returns a shortened URL, redirecting the user to the previously provided URL

- also keep track of total visits/clicks on the URL

- Routes: 
    -   Post/URL: Generates a new short URL and returns the shortened url in the format of exaple.com/random-id.

    -  GET/:id- Redirects teh user to the original URL

    - GET/URL/analytics/:id - Returns the clicks for the provided short id.