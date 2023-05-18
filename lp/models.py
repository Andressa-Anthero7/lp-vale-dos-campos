from django.db import models


# Create your models here.

class LandingPage(models.Model):
    video = models.FileField()
