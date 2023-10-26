from django.db import models

class Inventory(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    ingredient_name = models.CharField(max_length=255, blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    count = models.IntegerField(blank=True, null=True)
    restock_count = models.IntegerField(blank=True, null=True)
    minimum = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'inventory'
