from django.db import models

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    content_box = models.TextField(blank=True)
    content_box_2 = models.TextField(blank=True)

    def __str__(self):
        return self.title