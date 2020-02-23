from django.urls import path, include
from rest_framework import routers 
from .views import index, fight

router = routers.DefaultRouter()

urlpatterns = [
    path('', index), 
    path('fight', fight, name='fight')
]

