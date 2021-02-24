# blog-content
📃 Content repository for my blog posts.

## Rationale

In order to implement blog functionality on my website, I use a git repository to keep track of the blog content.

By maintaining content in a separate repository to website code, blog articles can be released independently of new functionality.

## Specifications

* Blog articles are written in [Markdown](https://en.wikipedia.org/wiki/Markdown), both for its flexibility and simplicity.

* Articles are deployed to an AWS S3 bucket with simple CI/CD workflow using [Github Actions](https://github.com/features/actions).
