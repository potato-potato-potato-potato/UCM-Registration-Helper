# webScraper

Note: I, RyanMHsiao, am inexperienced at using GitHub, so if anyone notices that something within this branch does not follow guidelines for GitHub, please notify me on the issue.

dummyDataGen.py is a proof of concept program written by Owen Gao and me that provides a very inefficient way of getting all CRNs.

consoleScraper.js is a simple script that can be pasted into JS console to semi-manually collect all the CRNs in a somewhat organized object.
Note that this does requires somebody to actually run the code in a browser instead of using a library like Puppeteer.
This is because learning how to work with such a library and adding it to the project does not seem worthwhile given the fact that it would only be used in a simple scraper that is kind of a standalone program in this project.

A major issue that will need to be resolved is the problem of updating information.
For data that can be retrieved with a single CRN, such as the instructor and class time, this is not a major concern, since that can be easily updated as needed with a simple query and furthermore is not expected to change.
If there should ever be a new valid CRN added, though, it is currently not very simple to check and add that CRN.
More conerningly, **there does not currently appear to be a way to check for available seats remaining in a class without using or simulating a web browser**.
One of the goals of this section of the project is to promote the ease of updating data by running the program on multiple different devices, which would help somewhat with the issue of new valid CRNs possibly being added.
As for the issue of available seats, it is such a major issue that it makes me question whether or not creating our own database for the project is even worthwhile.
