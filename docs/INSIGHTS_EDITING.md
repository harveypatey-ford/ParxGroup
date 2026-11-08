# Parx Group Insights publishing

The Insights pages are built from JSON files in `src/content/articles/`. There is no database, article API, or client login.

## Edit an existing article

1. Open the relevant file in `src/content/articles/` in GitHub.
2. Select **Edit**, change the article fields, and commit to a working branch.
3. Check the resulting Netlify preview, particularly layout, links, featured image, author details and references.
4. Merge the approved change into the branch used for the production build when ready.

Use the existing article file as a template for new articles. Keep `slug` unique and avoid changing existing slugs because the current published URLs depend on them. The `content` field contains HTML; use valid HTML and JSON quoting. `article_references` is an array of objects with `title`, `url` and optional `accessed_date`.

Set `published` to `true` only when the article is approved and `published_at` is set to its intended date. The site and its sitemap only use published articles.

**Important:** This GitHub repository is public. Never commit confidential material or unpublished drafts to it, even with `published: false`. Store drafts in a private location until approved.

## Migration notes

- 17 published articles were imported from the Bolt Database CSV export provided on 8 November 2026.
- Their HTML body, slugs, titles, imagery and publication metadata were preserved. Internal creator IDs and author email/telephone fields were not imported into the public repository.
- Two unpublished drafts were deliberately excluded from the public repository and from the preview build.
- The client portal login page remains as a visual placeholder, but it never requests credentials. Portal dashboards and old authentication were removed.
- The former in-site Insights admin editor is retired. Article updates are made through GitHub.
- Once production is migrated and checked, consider retiring the old database separately. Its data has **not** been deleted or changed by this migration.
