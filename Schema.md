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
| email | URL/string | yes | `contact@kira.pro.et` |
| socialLinks | array | no | Confirmed URLs only: GitHub and LinkedIn |

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
| screenshotSource | enum | yes | `captured`, `existing-real`, `user-supplied`, or `placeholder` |

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
| variants | AssetVariant[] | yes | Responsive 480/768/1200 WebP/AVIF derivatives where applicable |
| loadingPriority | enum | yes | `critical`, `near-fold`, or `deferred` |

## AssetVariant

| Field | Type | Required | Notes |
|---|---|---:|---|
| path | string | yes | Local derivative path |
| format | enum | yes | `avif` or `webp` |
| width | integer | yes | Intrinsic derivative width |
| height | integer | yes | Intrinsic derivative height |
| bytes | integer | yes | Verified file size |

## Approved Projects

1. `zewijuna`
2. `yourcloser`
3. `dms`
4. `pommy`
5. `majestic`

No additional primary case-study record may be published during this scope.

## OpenSourceTool

| Field | Type | Required | Notes |
|---|---|---:|---|
| name | string | yes | Verified project name |
| category | enum | yes | `open-source` or `developer-tools` |
| repositoryUrl | URL | yes | Confirmed GitHub URL |
| summary | string | yes | Factual concise description |
| featured | boolean | yes | Controls the separate tooling section |

KirzKit is the current OpenSourceTool record. It links to `https://github.com/kirawebdesigner/KirzKit` and remains separate from the five primary case studies.

## Relationships

- One Person has many Projects.
- One Project has one card image and many gallery images.
- Navigation and related-project blocks may reference only approved Projects.
- The Open Source / Developer Tools section may reference OpenSourceTool records but must not add them to project navigation or the main case-study count.

## Current Responsive Asset Notes

The Majestic full-page case-study preview uses responsive `website-fullpage-preview-640` and `website-fullpage-preview-1040` AVIF/WebP variants. The original user-supplied PNG is retained as source material and is not requested during initial navigation.
