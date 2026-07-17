# Content Schema

## Scope

This static portfolio has no runtime database. This document defines the content model that must remain consistent across homepage cards, the work index, project detail pages, metadata, and navigation.

## Person

| Field | Type | Required | Notes |
|---|---|---:|---|
| name | string | yes | Kirubel Daniel |
| role | string | yes | Product-focused full-stack positioning |
| location | string | yes | Addis Ababa, Ethiopia |
| shortBio | string | yes | Concise homepage biography |
| longBio | string | yes | Builder-focused About content |
| email | URL/string | no | Must be confirmed |
| socialLinks | array | no | Confirmed URLs only |

## Project

| Field | Type | Required | Notes |
|---|---|---:|---|
| slug | string | yes | Stable route segment |
| name | string | yes | Real project name |
| summary | string | yes | Factual one- or two-sentence definition |
| category | string | yes | Product category, not generic design label |
| yearOrState | string | no | Include only when verified |
| purpose | string | yes | Problem or operational purpose |
| responsibilities | string[] | yes | Kirubel's actual work |
| features | string[] | yes | Verified product capabilities |
| technologies | string[] | no | Verified stack only |
| outcome | string | no | Supported current state; no fabricated metrics |
| liveUrl | URL | no | Confirmed links only |
| repositoryUrl | URL | no | Confirmed links only |
| cardImage | Asset | yes | Real screenshot or documented placeholder |
| galleryImages | Asset[] | yes | Real screenshots or documented placeholders |
| screenshotSource | enum | yes | `captured`, `existing-real`, or `placeholder` |

## Asset

| Field | Type | Required | Notes |
|---|---|---:|---|
| path | string | yes | Local project-relative path |
| alt | string | yes | Describes the actual interface |
| width | integer | yes | Intrinsic pixels |
| height | integer | yes | Intrinsic pixels |
| project | relation | yes | Parent project |
| privacyReviewed | boolean | yes | Must be true before use |
| sourceNote | string | yes | Where/how it was captured |

## Approved Projects

1. `zewijuna`
2. `yourcloser`
3. `dms`
4. `pommy`
5. `majestic`

No additional project record may be published during this scope.

## Relationships

- One Person has many Projects.
- One Project has one card image and many gallery images.
- Navigation and related-project blocks may reference only approved Projects.
