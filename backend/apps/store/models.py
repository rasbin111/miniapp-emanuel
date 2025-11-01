from django.db import models


# Create your models here.
class ContentType(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Content(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    content_name = models.CharField(max_length=100, null=True)
    eng = models.CharField(max_length=250)
    swe = models.CharField(max_length=250)

    def __str__(self):
        return self.content_type.name + " " + str(self.eng)


class Terms(models.Model):
    eng = models.TextField()
    swe = models.TextField()

    class Meta:
        verbose_name_plural = "Terms"
