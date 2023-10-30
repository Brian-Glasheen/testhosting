from django.db import models

# Create your models here.
class Menu(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    category = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'menu'

    def _str_(self):
            return self.name