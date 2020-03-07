from django.db import models

# Create your models here.
class Sentiment(models.Model):
    title = models.CharField(max_length=50)
    teacher = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class Article(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    body = models.TextField()