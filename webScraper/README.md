# webScraper

Note: I, RyanMHsiao, am inexperienced at using GitHub, so if anyone notices that something within this branch does not follow guidelines for GitHub, please notify me on the issue.

dummyDataGen.py is a proof of concept program written by Owen Gao and me that provides a very inefficient way of getting all CRNs.

consoleScraper.js is a simple script that can be pasted into JS console to semi-manually collect all the CRNs in a somewhat organized object.
Note that this does requires somebody to actually run the code in a browser instead of using a library like Puppeteer.
This is because learning how to work with such a library and adding it to the project does not seem worthwhile given the fact that it would only be used in a simple scraper that is kind of a standalone program in this project.

An issue that will need to be resolved is the problem of updating information.
For data that can be retrieved with a single CRN, such as the instructor and class time, this is not a major concern, since that can be easily updated as needed with a simple query and furthermore is not expected to change.
If there should ever be a new valid CRN added, though, it is currently not very simple to check and add that CRN.
One of the goals of this section of the project is to promote the ease of updating data by running the program on multiple different devices, which would help somewhat with the issue of new valid CRNs possibly being added.
Removed CRNs are theoretically easy to handle because testing for existence of a CRN is easy.
Further exploration of this would be best left until the time to make decisions related to server code.

The next immediate goal of this branch is to use the CRNs to get relevant information about the courses.
dummyDataGen.py also shows an example of this.
