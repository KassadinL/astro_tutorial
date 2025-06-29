---
title: My Fourth Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.

***

## Syntax Highlight Sample

```JavaScript title="partial_permutation.js"
function partial_permutation(pool, require_length) {
  if (require_length <= 0) return [""];
  return pool.map(select => partial_permutation(remove(poll, select), require_length - 1).map(rest => select + rest)).flat()
}
```

## Mermaid Diagram Sample

````md title="test_chart"
```mermaid
flowchart LR
  A[This is text in A]
  B>This is text in B]
  C[/This is text in C/]
  D[(This is text in D)]
  
  A --> B --> C --> D
```
````

above code will generate following diagram:

```mermaid
flowchart LR
  A[This is text in A]
  B>This is text in B]
  C[/This is text in C/]
  D[(This is text in D)]

  A --> B --> C --> D
```

### [MDN shared assets sample](https://github.com/mdn/shared-assets/blob/main/images/diagrams/http/redirections/301-redirection.mmd)

````md title="MDN shared assets sample"
```mermaid
sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Request resource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Resource moved<br>Respond with new location
    Server-->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Request resource at new location
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Return resource
    Server-->>Client: HTTP/1.1 200 OK
```
````

will render as following:

```mermaid
sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Request resource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Resource moved<br>Respond with new location
    Server-->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Request resource at new location
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Return resource
    Server-->>Client: HTTP/1.1 200 OK
```
