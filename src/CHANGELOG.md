# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project aims to follow [Semantic Versioning](https://semver.org/).

## [1.0.1] - 2025-06-02

### Changed
- Improved HTML semantics:
  - Replaced the `<h1>` + `<h3>` structure with `<h1>` + `<h2>` to respect heading hierarchy and add `<hgroup>`
- Cleaned up HTML and React code:
  - Replaced `<button>`  by `<a>` elements and improve the rendering
  - Move the function LanguageSwitcher outside the app component
