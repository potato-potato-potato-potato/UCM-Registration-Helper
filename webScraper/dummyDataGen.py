import requests
import time
import argparse

quryString =[
    "/StudentRegistrationSsb/ssb/searchResults/getClassDetails",
    "/StudentRegistrationSsb/ssb/searchResults/getSectionBookstoreDetails",
    "/StudentRegistrationSsb/ssb/searchResults/getCourseDescription",
    "/StudentRegistrationSsb/ssb/searchResults/getSyllabus",
    "/StudentRegistrationSsb/ssb/searchResults/getRestrictions",
    "/StudentRegistrationSsb/ssb/searchResults/getFacultyMeetingTimes",
    "/StudentRegistrationSsb/ssb/searchResults/getEnrollmentInfo",
    "/StudentRegistrationSsb/ssb/searchResults/getCorequisites",
    "/StudentRegistrationSsb/ssb/searchResults/getSectionPrerequisites",
    "/StudentRegistrationSsb/ssb/searchResults/getCourseMutuallyExclusions",
    "/StudentRegistrationSsb/ssb/searchResults/getXlstSections",
    "/StudentRegistrationSsb/ssb/searchResults/getLinkedSections",
    "/StudentRegistrationSsb/ssb/searchResults/getFees",
    "/StudentRegistrationSsb/ssb/searchResults/getSectionCatalogDetails",
    "/StudentRegistrationSsb/ssb/searchResults/getSectionAttributes"
]


def dummyDataGen(args, quryStringindex = 0):
    for i in range(10000,10000+ int(args)):
        r = requests.get(f"https://reg-prod.ec.ucmerced.edu{quryString[quryStringindex]}?term=202510&courseReferenceNumber={i}")
        if r.ok:
            print(f"CRN:{i} -------------------------")
            print(r.json())
        time.sleep(1)


dummyDataGen(5)






