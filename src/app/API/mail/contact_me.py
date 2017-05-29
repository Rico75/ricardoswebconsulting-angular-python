# This is my Contact Email Obj #

import smtplib
from email.mime.text import MIMEText

class ContactEmail(object):

    def __init__(self,FirstName,LastName,Subject,EmailTo,EmailFrom,Message):
        self.FirstName  = ""
        self.LastName   = ""
        self.Subject    = ""
        self.EmailTo    = ""
        self.EmailFrom  = ""
        self.Message    = ""

    # Add methods to set data
    def add_FirstName(self,firstName):
        self.FirstName = firstName

    def add_LastName(self,lastName):
        self.LastName = lastName

    def add_Subject(self,subject):
        self.Subject = subject

    def add_EmailTo(self,emailTo):
        self.EmailTo = emailTo

    def add_EmailFrom(self,emailFrom):
        self.EmailFrom = emailFrom

    def add_Message(self,msg):
        self.Message = msg

    # Get methods to retrieve data
    def get_FirstName(self):
        return self.FirstName

    def get_LastName(self):
        return self.LastName

    def get_Subject(self):
        return self.Subject

    def get_EmailTo(self):
        return self.EmailTo

    def get_EmailFrom(self):
        return self.EmailFrom

    def get_Message(self):
        return self.Message


