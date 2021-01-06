from django.db import models
from phone_field import PhoneField


# Create your models here.

class Shipper(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    email = models.EmailField(max_length=254, null=True, blank=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey('auth.User', related_name='shipper_creator', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created_at']

    def __unicode__(self):
        return '%s' % self.first_name


class Line(models.Model):
    name = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey('auth.User', related_name='line_creator', on_delete=models.CASCADE)


class Vessel(models.Model):
    name = models.CharField(max_length=50)

    line = models.ForeignKey(Line, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey('auth.User', related_name='vessel_creator', on_delete=models.CASCADE)


class Consignment(models.Model):
    PENDING = 0
    COMPLETE = 1

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (COMPLETE, 'Complete')
    )

    container = models.CharField(max_length=12, null=True, blank=True)

    shipper = models.ForeignKey(Shipper, on_delete=models.RESTRICT)

    line = models.ForeignKey(Line, on_delete=models.RESTRICT)

    departure = models.DateField()
    arrival = models.DateField()

    vessel = models.ForeignKey(Vessel, on_delete=models.RESTRICT)

    status = models.IntegerField(default=PENDING, choices=STATUS_CHOICES)

    receipt_number = models.CharField(max_length=50, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey('auth.User', related_name='consignment_creator', on_delete=models.RESTRICT)