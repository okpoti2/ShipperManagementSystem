import django_filters as filters
from .models import Shipper, Line, Vessel, Consignment
from django.contrib.auth.models import User


class ShipperFilter(filters.FilterSet):
    class Meta:
        model = Shipper
        fields = {
            'first_name': ['exact', 'icontains', 'startswith'],
            'last_name': ['exact', 'icontains', 'startswith'],
            'email': ['exact', 'startswith'],
            'phone_number': ['exact', 'contains', 'startswith'],
            'created_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'updated_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'modified_by': ['exact'],
        }


class LineFilter(filters.FilterSet):
    class Meta:
        model = Line
        fields = {
            'name': ['exact', 'icontains', 'startswith'],
            'created_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'updated_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'modified_by': ['exact'],
        }


class VesselFilter(filters.FilterSet):
    class Meta:
        model = Vessel
        fields = {
            'name': ['exact', 'icontains', 'startswith'],
            'line': ['exact'],
            'created_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'updated_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'modified_by': ['exact'],
        }


class ConsignmentFilter(filters.FilterSet):
    class Meta:
        model = Consignment
        fields = {
            'container': ['exact', 'icontains', 'startswith'],
            'shipper': ['exact'],
            'line': ['exact'],
            'departure': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'arrival': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'vessel': ['exact'],
            'status': ['exact', 'icontains', 'startswith'],
            'receipt_number': ['exact', 'icontains', 'startswith'],
            'created_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'updated_at': ['lt', 'gt', 'year', 'exact', 'year__gt', 'year__lt'],
            'modified_by': ['exact'],
        }


class UserFilter(filters.FilterSet):
    class Meta:
        model = User
        fields = {
            'first_name': ['exact', 'icontains', 'startswith'],
            'last_name': ['exact', 'icontains', 'startswith'],
            'email': ['exact', 'startswith'],
        }
