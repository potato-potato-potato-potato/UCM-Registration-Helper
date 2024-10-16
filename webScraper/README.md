# webScraper

## Purpose
The purpose of the programs of this folder is to automatically collect course data.

## To-do
- Decide upon a final format for course data fetched from CRN.
- Decide how to handle npm dependencies.

## Files
- **iframeScraper.js** is a simple script that provides function to automatically get possible CRNs.
It requires the school website to be open in a real browser, but it just gets JSON data instead of simulating clicks through pages.
- **fetchCrn.mjs** is a simple script that takes a single CRN and returns an object that contains all information about the corresponding course.
