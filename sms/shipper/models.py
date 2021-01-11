from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import User


class Shipper(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    email = models.EmailField(max_length=254, null=True, blank=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey(User, null=True, blank=True, related_name='shipper_creator',
                                    on_delete=models.CASCADE)

    class Meta:
        ordering = ['created_at']

    def __unicode__(self):
        return '%s' % self.first_name

    def __str__(self):
        return '%s' % self.first_name


class Line(models.Model):
    name = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey(User, null=True, blank=True, related_name='line_creator', on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.name


class Vessel(models.Model):
    name = models.CharField(max_length=50)

    line = models.ForeignKey(Line, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey(User, null=True, blank=True, related_name='vessel_creator',
                                    on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.name


class Consignment(models.Model):
    YES = 'YES'
    NO = 'NO'

    STATUS_CHOICES = (
        (YES, 'YES'),
        (NO, 'NO')
    )

    container = models.CharField(max_length=12, null=True, blank=True)

    shipper = models.ForeignKey(Shipper, on_delete=models.RESTRICT, null=True, blank=True)

    line = models.ForeignKey(Line, on_delete=models.RESTRICT, null=True, blank=True)

    departure = models.DateField(null=True, blank=True)
    arrival = models.DateField(null=True, blank=True)

    vessel = models.ForeignKey(Vessel, on_delete=models.RESTRICT, null=True, blank=True)

    status = models.CharField(default=NO, max_length=4, choices=STATUS_CHOICES, null=True, blank=True)

    receipt_number = models.CharField(max_length=50, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    modified_by = models.ForeignKey(User, null=True, blank=True, related_name='consignment_creator',
                                    on_delete=models.RESTRICT)

    def __str__(self):
        return '%s' % self.container


class ExFile(models.Model):
    file = models.FileField()

    created_at = models.DateTimeField(auto_now_add=True)
    modified_by = models.ForeignKey(User, null=True, blank=True, related_name='file_uploader',
                                    on_delete=models.RESTRICT)

    def __str__(self):
        return self.file.name
