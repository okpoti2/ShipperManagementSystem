from rest_framework import serializers
from .models import Shipper, Line, Vessel, Consignment
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'first_name', 'last_name', 'email']


class ShipperSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shipper
        fields = [
            'url',
            'first_name',
            'last_name',
            'email',
            'phone_number',
            'created_at',
            'updated_at',
            'modified_by',
        ]


class LineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Line
        fields = [
            'url',
            'name',
            'created_at',
            'updated_at',
            'modified_by',
        ]


class VesselSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vessel
        fields = [
            'url',
            'name',
            'line',
            'created_at',
            'updated_at',
            'modified_by',
        ]


class ConsignmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Consignment
        fields = [
            'url',
            'container',
            'shipper',
            'line',
            'departure',
            'arrival',
            'vessel',
            'status',
            'receipt_number',
            'created_at',
            'updated_at',
            'modified_by',
        ]