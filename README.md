# @n8n-dev/n8n-nodes-medium

![medium Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-medium.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-medium)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing medium API integrations by hand.**

Every time you connect n8n to medium, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to medium took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Welcome**, **User**, **Publication**, **Article**, **Misc**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-medium
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-medium`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **medium API** → paste your API key
3. Drag the **medium** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Welcome</b> (1 operations)</summary>

- Get Welcome

</details>

<details>
<summary><b>User</b> (9 operations)</summary>

- Get User ID
- Get User Info
- Get User s Articles
- Get User Followers
- Get User Following
- Get User s Interests
- Get User s Lists
- Get User s Publications
- Get User s Top Articles

</details>

<details>
<summary><b>Publication</b> (4 operations)</summary>

- Get Publication ID
- Get Publication Info
- Get Publication Articles
- Get Publication Newsletter

</details>

<details>
<summary><b>Article</b> (6 operations)</summary>

- Get Article Info
- Get Article s Content
- Get Article Fans
- Get Article s Markdown
- Get Related Articles
- Get Article Responses

</details>

<details>
<summary><b>Misc</b> (4 operations)</summary>

- Get Latest Posts
- Get Related Tags
- Get Top Writers
- Get Topfeeds

</details>

<details>
<summary><b>List</b> (3 operations)</summary>

- Get List Info
- Get List Articles
- Get List Responses

</details>

<details>
<summary><b>Search</b> (5 operations)</summary>

- Get Search Articles
- Get Search Lists
- Get Search Publications
- Get Search Tags
- Get Search Users

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from medium docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official medium OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **medium** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the medium API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
