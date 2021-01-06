from .models import Shipper, Line, Vessel, Consignment
from django.contrib.auth.models import User

from .serializers import (ShipperSerializer,
                          LineSerializer, VesselSerializer, ConsignmentSerializer, UserSerializer)
from .filters import (ShipperFilter,
                      LineFilter, VesselFilter, ConsignmentFilter, UserFilter)

from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter


class ShipperViewSet(viewsets.ModelViewSet):
    queryset = Shipper.objects.all()
    serializer_class = ShipperSerializer
    filter_class = ShipperFilter


class LineViewSet(viewsets.ModelViewSet):
    queryset = Line.objects.all()
    serializer_class = LineSerializer
    filter_class = LineFilter


class VesselViewSet(viewsets.ModelViewSet):
    queryset = Vessel.objects.all()
    serializer_class = VesselSerializer
    filter_class = VesselFilter


class ConsignmentViewSet(viewsets.ModelViewSet):
    queryset = Consignment.objects.all()
    serializer_class = ConsignmentSerializer
    filter_class = ConsignmentFilter
