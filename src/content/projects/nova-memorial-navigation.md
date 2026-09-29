---
title: Nova Memorial Navigation
summary: An interactive map and name search that guides visitors to each memorial at the Nova memorial site in Re'im.
platform: Wix Headless
tags: [Wix Headless, Claude Code, Astro, React, TypeScript, Data processing]
year: 2026
order: 1
link: https://www.novasitenav.com/
cover: ../../assets/projects/nova.png
---

## The problem

The Nova memorial site at Re'im holds hundreds of memorials. Visitors who came to find a specific name had no way to know where it was, so they walked the site searching.

## What I built

A full navigation system for the site, built on Wix Headless and developed with Claude Code:

- **Interactive satellite map** of the memorial site, with its zones, walking paths, entrances and points of interest drawn to scale.
- **Name search** that finds a person and takes the visitor straight to their memorial on the map.
- **Live location and compass**, so visitors can see where they are standing relative to the memorial they're looking for.
- **Management tools** for the site team to keep names, photos and locations up to date.

## The data work

A large part of the project was data. I processed, cleaned and cross-checked the full list of names against their photos and physical locations, and built a repeatable pipeline for applying corrections as the families and site team sent them in.

## Stack

Wix Headless (Wix SDK), Astro, React, TypeScript, Leaflet, Claude Code.
